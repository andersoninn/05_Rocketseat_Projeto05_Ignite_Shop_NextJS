import Product from '@/components/products/Product';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
   const [sliderRef] = useKeenSlider({
      slides: {
         perView: 3,
      },
   });
   return (
      <>
         <main className="ps-60">
            <section
               className="flex gap-12  overflow-x-auto overflow-y-hidden keen-slider"
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
