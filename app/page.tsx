import { ChevronDownIcon , ArrowRightCircleIcon  } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
    const flexCenter= ' flex justify-center items-center'

  return (
   
        <div className=  {`h-screen bg-[url('/bg.png')] pt-[50vh] text-white bg-cover bg-center flex-col `}>
      
            <div className= {` flex pb-[100px] justify-between items-center h-[50vh] flex-col `} >
              
                <h1 className= {` font-michroma text-[25px] mx-[25px] text-center md:text-[50px] `} >Juste une coupe parfaite.</h1>

                <Link href={"/services"} className= {`${flexCenter} gap-[25px]`}   >
                  <span>Découvrir nos services</span>
                  <ArrowRightCircleIcon  className="w-[30px]  "  />
                </Link>

            </div>
                 
      </div>

  );
}
