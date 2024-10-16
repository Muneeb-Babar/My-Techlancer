import { useEffect, useRef, useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
// import data from "../../Data/faq.json";

import serviceDetail from "../../assets/images/service-details.png";
import contactImag from "../../assets/images/breadcumb-bg.png";

const ServiceDetail = () => {
  const Services = [
    { title: "Web Development", linkBtn: "/webdevelopment" },
    { title: "App Development", linkBtn: "/appdevelopment" },
    { title: "GOOGLE Ads", linkBtn: "/goggleAds" },
    { title: "Branding", linkBtn: "/branding" },
    { title: "2D/3D Character Design", linkBtn: "/art" },
    { title: "Video Editing", linkBtn: "/videoEditing" },
    { title: "Social Media Marketing", linkBtn: "/socialMarketing" },
    { title: "SEO Optimization", linkBtn: "/seoOptimization" },
    { title: "E-book Design", linkBtn: "/eBook" },
    { title: "2D Illustrations", linkBtn: "/illustrations" },
    { title: "Book Cover Design", linkBtn: "/bookCover" },
    { title: "2D/3D Architecture", linkBtn: "/2D3DArchitecture" },
  ];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <div className="services-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="services-details-thumb">
                  <img src={serviceDetail} alt="thumb" />
                </div>
                <div className="services-details-content">
                  <h4 className="services-details-title">
                    Best Solutions for Web Development
                  </h4>

                  <p className="services-details-desc">
                    we offer innovative and ethical web development solutions,
                    designed to drive compelling results. Our approach combines
                    cutting-edge technologies with forward-thinking methods to
                    empower businesses. We architect seamless, user-centric web
                    platforms that open new opportunities for growth and foster
                    strong partnerships.
                  </p>

                  <p className="services-details-desc">
                    Our team continually refines leadership in web development,
                    leveraging industry-leading practices to deliver exceptional
                    results. By integrating advanced solutions and frictionless
                    products, we ensure a streamlined experience for your
                    clients. Globally, we enhance the value of your web presence
                    with fully tested, scalable services that are designed to
                    meet modern demands.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="service-detalis-text-box">
                      <div className="service-details-content">
                        <h4>Why Choose Us</h4>
                        <p style={{ textAlign: "justify" }}>
                          {" "}
                          we provide innovative, scalable IT solutions tailored
                          to meet your business's unique needs. With a focus on
                          excellence and staying ahead of industry trends, we
                          ensure your business remains competitive in the
                          digital landscape. Our flexible, high-quality services
                          empower growth and efficiency, while our
                          customer-centric approach guarantees personalized
                          support for overcoming any IT challenges. Partner with
                          us for reliable, cutting-edge solutions that drive
                          your business forward.
                        </p>
                      </div>
                      <div className="service-details-list">
                        <ul>
                          <li>
                            <i
                              className="bi bi-arrow-right"
                              style={{ color: "#008eb2" }}
                            ></i>
                            Success Stories
                          </li>
                          <li>
                            <i
                              className="bi bi-arrow-right"
                              style={{ color: "#008eb2" }}
                            ></i>
                            Success service
                          </li>
                          <li>
                            <i
                              className="bi bi-arrow-right"
                              style={{ color: "#008eb2" }}
                            ></i>
                            Success store
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-det-icon">
                        {/* <img src="/assets/images/inner/det-icon.png" alt="icon" /> */}
                        <FaDiagramSuccessor size={30} color="#008eb2" />
                      </div>
                      <div className="service-det-content">
                        <h3>Empowering Your Success</h3>
                        <p style={{ textAlign: "justify" }}>
                          At My Techlancer, we believe in the power of
                          innovation and ethics to transform challenges into
                          opportunities. Our mission is to deliver ethical,
                          innovative solutions that drive impactful results,
                          ensuring that every strategy we implement is grounded
                          in sustainability and responsible practices. We
                          combine sustainable methods with forward-thinking
                          strategies to create solutions that not only address
                          immediate needs but also foster long-term growth. By
                          prioritizing process design and continuous
                          improvement, we empower our clients to navigate the
                          complexities of today's dynamic environment with
                          confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-12 col-md-12">
                  <div className="tab_container">
                    <div className="feq-content">
                      <h3 className="faq-title">Frequently Asked Questions</h3>
                      <p className="faq-description">
                        Alternative innovation to ethical network environmental
                        whiteboard pursue compelling results for premier methods
                        empowerment. Dramatically architect go forward
                        opportunities
                      </p>
                    </div>
                    <div id="tab" className="tab_content">
                      <ul className="accordion">
                        {data.map((item, index) => (
                          <li
                            key={index}
                            className={`cs_accordian ${
                              index === openItemIndex ? "active" : ""
                            }`}
                          >
                            <a onClick={() => handleItemClick(index)}>
                              <span>{item.title}</span>
                            </a>
                            <p ref={accordionContentRef}>{item.desc}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <div className="widget-sidber">
                  <div className="widget-sidber-content">
                    <h4>Main Services</h4>
                  </div>
                  <div className="widget-category">
                    <ul>
                      {Services.map((item, i) => (
                        <li key={i}>
                          <Link to={item.linkBtn}>
                            <FaFolderOpen
                              size={35}
                              color="#008eb2"
                              style={{ paddingRight: "10px" }}
                            />
                            {item.title}
                            <i className="bi bi-arrow-right"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <div className="widget-sidber">
                                        <div className="widget-sidber-content">
                                            <h4>Downloads</h4>
                                        </div>
                                        <div className="widget-sidber-download-button">
                                            <a href="#"><i className="bi bi-file-earmark-pdf"></i>Service Report<span><i className="bi bi-download"></i></span></a>
                                            <a className="active" href="#"><i className="bi bi-file-earmark-pdf"></i>Download Lists<span><i className="bi bi-download"></i></span></a>
                                        </div>
                                    </div> */}
                <div className="widget-sidber-contact-box">
                  <div className="widget-sidber-contact">
                    <img
                      src={contactImag}
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <p className="widget-sidber-contact-text">Call Us Anytime</p>
                  <h3
                    className="widget-sidber-contact-number"
                    style={{ fontSize: "1rem" }}
                  >
                    +44 7983 309038 <br />
                    +92-13-2996086
                  </h3>
                  <span className="widget-sidber-contact-gmail">
                    <a
                      href="mailto:info@mytechlancers.com"
                      style={{ color: "white" }}
                    >
                      <MdMarkEmailRead
                        color="#008eb2"
                        size={30}
                        style={{ paddingRight: "10px" }}
                      />
                      info@mytechlancers.com
                    </a>
                  </span>
                  <div className="widget-sidber-contact-btn">
                    <Link to="/contact">
                      Contact Us <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
