'use client';
import Product from '@/components/products/Product';
import { useKeenSlider } from 'keen-slider/react';

// import 'keen-slider/keen-slider.min.css';

export default function Home() {
   const [sliderRef] = useKeenSlider({
      slides: {
         perView: 'auto',
         spacing: 48, 
      },
   });
   return (
      <>
         <main className="ps-60">
            <section
               className="flex overflow-x-hidden overflow-y-hidden keen-slider"
               ref={sliderRef}
            >
               <Product />
               <Product />
               <Product />
               <Product />
            </section>
         </main>
      </>
   );
}
