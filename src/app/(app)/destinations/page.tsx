import { getDestinations } from './actions'
import Image from 'next/image';

const Destinations = async () => {
    const destinations = await getDestinations();
    return destinations.length < 1 ? (<div>No destinations yet</div>) : (
        <div className='flex flex-col gap-2 w-full'>
            <table className='border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='border border-gray-300 p-2 bg-gray-100'>Name</th>
                        <th className='border border-gray-300 p-2 bg-gray-100'>Country</th>
                        <th className='border border-gray-300 p-2 bg-gray-100'>Media</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        destinations.map((dest) => {
                            return (
                                <tr key={dest.id}>
                                    <td className='border border-gray-300 p-2'>{dest.name}</td>
                                    <td className='border border-gray-300 p-2'>{dest.country}</td>
                                    <td className='border border-gray-300 p-2'>{dest.media && (<Image src={dest.media} alt={dest.name} width={300} height={300} />)}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Destinations