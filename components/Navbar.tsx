"use client"
import Link from 'next/link'
import {HomeIcon , PhoneIcon ,Bars3Icon  } from '@heroicons/react/24/solid'

const Navbar = () => {

  const itemCenter = "text-center flex items-center justify-center"
  const fontMichroma = "font-[family-name:var(--font-michroma)]"

  const iconStyle = `bg-red h-[16px] ${itemCenter} `
  const itemNavStyle = `  w-[150px]  ${itemCenter} gap-[10px]  `
  const hiddenLi = ` max-md:hidden`
  const logoStyle = ` ${fontMichroma}  text-[15px] md:text-[25px] max-md:absolute top-[38px] left-[25px] ${itemCenter} `
  const styleContainer = `flex  fixed top-0 white  w-screen
                          bg-white shadow-sm z-50 text-primary-dark
                          justify-center items-center w-full h-20 gap-[50px]`
  const menuIconStyle = ` fixed w-[50px] cursor-pointer text-primary-dark z-55 absolute top-[25px] right-[25px] md:hidden `




  return (
    <div className= {""} >
      <Bars3Icon className= {`${menuIconStyle}`} ></Bars3Icon>

      <div className= {`${styleContainer}  `} >

            <Link className= {`${itemNavStyle} ${hiddenLi} `}   href={"/"} >
              <HomeIcon  className= {` ${iconStyle}`} />
            Accueil
            </Link>
            <h1 className= {` ${logoStyle} `} >CORNER BARBER </h1>
            <Link className= {`${itemNavStyle} ${hiddenLi} `} href={"/contact"} >
             <PhoneIcon  className= {` ${iconStyle}`} />
              
              Réservation
            </Link>
            {/* <Link href={"/services"} >Service</Link> */}
      </div>
   </div>
  )
}

export default Navbar
