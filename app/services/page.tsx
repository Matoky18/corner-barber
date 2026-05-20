import ServiceCard from "@/components/ServiceCard";
import { services, type Service } from "@/data/services";

console.log(services)

const page = () => {
  return (
    <div>
        {services.map((service)=>{
          return <ServiceCard  key={service.id} service = {service} /> 
        })}
    </div>
  )
}

export default page
