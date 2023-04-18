import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'; 
import NavBar from './navbar';

function Header(){
    const [show, setShow] = useState(false);

    const handleClick = (event)=>{
        event.preventDefault();
        if(!show){
          setShow(true);      
        } else {
            setShow(false);
        }
    }
    return(
        <div className='navBar'>
           <FontAwesomeIcon onClick={handleClick} className='menuBtn' icon={faBars} size='3x'/>
           {show && <NavBar />}
           

        </div>
       

    )
}

export default Header;