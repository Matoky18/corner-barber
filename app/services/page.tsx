import ServiceCard from "@/components/ServiceCard";
import { services, type Service } from "@/data/services";

console.log(services)

    const flexCenter= ' flex justify-center items-center'


const page = () => {


  return (
    
    <div className= {`h-[calc(100vh-150px)] pt-[100px] ${flexCenter} gap-[50px]  `} >
        {services.map((service)=>{
          return <ServiceCard  key={service.id} service = {service} /> 
        })}
    </div>
  )
}

export default page
