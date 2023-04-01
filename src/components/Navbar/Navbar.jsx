import './Navbar.css';

import { Link } from 'react-router-dom';

export default function NavBar(){
  return (
    <section className="menu-header">
      <div className="menu-box-list">
        <ul className="menu-bar-list">
          <Link className='list' to="/" exact="true">Home</Link>
          <Link className='list' to="skills">Skills</Link>
          <Link className='list' to="about">About</Link>
          <Link className='list' to="contact">Contact</Link>
        </ul>     
      </div>
    </section>
  );
};