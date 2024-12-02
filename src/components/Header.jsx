import React from 'react';

const Header = () => {


  

  return (
    <header className='headerStyle' >
      {/* Logo */}
      <div className='logoStyle' >MyApp</div>

      {/* Navigation */}
      <nav className='navStyle' >
        <a href="/" className='nav' style={{ textDecoration: 'none', color: '#fff' }}>
          Home
        </a>
        <a href="/products" className='nav' style={{ textDecoration: 'none', color: '#fff' }}>
          Products
        </a>
      </nav>

      {/* Login Button */}
      <button className='buttonStyle' >Login</button>
    </header>
  );
};

export default Header;
