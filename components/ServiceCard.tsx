import Link from "next/link"
import {type Service} from "../data/services"


const ServiceCard = ({service} : {service : Service} ) => {
  return (
    <Link href={`/services/${service.slug}`} >
   
       {service.name} : {service.price}€ - {service.duration}min <br />
       {service.description} 
     
     </Link>
    
  )
}

export default ServiceCard
