import { ChevronDownIcon , ArrowRightCircleIcon  } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
    const flexCenter= ' flex justify-center items-center'
    const linkStyle = ` border border-[gray] px-[25px] active:bg-[gray] w-[full] mx-[25px] max-w-[350px] hover:bg-black py-[12.5px] rounded-[12.5px] ${flexCenter} gap-[25px]`

  return (
   
        <div className=  {`h-screen bg-[url('/bg.png')] pt-[50vh] text-white bg-cover bg-center flex-col `}>
      
            <div className= {` flex pb-[100px] justify-between items-center h-[50vh] flex-col `} >
              
                <h1 className= {` font-michroma text-[25px] mx-[25px] text-center md:text-[50px] `} >Juste une coupe <span className="text-soft-green" >parfaite.</span></h1>

                <Link href={"/services"} className= {linkStyle}   >
                  <span className="font-inter  " >Découvrir nos services</span>
                  <ArrowRightCircleIcon  className="w-[30px] text-accent hover:border " />
                </Link>

            </div>
                 
      </div>

  );
}
