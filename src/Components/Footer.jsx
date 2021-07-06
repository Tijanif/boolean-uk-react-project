import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <a href='https://github.com/Tijanif' target='_blank'>
          <i className='fab fa-github'></i>
        </a>
        <a href='https://twitter.com/TAFulano' target='_blank'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/in/tijanifulani/' target='_blank'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div className='footer-copyright'>
        This footer is made with <i class='fas fa-heart'></i> by Tijani Fulani
      </div>
    </div>
  );
};

export default Footer;
