'use client';
import Image from 'next/image';
import camiseta1 from '@/assets/camisetas/Shirt-1.png';
import { PiHandbagBold } from 'react-icons/pi';

// import 'keen-slider/keen-slider.min.css';

export default function Product() {
   return (
      <div
         className="keen-slider__slide bg-gradient-to-t from-indigo-500 from-60% via-sky-00 via-90% to-emerald-500 to-800% p-1
         h-min-[656px] h-max-[656px] w-[696px] flex flex-col justify-center items-center rounded-md cursor-pointer relative
         group/product"
      >
         <div className="w-[500px] h-[520px] mt-24 bg-transparent relative">
            <Image
               src={camiseta1}
               sizes="width:520px"
               fill
               alt=""
               style={{ objectFit: 'cover' }}
            />
         </div>

         <footer className="bg-brand-gray800(elements)/85 p-5 h-28 w-[495px] rounded-md mt-[740px] flex justify-between items-center absolute group-hover/product:-translate-y-[120px]  transition-transform duration-500 ease-in-out">
            <div className="flex flex-col">
               <strong className="text-xl">Camiseta Beyond the Limits</strong>
               <span className="text-brand-green300(light) text-2xl font-bold">
                  {' '}
                  R$ 79.90
               </span>
            </div>
            <div className="bg-brand-green500(principal) w-12 h-12 flex items-center justify-center rounded-md">
               <PiHandbagBold className="w-6 h-6" />
            </div>
         </footer>
      </div>
   );
}
