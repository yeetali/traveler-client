import React from 'react'
import { getTrip, updateTrip } from '../../actions';
import { getDestinations } from '@/app/(app)/destinations/actions';
import TripForm from '../../create/TripForm';

const EditTrip = async ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = await params;
    const trip = await getTrip(id);
    const destinations = await getDestinations();

    if("error" in trip) return <div>Couldn&apos;t get the trip</div>
    
  return (
    <TripForm trip={trip} destinations={destinations} action={updateTrip} />
  )
}

export default EditTrip