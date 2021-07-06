import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <img
        className='header__logo'
        width='75'
        src='https://boolean.co.uk/images/misc/logo.png'
        alt='Boolean'
      />
      <nav className='header__nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/teachers'>Teachers</Link>
          </li>
          <li>
            <Link to='/students'>Students</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
