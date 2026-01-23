"use client"
import Link from 'next/link'
import { useActionState } from 'react'
import { register } from './actions'

const Register = () => {

  const [state, action, pending] = useActionState(register, null)
  
  return (
    <div className='w-full max-w-md auto'>
        <form action={action} className='flex flex-col gap-2'>
            <label htmlFor='firstName'>First Name:</label>
            <input type="text" name='firstName' placeholder='John' defaultValue={!state?.errors?.firstName ? state?.data.firstName : ""} />
            {state?.errors?.firstName && <p className='text-red-500'>{state?.errors?.firstName}</p>}
            <label htmlFor='lastName'>Last Name:</label>
            <input type="text" name='lastName' placeholder='Doe' defaultValue={!state?.errors?.lastName ? state?.data.lastName : ""} />
            {state?.errors?.lastName && <p className='text-red-500'>{state?.errors?.lastName}</p>}
            <label htmlFor='email'>Email:</label>
            <input type="email" name='email' placeholder='john@doe.com' defaultValue={!state?.errors?.email ? state?.data.email : ""} />
            {state?.errors?.email && <p className='text-red-500'>{state?.errors?.email}</p>}
            <label htmlFor='password'>Password:</label>
            <input type="password" name='password' placeholder='********' />
            {state?.errors?.password && <p className='text-red-500'>{state?.errors?.password}</p>}
            <label htmlFor='confirmPassword'>Confirm password:</label>
            <input type="password" name='confirmPassword' placeholder='********' />
            {state?.errors?.confirmPassword && <p className='text-red-500'>{state?.errors?.confirmPassword}</p>}
            <button type='submit' disabled={pending} className='bg-blue-500 text-white p-2 rounded-md disabled:opacity-30 disabled:cursornot-allowed'>Register</button>
            {state?.error && <p className='text-red-500'>{state.error}</p>}
        </form>
        <p>
            Already have an account?{" "} <Link href={"login"} className='text-blue-500'>Login</Link>
        </p>
    </div>
  )
}

export default Register