import { stripe } from "@/assets/lib/stripe";
import MainProducts from "@/components/MainProducts";
import Stripe from "stripe";

export default async function Home() {
   const response = await stripe.products.list({
         expand: ['data.default_price'],
      });

      // const products = response.data.map((product) => {
         let products = [];
      for(const product of response.data){
         const price = product.default_price as Stripe.Price;
   
         products.push({
            id: product.id,
            name: product.name,
            imageURL: product.images[0],
            price: price.unit_amount && price.unit_amount / 100,
         }) ;
      };
      
      

   return (
      <>
         <main className="ps-60">
           <MainProducts products={products} />
         </main>
      </>
   );
}

// export const getServerSideProps: GetServerSideProps = async () => {
   
//    const response = await stripe.products.list({
//       expand: ['data.default_price'],
//    });

//    const products = response.data.map((product) => {
//       const price = product.default_price as Stripe.Price;

//       return {
//          id: product.id,
//          name: product.name,
//          imageURL: product.images[0],
//          price: price.unit_amount && price.unit_amount / 100,
//       };
//    });
//    return {
//       props: {
//          products,
//       },
//    };
// };
