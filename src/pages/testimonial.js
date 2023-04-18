import Header from "../components/header";
import Footer from "../components/footer";
import testimony from '../testimonial.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


function Testimonial(){
    const testimonies = testimony.testimony;
    return(
        <div className="testimonial">
            <Header />

            <main className="testimonyContainer">
              {testimonies.map((testimonies,index)=>(
                  <div key={index} className="testimonyCard">
                   <FontAwesomeIcon className="quote" icon={faQuoteLeft} />

                    <p>
                        {testimonies.comment}
                   </p>
                    <FontAwesomeIcon className="quote" icon={faQuoteRight} />
                    
                    <h3>{testimonies.User}</h3>
                  </div>
                
                
               ))}
            
            </main>
         
            <Footer />
        </div>
    )
}
export default Testimonial;