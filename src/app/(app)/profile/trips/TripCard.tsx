"use client"

import { Trip } from "@/types/api"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { Edit, Trash2 } from "lucide-react";
import PopUp from "@/components/PopUp"
import { deleteTrip } from "./actions"
import { dateToHuman } from "@/lib/utils"
import { useRouter } from "next/navigation"

const TripCard = ({ trip, width = "small" }: {trip: Trip, width?: "big" | "small" }) => {
    const router = useRouter()

    return (
    <Link href={`/profile/trips/${trip.id}`}>
        <div
        className={`flex flex-row justify-between p-6 border border-gray-300 rounded-md ${
            width === "big" ? "w-xs md:w-md" : "w-xs"
        } h-full`}
        >
        <div className="flex flex-col w-8/10">
            <h3 className="text-md font-bold text-2xl pb-2 truncate">
                {trip.title}
            </h3>
            <p className="text-sm text-gray-500">
                {dateToHuman(trip.startDate)} - {dateToHuman(trip.endDate)}
            </p>
                {trip.destinations && trip.destinations.length > 0 && (
            <div className="flex flex-col gap-2 w-full">
                <p className="text-sm text-gray-500">
                    {trip.destinations.length} destinations
                </p>
                <div className="flex flex-row gap-2 truncate">
                {trip.destinations.map((destination, index) => (
                    <p
                    key={destination.id}
                    className={`text-sm text-gray-500 pr-2 ${clsx(
                        index === trip.destinations.length - 1
                        ? "border-r-0"
                        : "border-r-2 border-gray-300"
                    )}`}
                    >
                    {destination.name}
                    </p>
                ))}
                </div>
                <div className="flex w-full">
                    {trip.destinations.map((destination, index) => (
                    <div
                    key={destination.id}
                    className={clsx(
                        "relative w-full h-50",
                        index !== 0 && "-ml-8"
                    )}
                    >
                    <Image
                      src={destination.media}
                      alt={destination.name}
                      fill
                      className={`rounded-md border-2 border-white object-cover ${clsx(
                        index !== 0 && "shadow-[-16px_0_12px_rgba(0,0,0,0.55)]"
                      )}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {trip.expenses && trip.expenses.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                {trip.expenses.length} expenses
              </p>
            </div>
          )}
        </div>
        {width === "big" && (
          <>
            <div className="flex flex-row h-min">
              {/* There's a link inside another link, so we need to prevent the parent link from being clicked */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  router.push(`/profile/trips/edit/${trip.id}`);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Edit size={20} className="text-gray-500 hover:text-blue-500" />
              </button>
              <PopUp
                title="Delete Trip"
                message="Are you sure about this?"
                handle={() => {
                    deleteTrip(trip.id);
                }}
              >
                <div className="hover:cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Trash2
                    size={20}
                    className="text-gray-500 hover:text-red-500"
                  />
                </div>
              </PopUp>
            </div>
          </>
        )}
      </div>
    </Link>
)
}

export default TripCard