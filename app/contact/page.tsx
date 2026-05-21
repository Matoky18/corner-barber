"use client"
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

  return (
    <div>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={form.name} name="name" onChange={handleChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange}  />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange}  ></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </div>
  )
}


export default page

