import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import Form from "../Form/Form";
import loadBackgroudImages from "../Common/loadBackgroudImages";
// import VideoModal from "../VideoModal/VideoModal";

import contactImg from "../../assets/images/hero.avif"


const Contact1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    //   const [iframeSrc, setIframeSrc] = useState('about:blank');
	//   const [toggle, setToggle] = useState(false);
	
	//   const handelClick = () => {
	// 	setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
	// 	setToggle(!toggle);
	//   };
	//   const handelClose = () => {
	// 	setIframeSrc('about:blank');
	// 	setToggle(!toggle);
	//   };
      
    return (
        <div className="contact-area" data-background={contactImg} style={{marginBottom:'1rem',marginTop:'1rem'}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="CONTACT US"
                                    Title="Make an Online Appoinemnt Booking<br> For Business Planing."
                            ></SectionTitle>
                            </div>
                            <Form></Form>
                        </div>
                        {/* <div className="col-lg-6 col-md-5">
                            <div className="contact-box">
                                <div className="contact-video-icon">	
                                    <span onClick={handelClick} className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true">Play</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <VideoModal
                    isTrue={toggle}
                    iframeSrc={iframeSrc}
                    handelClose={handelClose}        
                ></VideoModal> */}
            </div>

    );
};

export default Contact1;