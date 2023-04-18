import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

function Contact (){
    const[contactData, setContactData] = useState({
        name: '',
        email: '',
        reason: '',
        phone: '',
        message: '',
        access_key: '69a99131-06c1-49cd-a6da-29cdb9a89140'
        });
    const[success, setSuccess] = useState(false);
    const handleChange = (event)=> {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value
        });

    }
    const handleClick = (event)=> {
        event.preventDefault();
       if(!contactData.name.length||!contactData.message.length|| !contactData.email.length){
        alert('Please enter your name or email or message 😊😉');
       } else {
        const data = JSON.stringify(contactData);
        fetch("https://api.web3forms.com/submit", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
           },
          body: data,
        })
         .then(res => res.json())
         .then((data)=>{
         console.log(data);
         setSuccess(true);
         setContactData({
            ...contactData,
            name: '',
            email: '',
            reason: '',
            phone: '',
            message: ''
         })
         setTimeout(()=>{
             setSuccess(false);
         },5000);
        });
    }} 


    return(
        <div className="contact">
            <Header />
            <div className="mainContainer">
                <main >
                    <form className="contactContainer">
                        <input
                        type="text"
                        placeholder="Enter Fullname"
                        onChange={handleChange}
                        name="name"
                        value={contactData.name}
                        ></input>

                        <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        name="email"
                        value={contactData.email}
                        ></input>

                        <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        onChange={handleChange}
                        name="phone"
                        value={contactData.phone}
                        ></input> 
                        
                        <select
                        type="Reason"
                        placeholder="Select Reason"
                        onChange={handleChange}
                        name="reason"
                        value={contactData.reason}
                        >
                            <option>Family Law</option>
                            <option>Property Law</option>
                            <option>Criminal Law</option>
                            <option>Litigation Law</option>
                            <option>Other</option>
                        </select>
                        <textarea
                        className="textarea"
                        placeholder="Write Message Here"
                        name="message"
                        value={contactData.message}
                        onChange={handleChange}>
                        </textarea>
                        <button
                        className="submitBtn"
                        onClick={handleClick}>
                        Submit</button>
                        {success && <p style={{
                            fontSize: '20px',
                            color: 'white'
                        }}>Message sent successfully</p>}
                    </form>
                </main>
                <section className="contacts">
                    <div>
                      <h2><FontAwesomeIcon className="ikon" icon={faPhone} />By Phone</h2>
                      <p>0803 400 5000 and 0802 300 4000</p>
                    </div>
                    <div>
                      <h2><FontAwesomeIcon className="ikon" icon={faEnvelope} />By Email</h2>
                      <p>ify.frontend@gmail.com</p>
                    </div><div>
                      <h2><FontAwesomeIcon className="ikon" icon={faPeopleArrows} />Social Media</h2>
                      <div>
                        <FontAwesomeIcon className="contactIcon" size="2x" icon={faInstagram} />
                        <FontAwesomeIcon className="contactIcon" size="2x" icon={faLinkedin} />
                        <FontAwesomeIcon className="contactIcon" size="2x" icon={faTwitter} />
                      </div>
                      
                    </div>                    
                </section>

            </div>
            <Footer />
        </div>

    )
}

export default Contact;