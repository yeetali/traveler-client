"use client"

import { destinationSchema, DestinationSchema } from '@/lib/schemas/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createDestination } from '../actions'

const CreateDestination = () => {
    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
        setError
    } = useForm<DestinationSchema>({
        resolver: zodResolver(destinationSchema),
    })

    const onSubmit = handleSubmit(async (data) => {
        const file = data.file instanceof FileList ? data.file[0] : data.file;
        const response = await createDestination({...data, file});
        if(response && 'error' in response) setError("root", { message: response.error})
    })
  return (
    <div>
        <form onSubmit={onSubmit} className='flex flex-col gap-2'>
            <input type="text" placeholder='name' {...register("name")} />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            <input type="text" placeholder='country' {...register("country")} />
            {errors.country && <p className='text-red-500'>{errors.country.message}</p>}
            <input type="file" multiple={false} {...register("file")} />
            {errors.file && <p className='text-red-500'>{errors.file?.message}</p>}

            <button className='bg-blue-500 text-white p-2 rounded-md' type='submit'>Submit</button>
            {errors.root && <p className='text-red-500'>{errors.root?.message}</p>}
        </form>
    </div>
  )
}

export default CreateDestination