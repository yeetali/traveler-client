"use server";

import { getToken } from "@/lib/actions";
import { authApi, tripsApi } from "@/lib/api";
import { CreateTripDto, Expense, Trip, UpdateTripDto } from "@/types/api";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getMyTrips = async (page?: number, limit?: number) => {
  try {
    const token = await getToken();
    const {
      data: { id },
    } = await authApi.authControllerProfile({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await tripsApi.tripsControllerFindAll(
      "createdAt",
      id,
      page,
      limit,
      "DESC",
      ["destinations", "expenses"],
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.message || "Failed to fetch my trips",
      };
    }
    return { error: "Failed to fetch my trips" };
  }
};

export const getTrip = async (id: number) => {
  try {
    const token = await getToken();
    const { data } = await tripsApi.tripsControllerFindOne(id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.message || "Failed to fetch my trips",
      };
    }
    return { error: "Failed to fetch my trips" };
  }
};

export const createTrip = async (data: CreateTripDto) => {
  try {
    const token = await getToken();
    if (!token) return { error: "No access token" };
    await tripsApi.tripsControllerCreate(data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.message || "Failed to create a trip",
      };
    }
    return { error: "Failed to create a trip" };
  }
  redirect("/profile/trips");
};

export const updateTrip = async (
  data: UpdateTripDto & { expenses: Expense[] },
  trip: Trip,
) => {
  try {
    const token = await getToken();
    const { expenses, ...updateTripDto } = data;

    if (expenses) {
      const existingExpenses = new Map(
        trip.expenses.map((expense) => [expense.id, expense]),
      );

      for (const expense of expenses) {
        if (!expense.id) {
          await tripsApi.tripsControllerAddExpenseToTrip(trip.id, expense, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          const existingExpense = existingExpenses.get(expense.id);
          if (
            existingExpense &&
            JSON.stringify(existingExpense) !== JSON.stringify(expense)
          ) {
            await tripsApi.tripsControllerUpdateExpense(
              trip.id,
              expense.id,
              expense,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
          }
          existingExpenses.delete(expense.id);
        }
      }
      for (const [expenseId] of existingExpenses)
        await tripsApi.tripsControllerDeleteExpense(trip.id, expenseId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    }

    await tripsApi.tripsControllerUpdate(trip.id, updateTripDto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.message || "Failed to update a trip",
      };
    }
    return { error: "Failed to update a trip" };
  }
  redirect("/profile/trips");
};

export const deleteTrip = async (id: number) => {
  try {
    const token = await getToken();
    await tripsApi.tripsControllerRemove(id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    revalidatePath("/profile/trips");
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.message || "Failed to delete a trip",
      };
    }
    return { error: "Failed to delete a trip" };
  }
  redirect("/profile/trips");
};
