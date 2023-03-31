// import Products from '../pages/Products';
import AboutComp from '../components/AboutComp';
import HomeTrial from '../components/HomeTrial';

const Home = () => {
  return(
    <>
     <div className="hero py-16 " >
       <div className="container mx-auto flex items-center justify-between">
           <div className="w-1/2 px-9">
            <h1 className="text-3xl md:text-6xl font-bold">JWELLERY</h1>
            <h3 className="text-lg">Enhance Your Glow by wearing It.</h3>
            <button className="px-6 py-2 rounded-full font-bold mt-4 bg-yellow-500 text-white hover:bg-yellow-600">Shop Now</button>
           </div>
           
           <div className="w-1/2 px-9">
            <img src="/images/bn.webp" alt="banner" />
           </div>
       </div>
     </div>
     
     <div className="container mx-auto items-center py-20 bg-slate-600 ">
         <h2 className="text-center text-2xl font-bold text-white">Why People Choose Us..?</h2>
         <div className="text-center text-lg py-3 text-white">
          <p>Because, We always think about enhancing your beauty and charm.</p>
          </div>
       </div>

       <div className="pb-24 pt-24">
           <HomeTrial />
       </div>

       <div className="pb-24 pt-24">
           <AboutComp />
       </div>
       </>

  )
}


export default Home;
