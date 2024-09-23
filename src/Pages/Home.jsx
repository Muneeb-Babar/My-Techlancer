import About1 from "../Components/About/About1";
import Hero1 from "../Components/Banner/Hero1";
// import Blog1 from "../Components/Blog/Blog1";
import Brand from "../Components/Brand/Brand";
import Contact1 from "../Components/Contact/Contact1";
// import Faq from "../Components/Faq/Faq";
// import Features from "../Components/Features/Features";
// import Pricing from "../Components/Pricing/Pricing";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

import heroImage from '../assets/images/hero-thumb.png'
import heroBackground from '../assets/images/breadcumb-bg.png'
import aboutImg from '../assets/images/about.jpg'
import ScrollToTopButton from "../Components/ScrollBtn/ScrollUpBtn";

const Home = () => {
    return (
        <div className="home-page">
            <Hero1
                bgImg={heroBackground}
                SubTitle="MY Techlancer IT SERVICES"
                Title="The Beauty Behind<br>IT Services."
                Content="where international networks intersect, we specialize in delivering custom software solutions tailored to meet the unique needs of businesses across various sectors."
                BtnText="EXPLORE MORE"
                BtnLink="/about"
                Image={heroImage}
                // VideoText="WATCH VIDEO"
            ></Hero1>
            {/* <Features></Features> */}
            <About1
                MainImg={aboutImg}
                // ImgTitle="BEST IT SOLUTION"
                SubTitle="My Techlancer Company"
                Title="Essential IT Solutions For<br> Modern <span>Businesses.</span>"
                Content="we provide essential IT solutions designed to meet the evolving needs of modern businesses. Our focus is on delivering innovative, scalable, and efficient technology services that empower organizations to stay competitive in today’s fast-paced digital landscape. From custom software development to IT consulting and support, we ensure businesses have the tools and expertise needed to streamline operations, enhance productivity, and drive growth. Our commitment to excellence and customer satisfaction sets us apart, making us the ideal partner for your IT needs."
                // listTitle="Cloud Based Solution"
                // BottomText="Monotonectally repurpose maintainable infrastruct whereas solutek in fermentum quis tempo sapien maximus design."
                BtnUrl="/about"
                BtnText="EXPLORE MORE"
            ></About1>
            <Services1></Services1>
            <Project1 
                bgImage="/assets/images/project-bg.png"
                ClassAdd="project-area"
            ></Project1>
            <Brand></Brand>
            {/* <Pricing></Pricing> */}
            {/* <Faq></Faq> */}
            <Testimonial2></Testimonial2>
            <Contact1></Contact1>
            <ScrollToTopButton/>
            {/* <Blog1></Blog1> */}
        </div>
    );
};

export default Home;