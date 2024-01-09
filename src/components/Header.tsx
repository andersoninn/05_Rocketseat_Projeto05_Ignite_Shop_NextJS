import Image from 'next/image';
import Logo from '@/assets/logo.svg';
export default function Header() {
   return (
      <>
         <div className="flex justify-between items-center mb-10">
            <Image src={Logo} width={150} alt="" />
            <span>login</span>
         </div>
      </>
   );
}
