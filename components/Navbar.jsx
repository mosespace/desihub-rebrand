"use client"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navmenu from './Navmenu'

export default function Navbar() {
  const [header, setHeader]=useState(false)

  const scrollHeader=()=>{
    if(window.screenY>=20){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',scrollHeader)
    return()=>{
      window.addEventListener('scroll',scrollHeader)
    }
  },[])

  
  return (
    <div className={ header ? "nav bg-red-500 top-0 flex px-2 text-xl md:px-14 justify-between fixed":"nav flex px-2 text-xl md:px-14 justify-between"}>
      <div className="logo">logo</div>
      <div className="md:flex hidden md:visible md:gap-7 text-xl">
        {/* <Link href={'#'}  >Company</Link>
        <Link href={'#'}  >Softwares</Link>
        <Link href={'#'}  >Services</Link> */}
        <Navmenu  />
        <Link href={'#'}  >Custom Solutions</Link>
        <Link href={'#'}  >Blog</Link>
      </div>
      <div className="md:hidden"><Menu/></div>
    </div>
  )
}
