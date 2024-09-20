import React from 'react'
import CardPage from '../Components/CardsPage/CardsPage';

import socialMediaImage1 from '../assets/images/social1.avif'
import socialMediaImage2 from '../assets/images/social2.avif'
import socialMediaImage3 from '../assets/images/social3.avif'

import facebook from '../assets/images/stacks/social/facebook.png'
import instagram from '../assets/images/stacks/social/instagram.png'
import whatsapp from '../assets/images/stacks/social/whatsapp.png'
import linkedin from '../assets/images/stacks/social/linkedin.png'
import youtube from '../assets/images/stacks/social/youtube.png'



const SocialMedia = () => {

  const techStacks = [
    { name: "facebook", src: facebook },
    { name: 'instagram', src: instagram },
    { name: "whatsapp", src: whatsapp },
    { name: "linkedin", src: linkedin },
    { name: "youtube", src: youtube },
  ];

  const Comp1 = {
    img1: socialMediaImage1,
    heading1: "Social Media Strategy",
    para1: `Social media strategy is essential for brands looking to engage with their audience in the digital space. It involves planning, creating, and managing content across various social platforms to build brand awareness and foster community interaction. Effective social media strategies leverage data analytics to understand audience preferences and optimize content delivery, ensuring that messages resonate with followers. By focusing on engagement and storytelling, brands can enhance their online presence and cultivate loyalty among customers.`,
  };
  
  const Comp2 = {
    img2: socialMediaImage2, 
    heading2: "Content Creation",
    para2: `Content creation for social media involves producing engaging and shareable material tailored to the specific interests of target audiences. This can include text posts, images, videos, and infographics that highlight brand messages and values. Successful content creation focuses on authenticity and creativity, encouraging user interaction and feedback. Whether through viral campaigns or informative posts, compelling content is key to driving engagement and building a strong online community.`,
  };
  
  const Comp3 = {
    img3: socialMediaImage3, 
    heading3: "Analytics and Insights",
    para3: `Analytics and insights are crucial for measuring the success of social media efforts. By analyzing user engagement, reach, and conversion rates, brands can gain valuable insights into audience behavior and preferences. This data-driven approach allows marketers to refine their strategies, identify trends, and optimize content for better performance. Understanding analytics helps brands make informed decisions, ensuring that their social media presence is effective and impactful.`,
  };
  
  return (
    <CardPage
      tectStacks={techStacks}
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Social Media Strategies"}
    />
  );
  
}

export default SocialMedia
