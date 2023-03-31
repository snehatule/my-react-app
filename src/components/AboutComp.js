import React from 'react';

const AboutComp = () => {
    const serviceStyle = {
        background: '#F59E0D',
        padding: '5px',
        width:'100px',
      }

  return (
    <>
    <div className="text-center">
     <h2 className="text-center text-2xl font-bold">Why people love Us</h2>

     <div className="container mx-auto flex items-center justify-between">
           <div className="w-1/2 px-9">
              <img style={serviceStyle} src="/images/jewel.webp" alt="style" className="mx-auto rounded-full "  />
              <h2 className="py-5 text-lg font-semibold">Style</h2>
              <p>We always maintain modern styles and follow your feedback.</p>
           </div>
           
           <div className="w-1/2 px-9">
              <img style={serviceStyle} src="/images/service.webp" alt="service" className="mx-auto rounded-full "  />
              <h2 className="py-5 text-lg font-semibold">Service</h2>
              <p>Give 24*7 Service online and offline and provide home service also.</p>
           </div>
       </div>
       </div>
      
    </>
  )
}

export default AboutComp;
