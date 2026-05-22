"use client"
import Link from 'next/link'
import {HomeIcon , PhoneIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

  const itemCenter = "text-center flex items-center justify-center"
  const fontMichroma = "font-[family-name:var(--font-michroma)]"

  const iconStyle = `bg-red h-[16px] ${itemCenter} `
  const itemNavStyle = `  ${itemCenter} gap-[10px]  `
  


  return (
    <div className='flex  fixed top-0 white  w-screen bg-white z-50 ' >
      <div className='flex text-primary-dark justify-center items-center w-full h-20 gap-[50px] ' >
            <Link className= {`${itemNavStyle}`}   href={"/"} >
              <HomeIcon  className= {` ${iconStyle}`} />
            Accueil
            </Link>
            <h1 className= {` ${fontMichroma} text-[25px] ${itemCenter} `} >CORNER BARBER </h1>
            <Link href={"/contact"} className= {`${itemNavStyle}`}  >
             <PhoneIcon  className= {` ${iconStyle}`} />
              
              Réservation
            </Link>
            {/* <Link href={"/services"} >Service</Link> */}
      </div>
    </div>
  )
}

export default Navbar
