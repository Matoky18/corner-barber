import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {

    const flexCenter= ' flex justify-center items-center  '


  return (
    <div className= {` bg-gradient-dark ${flexCenter} flex-col text-white h-[150px] gap-[25px]`} >
        <ul className= {`gap-[25px] ${flexCenter}`} >
            <li className= {`gap-[12.5px] ${flexCenter}`}>
                <MapPinIcon className= {` w-[15px]`} ></MapPinIcon> <span className= {`text-[gray]`} >Addresse :</span>
                <span>123 Rue de la Barbe, Paris</span>
            </li>
            <li className= {`gap-[12.5px] ${flexCenter}`}>
                <PhoneIcon className= {`w-[15px]`} ></PhoneIcon> <span className= {`text-[gray]`} >Telephone :</span>
                <span> 06 00 00 00 00 </span>
            </li>
            <li className= {`${flexCenter} gap-[12.5px] `} >
                <span className='text-[gray]' >RESEAUX SOCIAUX :</span>
                <span className='cursor-pointer' >
                  <FaFacebook/> 
                </span>
                <span className='cursor-pointer' >
                  <FaInstagram/>
                </span>
            </li>
        </ul>
       <h2 className='font-michroma' > <span className='w-[100px] border-t flex pt-[12.5px] border-[gray] ' ></span> CORNER BARBER <span></span> </h2>
    </div>
  )
}

export default Footer
