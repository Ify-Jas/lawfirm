import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

function Footer (){
    return (
        <footer>
            <p><FontAwesomeIcon icon={faLocationDot} />Office Address: 123 Unknown Crescent, GRA, Enugu.</p>
           <a href="https://ify-jas.github.io/my_react_portfolio/"> 
                © Designed by Ifeoma Ezeoke
           </a>
        </footer>
       
    )
}

export default Footer;