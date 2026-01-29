import { destinationsApi } from "@/lib/api";
import { Destination } from "@/types/api";
import { redirect } from "next/navigation";

export const getDestinations = async () => {
  const { data } = (await destinationsApi.destinationsControllerFindAll()) as {
    data: Destination[];
  };

  return data;
};

export const createDestination = async (data: {
  name: string;
  country: string;
  file?: File;
}) => {
  try {
    await destinationsApi.destinationsControllerCreate(
      data.name,
      data.country,
      data.file,
    );
    redirect("/destinations");
  } catch (error) {
    console.log(error);
    return { error: "Failed to create a destination" };
  }
};
