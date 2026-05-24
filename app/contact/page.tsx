"use client"
import { services } from '@/data/services'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'

const page = () => {

  return (
    <Suspense fallback={"Chargement..."} >
    <ContactForm/>
    </Suspense>
  )

 
}




export default page


function ContactForm() {
    
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
   const inputStyle = `${flexCenter} h-[50px] p-3 border-1 border-[gray] rounded-[5px] mb-[12.5px] `
   const buttonStyle = "cursor-pointer w-[100%] hover:text-whitesmoke text-black transition-all ease-in-out bg-gray  h-[50px] border-1 border-[gray] rounded-[5px] "

  return (
    <div className= {`pt-[100px] h-[100vh] flex  items-between ]  ${flexCenter} flex-col  `} >


        <h1 className='text-[30px] text-[gray] border-b-2 mb-[25px] tracking-[5px]' >Réservation</h1>

        <p className='mb-[37.5px]  max-w-[350px] w-[calc(100vw-50px)]  text-center tracking-wider ' >
          Réservez votre coupe en quelques clics et choisissez l’horaire qui vous convient
        </p>


        <form className= {`flex-col flex max-w-[350px] w-[calc(100vw-50px)]  `} onSubmit={handleSubmit} >

            <input className= {`${inputStyle} `} placeholder='Nom' type="text" id="name" value={form.name} name="name" onChange={handleChange} />

            <input className= {`${inputStyle}  `} placeholder='Email' type="email" id="email" name="email" value={form.email} onChange={handleChange}  />

            <input className= {`${inputStyle} `} placeholder='Telephone' type="tel" id="telephone" name="telephone" value={form.telephone} onChange={handleChange}  />


            <div className= {`flex`} >

                <select defaultValue={`${service}` || ""  } className= {`cursor-pointer ${inputStyle} w-[100%] mb-[12.5px]`}  name="service" id="service">

                  <option  value="">Choisir un service</option>
                  {services.map(service=>{
                    return <option key={service.id} className= {`cursor-pointer`} value= {service.slug} > {service.name}  </option>
                  })}

                </select>

            </div>
            

            <textarea className= {`resize-none ${inputStyle} h-[150px] `} placeholder="Votre message..." id="message" name="message" value={form.message} onChange={handleChange}  ></textarea>

            <button className= {`${buttonStyle}`} type="submit">
              
              Confirmer le rendez-vous
              
            </button>
        
        </form>
    </div>
  )
}