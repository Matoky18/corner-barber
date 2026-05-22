"use client"
import { services } from '@/data/services'
import React, { useState } from 'react'

const page = () => {

  const [form,setForm] = useState({
    name : "",
    email : "" ,
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


   const flexCenter= ' flex justify-center items-center  '

  return (
    <div className= {`pt-[100px] h-[calc(100vh-150px)] ${flexCenter} flex-col `} >
        <h1>Réservation</h1>
        <p>Réservez votre coupe en quelques clics et choisissez l’horaire qui vous convient</p>
        <form className= {`flex-col flex w-[50vw]  `} onSubmit={handleSubmit} >

            <input placeholder='Nom' type="text" id="name" value={form.name} name="name" onChange={handleChange} />

            <input placeholder='Email' type="email" id="email" name="email" value={form.email} onChange={handleChange}  />


            <label htmlFor="service">Service :</label>
            <select  name="service" id="service"  >

              <option  value="">Choisir un service</option>
              {services.map(service=>{
                return <option key={service.id} className= {``} value= {service.slug} > {service.name} : {service.description} </option>
              })}

            </select>

            <label htmlFor="message">Message:</label>
            <textarea placeholder="Votre message..." id="message" name="message" value={form.message} onChange={handleChange}  ></textarea>

            <button type="submit">Confirmer le rendez-vous</button>
        </form>
    </div>
  )
}


export default page

