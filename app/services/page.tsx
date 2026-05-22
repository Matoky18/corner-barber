import ServiceCard from "@/components/ServiceCard";
import { services} from "@/data/services";

console.log(services)



const page = () => {

  const flexCenter= ' flex justify-center items-center  '

  return (
    
    <div className= {`h-[calc(100vh-150px)] pt-[100px] flex-col ${flexCenter} gap-[50px]  `} >

      <h2 className="text-[black] text-[30px] " >NOS PRESTATIONS</h2>

      <ul className= {`${flexCenter}`}  >
          {services.map((service)=>{
          return <li  key={service.id}><ServiceCard  service = {service} /></li> 
        })}
      </ul>
        
    </div>
  )
}

export default page
