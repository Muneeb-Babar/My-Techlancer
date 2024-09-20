import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import logo from '../../assets/images/CardImages/whiteLogo.png'


const Footer = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const Services = [
        { title: 'Web Development', linkServives: 'webDevelopment' },
        { title: 'Digital Marketing', linkServives: 'digitalMarketing' },
        { title: 'Social Media Handling', linkServives: 'socialMarketing' },
        { title: 'Gaming Assets', linkServives: 'gamingAssets' },
        { title: 'Graphic Design', linkServives: 'graphicDesign' },
        { title: 'Search Engine Optimization', linkServives: 'seoOptimization' },
        { title: '2D/3D Character Modeling', linkServives: 'art' }
    ];
      const UsefulLinks = [
        {title:'About Company', link:'/about'},
        {title:'Meet Our Team', link:'/team'},
        {title:'Contact Us', link:'/contact'},
        {title:'Testimonials', link:'/testimonial'}
      ];  

      const LogoContent = {
        img1:{logo},
        Content:'At My Techlancer, we deliver seamless plug-and-play IT solutions with a focus on data integration and business-driven strategies, providing efficient, customized services that drive growth and success across industries.'
      }

      const NewsletterContent = {
            Content:'Stay updated with the latest in IT solutions and business strategies by subscribing to our newsletter. Get insights, tips, and news on how to drive growth and success with innovative technology, delivered straight to your inbox.'
      }

      const AdressContent = {
        Title:'Elevating Customer Experience.',
        Number:'+44 7983 309038'
      }

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
                                    <img src="/assets/images/address2.png" alt="address1" />
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
                                <Link to="/"><img src={logo} width={100} alt="footer-logo" /></Link>
                                </div>
                                <p className="footer-widget-text" style={{textAlign:'justify',paddingRight:'1rem',color:'white',marginTop:'-30px'}}>{LogoContent.Content}</p>
                                <div className="footer-social">
                                    <div className="footer-widget-social">
                                        <a href="https://www.facebook.com/share/rgUT8L9Gr9eQPM8y/?mibextid=LQQJ4d" target="new"><i className="bi bi-facebook" style={{color:'white',fontSize:'20px'}}></i></a>
                                        <a href="#"><i className="bi bi-twitter" style={{color:'white',fontSize:'20px'}}></i></a>
                                        <a href="https://www.linkedin.com/company/m-y-techlancers/" target="new"><i className="bi bi-linkedin" style={{color:'white',fontSize:'20px'}}></i></a>
                                        <a href="https://www.instagram.com/m.y.techlancers?igsh=MW5udjVydHF4aWhmNA==" target="new"><i className="bi bi-instagram" style={{color:'white',fontSize:'20px'}}></i></a>                                        
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
                                    <li key={i}><Link to={item.link}>{item.title}</Link></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget left">
                                <div className="widget-title">
                                    <h2>Services.</h2>
                                </div>
                                <ul>
                                {Services.map((item, i) => ( 
                                    <li key={i}><Link to={item.linkServives}>{item.title}</Link></li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget-newsletter">
                                <div className="widget-title">
                                    <h2>Newsletter</h2>
                                </div>
                                <p className="newsletter-text" style={{textAlign:'justify',color:'white'}}>{NewsletterContent.Content}</p>
                                <div className="Subscribe-form2">
                                    <form>
                                        <div className="form-field2">
                                            <input type="email" name="EMAIL" placeholder="Enter Your E-mail" required="" />
                                            <button className="subscribe-button" type="submit"><i className="bi bi-send"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="-copyright-text">
                                <p style={{color:'white',marginLeft:'12px'}}>© Copyright 2024 By My Techlancer</p>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="copyright-list">
                                <ul>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Supports</Link></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
	        </div>
        </div>
    );
};

export default Footer;