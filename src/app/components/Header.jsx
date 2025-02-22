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
                <div className='space-x-5'>
                    <Link href={'/sa'} className='text-gray-400 transition hover:text-white'>Home</Link>
                    <Link href={'/sa'} className='text-gray-400 transition hover:text-white'>About</Link>

                </div>
            </div>
        </header>
    )
}

export default Header
