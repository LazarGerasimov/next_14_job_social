


import { HomeIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center p-2 max-w-6xl mx-auto'>
      <Image
        className='rounded-lg'
        src={"/main_logo.svg"}
        width={40}
        height={40}
        alt='logo'
        priority
      />

      <div className='flex-1'>
        <form className='flex items-center bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96'>
          <SearchIcon className='h-4 text-gray-600' />
          <input
            type="text"
            placeholder='Search'
            className='bg-transparent flex-1 outline-none'
          />
        </form>
      </div>

      <div>
        <Link
          href={""}
          className='icon'
        />
        <HomeIcon className='h-5' />
        <p>Home</p>
      </div>
    </div>
  )
}

export default Header