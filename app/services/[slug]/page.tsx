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

  return (



    <div>
      <h1>Service Details</h1>
      {service.name} 

      <br /> {service.description}
    </div>
  )
}

export default page
