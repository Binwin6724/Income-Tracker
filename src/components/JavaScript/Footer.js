import React from 'react';
import '../CSS/Footer.css'

function Footer() {
  const today = new Date();

  return <div className='footer'>
      <footer className='footerlab'>
          <img className='img_sal' src='salary.png'></img><br />
          Income Tracker By Binwin Viju || Copyright &copy; {today.getFullYear()}</footer>
  </div>;
}

export default Footer;
