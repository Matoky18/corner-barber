import Link from "next/link"
import {type Service} from "../data/services"


const ServiceCard = ({service} : {service : Service} ) => {
      const flexSpacing= ' flex justify-between items-center'


  return (
    <Link className= {`${flexSpacing} w-[350px] h-[150px]   flex-col `} href={`/services/${service.slug}`} >
   
        <h1 className= {`font-michroma`} >{service.name} : {service.duration}min</h1>
        
        <h2 className= {` text-center `} >{service.description} </h2>
          
        <div className= {`font-michroma`} >{service.price} £ </div>
     
     </Link>
    
  )
}

export default ServiceCard
