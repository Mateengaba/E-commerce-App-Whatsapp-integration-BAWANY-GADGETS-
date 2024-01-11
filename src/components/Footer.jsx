import React from 'react';
import Footercss from './Footer.module.css'
import {FaYoutube , FaFacebook , FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>

    <footer>
<div className={Footercss.footercontainer}>
<div className={Footercss.icone}>

<a href=""><FaYoutube/></a>
<a href="https://www.facebook.com/Bawanybros/" target="_blank" ><FaFacebook/></a>
<a href=""><FaTwitter/></a>

</div>

<div className={Footercss.footerNav}>

<ul>

  <Link to="/" onClick={scrollToTop}><li>Home</li></Link>
  <Link to="/Cards" onClick={scrollToTop}><li>Products</li></Link>
  <Link to='/Contact' onClick={scrollToTop}><li>Contact</li></Link>


</ul>

</div>



</div>


<div className={Footercss.foterbottom}>
<p>Copyright &copy:2023; Designed by <span className={Footercss.designer}>Mateen Gaba</span> </p>
</div>


</footer>
    </>
  );
}

export default Footer;
