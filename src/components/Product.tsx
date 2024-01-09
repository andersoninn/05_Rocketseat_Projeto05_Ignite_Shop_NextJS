import Image from 'next/image';
import camiseta1 from '@/assets/camisetas/Shirt-1.svg';

export default function Product() {
   return (
      <div className="h-[656px]">
         <div
            className="bg-gradient-to-t from-violet-600 to-brand-green500 w-[520px]  
      flex flex-col justify-center items-center
      cursor-pointer"
         >
            <Image
               src={camiseta1}
               width={520}
               alt=""
               className="object-cover"
            />
         </div>
         <footer className="bg-brand-gray800 p-10">
            <strong>Camiseta</strong>
            <span> R$ 79.90</span>
         </footer>
      </div>
   );
}
