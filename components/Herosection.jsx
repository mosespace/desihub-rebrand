"use client"
import React, { useState } from 'react'
import Coursel from './ui/coursel'
import Courselextended from './ui/coursel'


export default function Herosection() {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')

  console.log(firstName)

  return (
    <div className='hero px-2 md:px-5 h-1/2  '>
      {/* <Coursel/> */}
      <Courselextended/>
    </div>
  )
}
