import Image from 'next/image';
import Logo from '@/assets/logo.svg';

import { PiHandbagBold } from 'react-icons/pi';
export default function Header() {
   return (
      <>
         <div className="mb-6 pt-10  px-60 h-27 flex justify-between items-center ">
            <Image src={Logo} width={150} alt="" />
            <div className="bg-brand-gray800(elements) w-12 h-12 flex items-center justify-center rounded-md cursor-pointer">
               <PiHandbagBold className="w-6 h-6" />
            </div>
         </div>
      </>
   );
}
