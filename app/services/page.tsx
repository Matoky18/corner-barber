import ServiceCard from "@/components/ServiceCard";
import { services} from "@/data/services";

console.log(services)



const page = () => {

  const flexCenter= ' flex justify-center items-center  '

  return (
    <>

      <div className= {``}  ></div>

        <div className= {`min-h-[calc(100vh-150px)] pt-[100px] flex-col ${flexCenter} gap-[50px] p-[50px] `} >

          <h2 className="text-[black] text-center text-[25px]  tracking-wider " >NOS PRESTATIONS</h2>

          <ul className= {`flex-wrap ${flexCenter} gap-[25px] `}  >

              {services.map((service)=>{

              return <li className= {`50%`}  key={service.id}><ServiceCard  service = {service} /></li> 

            })}
            
          </ul>
            
        </div>

    </>
       
    
  )
}

export default page
