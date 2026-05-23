"use client"
import { services } from '@/data/services'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {

  const [form,setForm] = useState({
    name : "",
    email : "" ,
    telephone : "" ,
    message : ""
  })


  const handleSubmit = async (e : React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch("/api/contact", {
       method : "POST",
       headers : {
        "Content-Type" : "application/json",
       } ,
       body : JSON.stringify(form)
    })
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setForm({...form , [e.target.name] : e.target.value})
  }



  const urlParams = useSearchParams()

  const service = urlParams.get('service')



   const flexCenter= ' flex justify-center items-center  '
   const inputStyle = `${flexCenter} p-3 border-1 border-[gray] rounded-[5px] mb-[12.5px] `

  return (
    <div className= {`pt-[100px] min-h-[calc(100vh-150px)]  ${flexCenter} flex-col  `} >
        <h1 className='text-[30px]  tracking-wider' >Réservation</h1>
        <p className='mb-[50px] w-[350px] text-center ' >Réservez votre coupe en quelques clics et choisissez l’horaire qui vous convient</p>
        <form className= {`flex-col  flex w-[350px]  `} onSubmit={handleSubmit} >

            <input className= {`${inputStyle} h-[50px] `} placeholder='Nom' type="text" id="name" value={form.name} name="name" onChange={handleChange} />

            <input className= {`${inputStyle} h-[50px] `} placeholder='Email' type="email" id="email" name="email" value={form.email} onChange={handleChange}  />

            <input className= {`${inputStyle} h-[50px] `} placeholder='Telephone' type="email" id="telephone" name="telephone" value={form.telephone} onChange={handleChange}  />


            <div className= {`flex`} >

                {/* <label htmlFor="service">Service</label> */}
                <select defaultValue={`${service}` || ""  } className= {`cursor-pointer ${inputStyle} w-[100%] mb-[10px] h-[50px]`}  name="service" id="service">

                  <option  value="">Choisir un service</option>
                  {services.map(service=>{
                    return <option key={service.id} className= {`cursor-pointer`} value= {service.slug} > {service.name}  </option>
                  })}

                </select>

            </div>
            

            {/* <label htmlFor="message">Message:</label> */}
            <textarea className= {`resize-none ${inputStyle} h-[150px] `} placeholder="Votre message..." id="message" name="message" value={form.message} onChange={handleChange}  ></textarea>

            <button className= {`cursor-pointer w-[350px] text-white bg-gradient-dark h-[50px] border-1 border-[gray] rounded-[5px] `} type="submit">Confirmer le rendez-vous</button>
        
        </form>
    </div>
  )
}


export default page

