"use client"
import Link from 'next/link'

const Login = () => {
    const submitedAction = async (data) => {
        console.log('submitted', data);
        
    }
  return (
    <div className='w-full max-w-md auto'>
        <form action={submitedAction} className='flex flex-col gap-2'>
            <input type="email" name='email' placeholder='Email' />
            <input type="password" name='password' placeholder='********' />
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Log In</button>
        </form>
        <p>
            Don&apos;t have an account? <Link href={"register"} className='text-blue-500'>Register</Link>
        </p>
    </div>
  )
}

export default Login