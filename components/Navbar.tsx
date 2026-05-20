"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul>
            <li><Link href={"/"} >Accueil</Link></li>
            <li><Link href={"/contact"} >Réservation</Link></li>
            <li><Link href={"/services"} >Service</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
