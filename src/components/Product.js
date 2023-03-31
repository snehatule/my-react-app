import React from 'react'

const Product = () => {
  const allProducts = {
    "products": [
        {
            "id": 7761580097791,
            "title": "Choker with Triangle",
            "body_html": "<p>Black choker with silver triangle pendant.</p>",
            "vendor": "Sterling Ltd",
            "price": 3000,
            "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/choker-with-triangle_925x_a23f2d0f-c705-4ede-af5d-61cd16325bca.jpg?v=1660800528",
        },
        {
          "id": 7761580196095,
          "title": "Dreamcatcher Pendant Necklace",
          "body_html": "<p>Turquoise beaded dream catcher necklace. Silver feathers adorn this beautiful dream catcher, which move and twinkle as you walk.</p>",
          "vendor": "Sterling Ltd",
          "price": 1500,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/dreamcatcher-pendant-necklace_925x_c15ec4d7-8658-4f05-ae94-e004bcab510d.jpg?v=1660800533",
        },
          {
            "id": 7761580622079,
            "title": "Silver Threader Necklace",
            "body_html": "<p>Sterling silver chain thread through circle necklace.</p>",
            "vendor": "Sterling Ltd",
            "price": 1000,
            "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/threader-necklace-closeup_925x_e7e09070-f22e-4474-923c-fe9e0301592b.jpg?v=1660800553",
         },
        {
          "id": 7761580556543,
          "title": "Origami Crane Necklace",
          "body_html": "<p>Sterling silver origami crane necklace.</p>",
          "vendor": "Sterling Ltd",
          "price": 4700,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/silver-origami-necklace_925x_c2de3e5d-a2b7-41e4-9833-bc479d5d4fec.jpg?v=1660800548",
        },
        {
          "id": 7761580327167,
          "title": "Gold Bird Necklace",
          "body_html": "<p>14k Gold delicate necklace, with bird between two chains.</p>",
          "vendor": "Sterling Ltd",
          "price": 5000,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/gold-bird-necklace_925x_2185a50a-1da9-4e6c-97c1-fb4ab9db375c.jpg?v=1660800539",
         },
         {
          "id": 7761580294399,
          "title": "Gemstone Necklace",
          "body_html": "<p>Gemstone pendant, housed in sterling silver, with sterling silver chain.</p>\n<ul>\n<li>Sterling silver chain, 14 inches</li>\n<li>Turquoise or Quartz</li>\n<li>Boho Chic</li>\n<li>Made in USA</li>\n</ul>",
          "vendor": "Sterling Ltd",
          "price": 1800,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/gemstone-necklace_925x_c376535b-f95a-48b1-9f3d-780974e86626.jpg?v=1660800538",
        },
          {
          "id": 7761580589311,
          "title": "Pretty Gold Necklace",
          "body_html": "<p>14k gold and turquoise necklace. Stunning beaded turquoise on gold and pendant filled double chain design.</p>",
          "vendor": "Sterling Ltd",
          "price": 2800,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/pretty-gold-necklace_925x_3455cfad-9c92-4632-ae75-deede002c002.jpg?v=1660800551",
        },
        {
          "id": 7761580130559,
          "title": "Dainty Gold Necklace",
          "body_html": "<p>Dainty gold necklace with two pendants.</p>",
          "vendor": "Sterling Ltd",
          "price": 4000,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/dainty-gold-necklace_925x_ddd67b1d-bdda-4f69-a534-63e2486c594c.jpg?v=1660800531",
        },
        {
          "id": 7761579999487,
          "title": "Choker with Gold Pendant",
          "body_html": "Black cord choker with gold pendant. Beautifully died black leather shapes a choker necklace with findings of 14k yellow gold, displaying gold pendant in a gorgeous balance of dark and light, delicate and strong.<ul>\n<li>14k yellow gold</li>\n<li>Leather</li>\n<li>Length, 12\" with 2.5\" extender</li>\n<li>Width, 0.3\"</li>\n<li>Lobster clasp</li>\n<li>Made in USA</li>\n</ul>",
          "vendor": "Sterling Ltd",
          "price": 1900,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/choker-with-gold-pendant_925x_1d3d329e-592b-47f8-9bfb-d39755955fe0.jpg?v=1660800527",
         },
         {
          "id": 7761579966719,
          "title": "Choker with Bead",
          "body_html": "<p>Black choker necklace with 14k gold bead.</p>",
          "vendor": "Sterling Ltd",
          "price": 1000,
          "src": "https://cdn.shopify.com/s/files/1/0656/0586/1631/products/choker-with-bead_925x_7a6adfe0-a635-4901-911e-b99e17773b2a.jpg?v=1660800525",
       }
    
      ]
    };

    const list = allProducts.products;

  return (
    <>

     {list.map((product, index) => (  
      <div key={index}>
       
      <img src={product.src} alt="" height="230px" />
        <div className='text-center'> 
            <h2 className="text-lg font-bold py-2">{product.title}</h2>
            {/* <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.vendor}</span> */}
        </div>
        <div className='flex justify-between items-center mt-4'>
              <span className='font-semibold'>₹ {product.price}</span>
              <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
            </div>
      </div>
    ))}

    </>
  )
}

export default Product;



