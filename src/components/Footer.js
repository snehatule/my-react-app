import React from 'react';

const Footer = () => {
  return (
    <>
       
         <div className="hero py-3 pb-5 text-white bg-slate-600" >
            
            <div className="container mx-auto flex items-center justify-between">
             
           <div className="w-1/3 px-9 pt-5 text-left ">
              <p className='pb-5'><strong>Quick Links</strong></p>
               <ul>
                <li className='pb-5'>About Us</li>
                <li className='pb-5'>Refer a Friend</li>
                <li className='pb-5'>FAQ's</li>
               </ul>
            </div>
           
           <div className="w-1/3 px-9 pt-5 text-left ">
             <p className='pb-5'><strong>Customers Delight</strong></p>
             <ul>
                <li className='pb-5'>+1-123-456-7890</li>
                <li className='pb-5'>Contact US</li>
                <li className='pb-5'>(9 am-10 pm, 7 days a week)</li>
             </ul>
           </div>

           <div className="w-1/3 px-9 pt-5 text-left ">
            <p className='pb-5'><strong>Policies</strong></p>
            <ul>
                <li className='pb-5'>30-Day Returns</li>
                <li className='pb-5'>Privacy Policy</li>
                <li className='pb-5'>Terms & Conditions</li>
            </ul>
          
           </div>
       </div>
     </div>
      
    </>
  )
}

export default Footer;
