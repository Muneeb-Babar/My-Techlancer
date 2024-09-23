import About4 from "../Components/About/About4";
// import Blog1 from "../Components/Blog/Blog1";
// import Brand from "../Components/Brand/Brand";
import BreadCumb from "../Components/Common/BreadCumb";
import Project1 from "../Components/Project/Project1";

import aboutImg from '../assets/images/about-section.avif'

const About = () => {
    return (
        <div className="about-page">
            <BreadCumb Title="About Us"></BreadCumb>
            <About4
                MainImg={aboutImg}
                SubTitle="My Techlancer Company"
                Title="Essential IT Solutions For Modern <span>Businesses.</span>"
                Content="we provide essential IT solutions designed to meet the evolving needs of modern businesses. Our focus is on delivering innovative, scalable, and efficient technology services that empower organizations to stay competitive in today’s fast-paced digital landscape. From custom software development to IT consulting and support, we ensure businesses have the tools and expertise needed to streamline operations, enhance productivity, and drive growth. Our commitment to excellence and customer satisfaction sets us apart, making us the ideal partner for your IT needs."
                listTitle1="Best IT Solutions & Service"
                listTitle2="24 Hour's Customer Service"  
                BoxTitle1="500+"
                BoxTitle2="Satisfied Clients"                  
            ></About4>
            <Project1 
                bgImage="/assets/images/inner/project-bg-3.png"
                ClassAdd="project-area style-two"
            ></Project1>
            {/* <Brand></Brand> */}
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default About;