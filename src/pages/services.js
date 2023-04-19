import Header from '../components/header';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPeopleRoof, faBuilding, faHandcuffs, faGavel} from '@fortawesome/free-solid-svg-icons';


function Services() {
    return(
        <div className='services'>
            <Header />
                <h1 className='serviceHead'>Main Service Area</h1>
              <main className='servicesContainer'>
               
                <div className='serviceCard'>
                   <FontAwesomeIcon className='icon' icon={faPeopleRoof} size='3x' />
                   <h2>Family Law</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis.</p>
                   <button className='homeBtn'>
                      <Link className='homeContact' to={'/contact'}>Contact Us</Link>
                   </button>
                    
                </div>
                <div className='serviceCard cardRight'>
                   <FontAwesomeIcon className='icon' icon={faBuilding} size='3x' />
                   <h2>Property Law</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis.</p>
                   <button className='homeBtn'>
                      <Link className='homeContact' to={'/contact'}>Contact Us</Link>
                   </button>
                    
                </div>
                <div className='serviceCard'>
                   <FontAwesomeIcon className='icon' icon={faHandcuffs} size='3x' />
                   <h2>Criminal Law</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis.</p>
                   <button className='homeBtn'>
                      <Link className='homeContact' to={'/contact'}>Contact Us</Link>
                   </button>
                    
                </div>
                <div className='serviceCard cardRight'>
                   <FontAwesomeIcon className='icon' icon={faGavel} size='3x' />
                   <h2>Litigation</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis.</p>
                   <button className='homeBtn'>
                      <Link className='homeContact' to={'/contact'}>Contact Us</Link>
                   </button>
                    
                </div>
                <div className='serviceCard'>
                   <FontAwesomeIcon className='icon' icon={faPeopleRoof} size='3x' />
                   <h2>Family Law</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis.</p>
                   <button className='homeBtn'>
                      <Link className='homeContact' to={'/contact'}>Contact Us</Link>
                   </button>
                    
                </div>
                <div className='serviceCard'>
                   <FontAwesomeIcon className='icon' icon={faPeopleRoof} size='3x' />
                   <h2>Family Law</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis.</p>
                   <button className='homeBtn'>
                      <Link className='homeContact' to={'/contact'}>Contact Us</Link>
                   </button>
                    
                </div>


              </main>

            <Footer />
        </div>

    )
}

export default Services;
