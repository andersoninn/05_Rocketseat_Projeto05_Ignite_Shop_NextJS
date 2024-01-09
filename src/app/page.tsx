import Product from '@/components/Product';

export default function Home() {
   return (
      <>
         <main className="container flex justify-center gap-12">
            <Product />
            <Product />
         </main>
      </>
   );
}
