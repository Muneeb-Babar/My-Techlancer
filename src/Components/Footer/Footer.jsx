import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Correct import for SweetAlert2
import { sendEmail } from "../../Config/Api";

import logo from "../../assets/images/CardImages/whiteLogo.png";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await sendEmail(formData);
      console.log(response);
      
      if (response.status === 200) { // Check status if using Axios
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "Thank you for subscribing! You'll receive updates via email.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Subscription Failed",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "There was a problem with your subscription. Please check your connection.",
      });
    }
  };

  const Services = [
    { title: "Web Development", linkBtn: "/webdevelopment" },
    { title: "App Development", linkBtn: "/appdevelopment" },
    { title: "Google Ads", linkBtn: "/googleAds" }, // Fixed typo
    { title: "Branding", linkBtn: "/branding" },
    { title: "Video Editing", linkBtn: "/videoEditing" },
    { title: "Social Media Marketing", linkBtn: "/socialMarketing" },
    { title: "SEO Optimization", linkBtn: "/seoOptimization" },
  ];
  
  const UsefulLinks = [
    { title: "About Company", link: "/about" },
    { title: "Meet Our Team", link: "/team" },
    { title: "Contact Us", link: "/contact" },
    { title: "Testimonials", link: "/testimonial" },
  ];

  const LogoContent = {
    img1: { logo },
    Content: "At My Techlancer, we deliver seamless plug-and-play IT solutions with a focus on data integration and business-driven strategies, providing efficient, customized services that drive growth and success across industries.",
  };

  const NewsletterContent = {
    Content: "Stay updated with the latest in IT solutions and business strategies by subscribing to our newsletter. Get insights, tips, and news on how to drive growth and success with innovative technology, delivered straight to your inbox.",
  };

  const AdressContent = {
    Title: "Elevating Customer Experience.",
    Number: "+44 7983 309038",
  };

  return (
    <div className="footer_main_area">
      <div className="address-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="address-box">
                <div className="address-icon">
                  <img src="/assets/images/address1.png" alt="address1" />
                </div>
                <div className="address-title">
                  <h3>{AdressContent.Title}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="address-box2">
                <div className="address-icon">
                  <img src="/assets/images/address2.png" alt="address2" />
                </div>
                <div className="solutek-btn">
                  <Link to="/contact">
                    {AdressContent.Number}
                    <div className="solutek-hover-btn hover-bx"></div>
                    <div className="solutek-hover-btn hover-bx2"></div>
                    <div className="solutek-hover-btn hover-bx3"></div>
                    <div className="solutek-hover-btn hover-bx4"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area">
        <div className="container">
          <div className="row footer">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src={logo} width={100} alt="footer-logo" />
                  </Link>
                </div>
                <p className="footer-widget-text" style={{ textAlign: "justify", paddingRight: "1rem", color: "white", marginTop: "-30px" }}>
                  {LogoContent.Content}
                </p>
                <div className="footer-social">
                  <div className="footer-widget-social">
                    <a href="https://www.facebook.com/share/rgUT8L9Gr9eQPM8y/?mibextid=LQQJ4d" target="new" rel="noopener noreferrer">
                      <i className="bi bi-facebook" style={{ color: "white", fontSize: "20px" }}></i>
                    </a>
                    <a href="https://www.linkedin.com/company/m-y-techlancers/" target="new" rel="noopener noreferrer">
                      <i className="bi bi-linkedin" style={{ color: "white", fontSize: "20px" }}></i>
                    </a>
                    <a href="https://www.instagram.com/m.y.techlancers?igsh=MW5udjVydHF4aWhmNA==" target="new" rel="noopener noreferrer">
                      <i className="bi bi-instagram" style={{ color: "white", fontSize: "20px" }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget left">
                <div className="widget-title">
                  <h2>Useful Links</h2>
                </div>
                <ul>
                  {UsefulLinks.map((item, i) => (
                    <li key={i}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget left">
                <div className="widget-title">
                  <h2>Services</h2>
                </div>
                <ul>
                  {Services.map((item, i) => (
                    <li key={i}>
                      <Link to={item.linkBtn}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget-newsletter">
                <div className="widget-title">
                  <h2>Newsletter</h2>
                </div>
                <p className="newsletter-text" style={{ textAlign: "justify", color: "white" }}>
                  {NewsletterContent.Content}
                </p>
                <div className="Subscribe-form2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your E-mail"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Invalid email format",
                          },
                        })}
                      />
                      <button className="subscribe-button" type="submit">
                        <i className="bi bi-send"></i>
                      </button>
                    </div>
                    {errors.EMAIL && <p style={{ color: "red" }}>{errors.EMAIL.message}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row copyright">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p>© {new Date().getFullYear()} My Techlancer. All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p className="terms">
                {/* <Link to="/terms-and-conditions">Terms & Conditions</Link> | <Link to="/privacy-policy">Privacy Policy</Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
