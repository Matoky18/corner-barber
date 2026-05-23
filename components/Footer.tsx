import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {

    const flexCenter= ' flex justify-center items-center  '
    const liStyle = `flex-wrap ${flexCenter} gap-[12.5px] `

  return (
    <div className= {` bg-gradient-dark ${flexCenter} flex-col text-white min-h-[150px] p-[25px] pb-[50px] gap-[25px]`} >
        <ul className= {` flex-wrap gap-[25px] ${flexCenter}`} >
            <li className= {`${liStyle}`}>
                  <MapPinIcon className= {` w-[15px]`} ></MapPinIcon>

                 <span className= {`text-[gray]`} >
                  Addresse :
                  </span>
                <span>123 Rue de la Barbe, Paris</span>
            </li>
            <li className= {`${liStyle}`}>
                <span className= {`gap-[12.5px]  ${flexCenter} text-[gray]`} >
                  <PhoneIcon className= {`w-[15px]`} ></PhoneIcon> 
                  Telephone :
                </span>
                <span> 06 00 00 00 00 </span>
            </li>
            <li className= {`${liStyle}`} >
                <span className='text-[gray]' >RESEAUX SOCIAUX :</span>
                <>
                  <span className='cursor-pointer' >
                  <FaFacebook/> 
                  </span>
                  <span className='cursor-pointer' >
                    <FaInstagram/>
                  </span>
                </>
            </li>
        </ul>
       <h2 className='font-michroma' > <span className='w-[100px] border-t flex pt-[12.5px] border-[gray] ' ></span> CORNER BARBER <span></span> </h2>
    </div>
  )
}

export default Footer
