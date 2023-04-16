import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

function Header(){
    // const [show, setShow] = useState(false);
    // const vis = document.getElementsByClassName('visible');
    const invis = document.getElementsByClassName('invisible');

    const handleClick = ()=>{
       if(invis){
         nav.classList ='visible';
       } else {
        nav.classList = 'invisible';
       }
    }
    return(
        <div className='navBar'>
           <FontAwesomeIcon onClick={handleClick} className='menuBtn' icon={faBars} size='3x'/>
           <nav className='invisible'>
              <Link className='link' to={'/'}>Home</Link>
              <Link className='link' to={'/about'}>About</Link>
              <Link className='link' to={'/services'}>Services</Link>
              <Link className='link' to={'/testimonia'}>Testimonial</Link>
              <Link className='link' to={'/contact'}>Contact Us</Link>
            </nav>

        </div>
       

    )
}

export default Header;