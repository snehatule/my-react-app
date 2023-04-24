import React from 'react';
import Product from '../components/Product';
import SingleProduct from '../components/SingleProduct';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('https://dummyjson.com/products/category/womens-jewellery')
    .then(res => res.json())
    .then(products => {
      setProducts(products);
    });
     
  }, []);

 
  return (
    <>
      <div className='container mx-auto pb-24 items-center '>
        <h1 className='text-lg font-bold my-8'>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24'>
           <Product />

           {/* {
            products.map((item) => console.log(item))
            //  products.map(SingleProduct => <SingleProduct key={SingleProduct.id} />)
           } */}
        </div>
      </div>
      <div className="pt-24">
        <Footer />
       </div>

    </>
  )
}

export default Products;


 