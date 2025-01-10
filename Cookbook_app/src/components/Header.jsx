import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  return (
    <header >
      <img 
        src="./images/header.png" 
        alt="Company Logo" 
        className="rounded mx-auto d-block"
      />
    </header>
  );
}

// const styles = {
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '10px 20px',
//   },
//   logo: {
//     height: '50px',
//     marginRight: '15px',
//   },
//   companyName: {
//     margin: 0,
//     fontSize: '24px',
//   },
// };

export default Header;