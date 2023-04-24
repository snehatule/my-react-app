import React from 'react';

const SingleProduct = () => {
  return (
    <>

 
 <div >
  
 <img src="" alt="" height="230px" />
   <div className='text-center'> 
       <h2 className="text-lg font-bold py-2">product.title</h2>
       {/* <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.vendor}</span> */}
   </div>
   <div className='flex justify-between items-center mt-4'>
         <span className='font-semibold'>₹ product.price</span>
         <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
       </div>
 </div>
    </>
  )
}

export default SingleProduct;



