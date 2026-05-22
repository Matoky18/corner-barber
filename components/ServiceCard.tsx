import Link from "next/link"
import {type Service} from "../data/services"


const ServiceCard = ({service} : {service : Service} ) => {
      const flexSpacing= ' flex justify-between items-center'

      const containerStyle = `hover:shadow-sm transition-all duration-300 ease-in-out p-[25px] rounded-[5px] ${flexSpacing} w-[350px] h-[200px]   flex-col `

  return (
    <Link className= {` ${containerStyle} `} href={`/services/${service.slug}`} >
   
        <h1 className= {`font-michroma border-b-2 pb-[15px] `} >{service.name} : {service.duration}min</h1>
        
        <h2 className= {` text-center `} >{service.description} </h2>
          
        <div className= {`font-michroma`} >{service.price} £ </div>
     
     </Link>
    
  )
}

export default ServiceCard
