import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark fixed-bottom">
      <p className="text-light m-auto text-center">© {new Date().getFullYear()} The Cookbook. All rights reserved.</p>
    </footer>
  );
}

// const styles = {
//   footer: {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '10px 20px',
//     textAlign: 'center',
//     position: 'fixed',
//     bottom: 0,
//     width: '100%',
//   },
//   text: {
//     margin: 0,
//     fontSize: '14px',
//   },
// };

export default Footer;