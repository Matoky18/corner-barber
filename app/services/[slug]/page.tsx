import { services } from '@/data/services'
import { ScissorsIcon } from '@heroicons/react/24/solid'
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

    <div className="flex  h-[calc(100vh-150px)] pt-[100px] justify-between items-center  ">

      <div className="w-[50vw] h-[100%] flex justify-center items-center ">

        <div className={` flex flex-col gap-[25px] ${ombre} p-[50px] rounded-[5px]  `} >
           <h1 className= {`font-michroma border-b-2 pb-[15px] `} >{service.name} : {service.duration}min</h1>
        
            <h2 className= {``} >{service.description} </h2>
              
            <div className= {`font-michroma`} >{service.price} £ </div>

            <button className='flex items-center justify-center gap-[20px] cursor-pointer bg-gradient-dark text-white w-[250px] h-[50px] rounded-[5px] ' >
              
              <ScissorsIcon className='w-[25px] ' ></ScissorsIcon>

              Reserver maintenant
            
            </button>

        </div>

      </div>

      <div className="bg-[yellow] w-[50vw] h-[100%] "></div>

    </div>

  )
}

export default page
