import { Link } from 'react-router-dom';

const Navigation = () => {
  const cartStyle = {
    background: '#F59E0D',
    display: 'flex',
    borderRadius:'15px',
    padding: '5px 12px',
  }
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-9' >
        
           <Link to="/">
            <img style={{width:80}} src="/images/logo.webp" alt="logo" />
           </Link>
        
        <ul className='flex items-center'>
          <li><Link to="/">Home</Link></li>
          <li className="ml-6"><Link to="/about">About</Link></li>
          <li className="ml-6"><Link to="/products">Products</Link></li>
          <li className="ml-6">
            <Link to="/cart">
              <div className='items-center' style={cartStyle}>
                <span>10</span>
                <img className="ml-2" src="/images/cart.png" alt="cart" style={{width:24}} />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      
    </>
  )
}

export default Navigation;
