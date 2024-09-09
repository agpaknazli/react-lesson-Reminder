import React from 'react';
import icon from '../image/icon.jpg';

const Header = () => {
  return (
    <div className="header d-flex align-items-center">
        <img 
          className='me-3' 
          src={icon} 
          alt="icon" 
          style={{ width: '100px', height: '100px' }} 
        />
        <h1 className="mb-0">Clarusway</h1>
    </div>
  );
}

export default Header;