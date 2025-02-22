import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <header className='bg-gray-900 shadow-md'>
            <div className='max-w-6xl mx-auto p-4 flex items-center justify-between'>
                <div>
                    <span>NextJs</span>
                    <span className='text-gray-500'>Estate</span>
                </div>
                <div className='bg-gray-700 rounded-lg'>
                    <form action="" className='flex items-center px-2'>
                        <input type="text" name="" id="" className='p-2 bg-transparent text-sm focus:outline-none' placeholder='Search...' />
                        <button><FaSearch /></button>
                    </form>

                </div>
                <div className='space-x-5 flex items-center'>
                    <Link href={'/sa'} className='text-gray-400 transition hover:text-white'>Home</Link>
                    <Link href={'/sa'} className='text-gray-400 transition hover:text-white'>About</Link>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link href={'/login'} className='text-gray-400 transition hover:text-white'>Login</Link>
                        <Link href={'/register'} className='text-gray-400 transition hover:text-white'>Register</Link>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}

export default Header
