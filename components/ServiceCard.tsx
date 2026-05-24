import Link from "next/link"
import {type Service} from "../data/services"


const ServiceCard = ({service} : {service : Service} ) => {
      const flexSpacing= ' flex justify-between items-center'

      const containerStyle = `hover:shadow-lg  shadow-sm
       transition-all duration-300 ease-in-out
        p-[25px] rounded-[5px] ${flexSpacing} w-[calc(100vw-50px)] max-w-[350px] 
        min-h-[200px] h-auto flex-col box-border gap-[12.5px] `

  return (
    <Link className= {` ${containerStyle}  `} href={`/services/${service.slug}`} >
   
        <h1 className= {`font-michroma text-primary-dark text-center border-b-3 pb-[15px] border-primary-dark `} >{service.name} : {service.duration}min</h1>
        
        <h2 className= {` text-center `} >{service.description} </h2>
          
        <div className= {`font-michroma`} >{service.price} £ </div>
     </Link>
    
  )
}

export default ServiceCard
