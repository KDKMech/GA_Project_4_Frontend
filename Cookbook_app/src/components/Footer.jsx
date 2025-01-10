import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;