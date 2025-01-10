import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <img 
        src="" 
        alt="Company Logo" 
        style={styles.logo} 
      />
      <h1 style={styles.companyName}>My Company</h1>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
  },
  logo: {
    height: '50px',
    marginRight: '15px',
  },
  companyName: {
    margin: 0,
    fontSize: '24px',
  },
};

export default Header;