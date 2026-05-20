import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Contact Us</h1>
        <form action={""} >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"  />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"  ></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </div>
  )
}

export default page

