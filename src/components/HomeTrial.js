import React from 'react';

const HomeTrial = () => {
  return (
    <>
     <div className="text-center">

     <div className="container mx-auto flex items-center justify-between">
           <div className="w-1/2 px-9">
             <img src="/images/boho.webp" alt="" width="400px" height="400px" />
           </div>
           
           <div className="w-1/2 px-9">
           <h2 className="text-center text-2xl font-bold pb-5">TRY AT HOME</h2>
           <p className='text-left pb-4'>
            Try at Home is a service that you can avail to try our designs in the comfort of your home/office.
            It is a free service, with absolutely no obligation to buy.
            All you have to do is pick your favourite designs, and schedule an appointment as per your convenience.
           </p>

           <p className='text-left pb-3'>1. Fill the contact form to book an appointment to try on your desired jewellery. Submit your preferred date and time in the contact form.</p>

           <p className='text-left pb-3'>2. Our Consultant will reach out to you to understand your requirements and curate a personalised collection of pieces for you.</p>

           <p className='text-left pb-3'>3. We will take you through your selection at your chosen time and location and help you make a decision. If you choose to purchase, you can place an order with our Consultant instantly.</p>
              
           </div>
       </div>
       </div>
      
    </>
  )
}

export default HomeTrial;
