"use client"

import { User } from '@/types/api'
import { useActionState } from 'react'
import { updateProfile } from './actions'

export const ProfileForm = ({data}: {data: User}) => {
    const [state, action, pending] = useActionState(updateProfile, null);
  return (
    <form action={action} className='flex flex-col gap-2'>
        <input type="hidden" name="id" defaultValue={data.id}/>
        <p>Email</p> <input type="email" name="email" defaultValue={data.email} />
        {state?.errors?.email && <p className='text-red-500'>{state.errors.email}</p>}
        <p>First Name</p> <input type="text" name="firstName" defaultValue={data.firstName} />
        {state?.errors?.firstName && <p className='text-red-500'>{state.errors.firstName}</p>}
        <p>Last Name</p> <input type="text" name="lastName" defaultValue={data.lastName} />
        {state?.errors?.lastName && <p className='text-red-500'>{state.errors.lastName}</p>}
        <button disabled={pending} type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md my-8'>
            {pending ? "Saving..." : "Save"}
        </button>
        {state?.errors?.id && (
            <p className='text-red-500'>{state.errors.id}</p>
        )}
    </form>
  )
}
