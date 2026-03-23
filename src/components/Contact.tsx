import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:modikartik1911@gmail.com" data-cursor="disable">
                modikartik1911@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:7974851086" data-cursor="disable">
                +91 7974851086
              </a>
            </p>
            <h4>Education</h4>
            <p>Currently in the High School <br/> in 9th grade</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Kartik-Developer-2012"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kartik-modi-9004aa2b2/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.freelancer.in/u/kartik19112012"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Freelancer <MdArrowOutward />
            </a>
          
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kartik Modi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
