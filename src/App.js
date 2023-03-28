
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';

const App = () => {
    return (
            <>
                <Router>
                   <Navigation />
                    <Routes>

                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </>

    )

}



// function App(){
//     return (
//             <div>
//                 <h1>My First React App...</h1>
//                 <p>Paragraph</p>
//             </div>

//     )

// }

export default App;


