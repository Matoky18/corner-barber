import { services } from '@/data/services'
import { ScissorsIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
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

  const buttonStyle = "flex items-center justify-center gap-[20px] cursor-pointer bg-gradient-dark text-white w-[100%] max-w-[250px] h-[50px] rounded-[5px]"
  const imageStyle = 'bg-[white] w-[calc(100vw-50px)] lg:w-[50vw] h-[calc(100vh-150px)] bg-cover bg-center'
  const containerStyle = `flex flex-col lg:flex-row lg:h-[calc(100vh-187px)] pt-[75px] lg:pt-[100px] justify-between items-center   `
  const leftStyle = `w-[calc(100vw-50px)] lg:min-w-[500px] lg:max-w-[750px] lg:w-[calc(50vw-100px)] flex flex-col gap-[25px] shadow-sm p-[25px] lg:m-[0px]  m-[25px] lg:p-[50px] rounded-[5px]`


  return (

    <div className="">

      <div className= {containerStyle} >
           <div className="lg:w-[50vw] h-[100%] flex justify-center items-center ">

            <div className={leftStyle} >

              <h1 className= {`font-michroma border-b-2 pb-[15px] `} >{service.name} : {service.duration}min</h1>
            
                <h2 className= {``} >{service.description} </h2>
                  
                <div className= {`font-michroma`} >{service.price} £ </div>

           
                <Link  className= {buttonStyle} href={`/contact?service=${service.slug}`} >
                  <ScissorsIcon className='w-[25px] ' ></ScissorsIcon>                  
                  Reserver maintenant
                </Link>
        
            </div>

          </div>

          <div style={{backgroundImage : `url(${service.image})` }}  className= {imageStyle} ></div>

      </div>
     
    </div>

  )
}

export default page
