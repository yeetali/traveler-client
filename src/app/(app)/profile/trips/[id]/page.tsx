import { deleteTrip, getTrip } from '../actions';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PopUp from '@/components/PopUp';
import { dateToHuman } from '@/lib/utils';
import Image from 'next/image';

const Trip = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    const trip = await getTrip(id);

    if("error" in trip) return <div>Couldn&apos;t get trip</div>
  return (
    <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2">
                <Link 
                href={"/profile/trips"}
                className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                    <ArrowLeft
                    size={20}
                    className='text-gray-500 hover:text-blue-500' />
                </Link>
            </div>
            <div className="flex flex-row gap-2">
                <Link 
                href={`/profile/trips/edit/${trip.id}`}
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
                >
                Edit
                </Link>
                <PopUp
                title='Delete Trip'
                message='Are you sure you want to delete this trip?'
                handle={async () => {
                    "use server";
                    await deleteTrip(trip.id);
                    }}
                >
                    <div className='hover:cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md'>
                        Delete
                    </div>
                </PopUp>
            </div>
        </div>
        <div className="flex flex-col gap-2 justify-between">
            <h1 className='text-2xl font-bold'>{trip.title}</h1>
            <p className='text-sm text-gray-500'>
                {dateToHuman(trip.startDate)} - {dateToHuman(trip.endDate)}
            </p>
        </div>
        <h1 className='text-lg font-bold'>Destinations</h1>
        <div className="flex flex-row gap-4 border-2 rounded-md p-3">
            {trip.destinations.map((dest) => (
                <div className="flex flex-col gap-2" key={dest.id}>
                    <h2 className='text-lg font-bold'>{dest.name}</h2>
                    <p className='text-sm text-gray-500'>{dest.country}</p>
                    <Image
                    src={dest.media}
                    alt={dest.name}
                    width={1000}
                    height={1000}
                    />
                </div>
            ))}
        </div>
        <h1 className='text-lg font-bold'>Expenses</h1>
        <div className="flex flex-col gap-4 border-2 rounded-md p-3">
            <div className="flex flex-col gap-2 ">
                <h2 className='text-lg font-bold'>Total</h2>
                <p className='text-sm text-gray-500'>
                    {trip.expenses.reduce((acc, expense) => acc + expense.amount, 0)}
                </p>
                <h2 className='text-lg font-bold'>Individual Expenses</h2>
                <div className='flex flex-row gap-2 '>
                    <div className="flex flex-col gap-2">
                        <p className='font-bold'>Category</p>
                        <p className='font-bold'>Amount</p>
                        <p className='font-bold'>Description</p>
                    </div>
                    {trip.expenses.map(expense => (
                        <div className="flex flex-col gap-2" key={expense.id}>
                            <p>{expense.category}</p>
                            <p>{expense.amount}</p>
                            <p>{expense.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trip