import parse from 'html-react-parser';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal/VideoModal';

import aboutLogo from '../../assets/images/about-logo.png'
import AOS from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const About4 = ({MainImg,SubTitle,Title,Content,listTitle1,listTitle2,BoxTitle1,BoxTitle2}) => {


	  const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);

	  useEffect(() => {
        AOS.init({
            duration: 1000,        
            once: false,         
            easing: 'ease-in-out', 
            offset: 120,          
            anchorPlacement: 'top-bottom' 
        });
        AOS.refresh(); 
    }, []);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

    return (
			<div className="about-us-area">
				<div className="container" >
					<div className="row">
						<div className="col-lg-6">
							<div className="section-title text-left"  data-aos="fade-left">
								<h5 className="section-sub-title">{SubTitle}</h5>
								<h1 className="section-main-title">{parse(Title)}</h1>
								<p className="section-title-descr" style={{textAlign:'justify'}}>{Content}
								</p>
							</div>
							<div className="about-us-content"  data-aos="fade-left">
								<div className="about-us-list">
									<ul>
										<li><span>{listTitle1}</span></li>
										<li><span>{listTitle2}</span></li>
									</ul>
								</div>
								<div className="solutek-btn">
									<Link to="/contact">EXPLORE MORE
										<div className="solutek-hover-btn hover-bx"></div>
										<div className="solutek-hover-btn hover-bx2"></div>
										<div className="solutek-hover-btn hover-bx3"></div>
										<div className="solutek-hover-btn hover-bx4"></div>
									</Link>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="single-counter-box">
										<div className="counter-icon">
											<img src={aboutLogo} width={70} alt="icon" />
										</div>
										<div className="counter-content">
											<h4 className="counter">{BoxTitle1}</h4>
											<span>+</span>
											<p>{BoxTitle2}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about-us-thumb">
								<div className="about-us-img">
									<img src={MainImg} alt="thumb" style={{borderRadius:'15px'}} />
								</div>
								{/* <div className="about-us-video-icon" onClick={handelClick}>	
									<span className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"><i className="bi bi-play"></i><span>WATCH VIDEO</span></span>
								</div>
								<div className="about-us-shape">
									<img src="/assets/images/inner/us-shape.png" alt="shape" />
								</div> */}
							</div>
						</div>
					</div>
					<div className="about2-us-shape">
						<img src="/assets/images/inner/about-us-sh.png" alt="shape" />
					</div>
					<div className="about-us-shape2">
						<img src="/assets/images/inner/about-us-she.png" alt="shape" />
					</div>
				</div>
				<VideoModal
					isTrue={toggle}
					iframeSrc={iframeSrc}
					handelClose={handelClose}        
					></VideoModal>
			</div>
    );
};

export default About4;