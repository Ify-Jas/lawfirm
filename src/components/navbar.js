import {Link} from 'react-router-dom';


function NavBar (){
    return(
        <nav>
              <Link className='link' to={'/'}>Home</Link>
              <Link className='link' to={'/about'}>About</Link>
              <Link className='link' to={'/services'}>Services</Link>
              <Link className='link' to={'/testimonial'}>Testimonial</Link>
              <Link className='link' to={'/contact'}>Contact Us</Link>
        </nav>
    )
}

export default NavBar;