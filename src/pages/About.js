import React from 'react';
import AboutComp from '../components/AboutComp';
import HomeTrial from '../components/HomeTrial';

const About = () => {
  
    return(
      <>
      <div className="container mx-auto items-center py-7 bg-slate-600 ">
         <h2 className="text-center text-2xl font-bold text-white">About Us</h2>
         <div className="text-center text-lg py-3 text-white">
          <p>Handcrafted with love</p>
          </div>
       </div>
         <div className="hero py-3 pb-20" >
            
            <div className="container mx-auto flex items-center justify-between">
             

           <div className="w-1/3 px-9 text-center">
           <img src="/images/designer.jpg" alt="designer" className="mx-auto rounded-full" />
           <h2 className="py-5 text-lg font-semibold">THE DESIGNER</h2>
            </div>
           
           <div className="w-1/3 px-9 text-center">
            <img src="/images/brand.jpg" alt="brand" className="mx-auto rounded-full" />
            <h2 className="py-5 text-lg font-semibold">THE BRAND</h2>
           </div>

           <div className="w-1/3 px-9 text-center">
           <img src="/images/stone.png" alt="stone" className="mx-auto rounded-full" />
           <h2 className="py-5 text-lg font-semibold">THE STONES</h2>
           </div>
       </div>
     </div>
     <div className="pb-24 pt-24">
           <HomeTrial />
       </div>
 
      <AboutComp />
     
      </>
    )
  }
  
  
  export default About;
 
  