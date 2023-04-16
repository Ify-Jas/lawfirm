import Header from '../components/header';
import {Link} from 'react-router-dom';



function Home(){
    return(
        <div className='homepage'>
            <Header />
           <div className="home">
              <div className='introContainer'>
                <h1>EZEOKE & CO</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis. Habitasse platea dictumst vestibulum rhoncus. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Nibh praesent tristique magna sit amet purus gravida quis blandit. Vitae suscipit tellus mauris a.</p>
              </div>
               <button className='homeBtn'>
                  <Link className='homeContact' to={'/contact'}>Contact Us</Link>
               </button>
          </div>
        </div>
        
    )
}

export default Home;