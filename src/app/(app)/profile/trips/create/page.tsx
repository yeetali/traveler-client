import { getDestinations } from '@/app/(app)/destinations/actions'
import TripForm from './TripForm'
import { createTrip } from '../actions';

const CreateTrip = async () => {
    const destinations = await getDestinations();
    return <TripForm destinations={destinations} action={createTrip}/>
}

export default CreateTrip