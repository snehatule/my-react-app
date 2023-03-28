import React from 'react';
import Product from '../components/Product';

const Products = () => {
  return (
    <>
      <div className='container mx-auto pb-24 items-center '>
        <h1 className='text-lg font-bold my-8'>Products</h1>
        <div className='grid grid-cols-5 my-8 gap-24'>
          
          <div>
            <img src="/images/images.avif" alt="" />
            <div className='text-center'> 
            <h2 className="text-lg font-bold py-2">Revka Ring</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Sale</span>
            </div>
           
            <div className='flex justify-between items-center mt-4'>
              <span>Rs. 1500</span>
              <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
            </div>
          </div>

           <Product />
         
        </div>

        
      </div>

    </>
  )
}

export default Products;