import { services } from '@/data/services'
import React from 'react'



const page = async ({params} : {params : Promise<{slug : string}>} ) => {

  const {slug} = await params


  const service = services.find(serv => serv.slug === slug)

  if (!service ) {
    return (
      <div>
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
      </div>
    )
  }

  const ombre = "shadow-sm"

  return (

    <div className="flex  h-[calc(100vh-150px)] pt-[100px] justify-between items-center  pl-[5vw] ">

      <div className= {`${ombre} p-[50px] rounded-[5px] `} >

        <div className='   ' >
            <h1 className='font-michroma' >{service.name} </h1>
            

            <br /> {service.description}
        </div>

      </div>

      <div className="bg-[yellow] w-[50vw] h-[100%] "></div>

    </div>

  )
}

export default page
