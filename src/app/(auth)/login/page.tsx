"use client"
import Link from 'next/link'
import { useActionState } from 'react'
import { login } from './actions'

const Login = () => {
    const [state, action, pending] = useActionState(login, null);

  return (
    <div className='w-full max-w-md auto'>
        <form action={action} className='flex flex-col gap-2'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder='Email' />
            {state?.errors?.email && <p className='text-red-500'>{state.errors.email[0]}</p>}
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder='********' />
            {state?.errors?.password && <p className='text-red-500'>{state.errors.password[0]}</p>}

            <button disabled={pending} type='submit' className='bg-blue-500 text-white p-2 rounded-md disabled:opacity-35 disabled:cursor-not-allowed'>Log In</button>
            {state?.error && <p className='text-red-500'>{state.error}</p>}
        </form>
        <p>
            Don&apos;t have an account? <Link href={"register"} className='text-blue-500'>Register</Link>
        </p>
    </div>
  )
}

export default Login