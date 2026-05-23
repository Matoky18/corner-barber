"use client"
import Link from 'next/link'
import {HomeIcon , PhoneIcon ,Bars3Icon , XMarkIcon   } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [open,setOpen] = useState(false)
  let styleMenuMobile = "hidden"

  console.log(open,styleMenuMobile)


  const itemCenter = "text-center flex items-center justify-center"
  const fontMichroma = "font-[family-name:var(--font-michroma)]"

  const iconStyle = `bg-red h-[16px] ${itemCenter} `
  const itemNavStyle = `  w-[150px]  ${itemCenter} gap-[10px]  `
  const hiddenLi = ` max-md:hidden`
  const logoStyle = ` ${fontMichroma}  text-[15px] md:text-[25px] max-md:absolute top-[38px] left-[25px] ${itemCenter} `
  const styleContainerDesktop = `flex  fixed top-0 white  w-screen
                          bg-white shadow-sm z-50 text-primary-dark
                          justify-center items-center w-full h-20 gap-[50px]`
  const menuIconStyle = ` fixed w-[50px] cursor-pointer text-primary-dark z-55 absolute top-[25px] right-[25px] md:hidden `

  const itemStyleMobile = "active:bg-gray border-y-1 border-[gray] py-[25px] flex items-center justify-between w-full px-[25px]"
   
  
  if (open) {
    styleMenuMobile = ` w-[100%] max-w-[250px] flex z-[500] flex-col bg-[white] h-full w-full fixed top-20 right-0 flex items-start p-50px pt-[150px]  `
    
  
  } else {
    styleMenuMobile = "hidden"

  }

  const iconMobile = !open?
      <Bars3Icon onClick={()=>setOpen(!open)} className= {`${menuIconStyle}`} ></Bars3Icon>
      : <XMarkIcon onClick={()=>setOpen(!open)} className= {`${menuIconStyle}`} ></XMarkIcon> 

   useEffect(()=>{
      document.body.style.overflow = open ?  "hidden" : "auto"
    },[open])

  return (
    <div className= {""} >

      {iconMobile}

      <div className= {`${styleContainerDesktop}  `} >

            <Link  className= {`${itemNavStyle} ${hiddenLi} `}   href={"/"} >
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


      <div className= {`${styleMenuMobile}`} >
              <Link  className= {` ${itemStyleMobile} `}   href={"/"} >
              Accueil              
              <HomeIcon  className= {` ${iconStyle}`} />
              </Link>

              <Link className= {`${itemStyleMobile} `} href={"/contact"} >
                Réservation
              <PhoneIcon  className= {` ${iconStyle}`} />                
            </Link>
      </div>

   </div>
  )
}

export default Navbar
