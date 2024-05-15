


import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Image
        className='rounded-lg'
        src={"/main_logo.svg"}
        width={40}
        height={40}
        alt='logo'
        priority
      />
    </div>
  )
}

export default Header