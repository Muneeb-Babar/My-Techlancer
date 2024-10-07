import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import eBookCreation from "../assets/images/ebook.jpg";
import eBookFormatting from "../assets/images/ebook2.jpg";
import eBookMarketing from "../assets/images/ebookmarketing.jpg";

const Ebook = () => {

  const Comp1 = {
    img1: eBookCreation,
    heading1: "eBook Creation",
    para1: `eBook creation involves the process of writing, designing, and formatting a digital book for distribution. This process begins with outlining the content and determining the target audience. Once the writing is complete, authors focus on creating an engaging layout that enhances readability and user experience. Effective use of typography, images, and interactive elements can significantly elevate an eBook's appeal. With the growth of digital reading, eBooks have become an accessible medium for sharing knowledge and storytelling, enabling authors and businesses to reach wider audiences effortlessly.`
  };
  
  const Comp2 = {
    img2: eBookFormatting,
    heading2: "eBook Formatting",
    para2: `Formatting is a crucial step in eBook development, ensuring that the content is presented clearly across various devices and platforms. This includes setting the right file type, such as ePub or MOBI, and adjusting layouts for different screen sizes. Proper formatting involves creating a navigable table of contents, optimizing images, and embedding hyperlinks to enhance interactivity. Tools like Adobe InDesign, Scrivener, and Calibre are commonly used for formatting eBooks. A well-formatted eBook not only improves reader experience but also increases the likelihood of positive reviews and recommendations.`
  };
  
  const Comp3 = {
    img3: eBookMarketing,
    heading3: "eBook Marketing",
    para3: `Once an eBook is created and formatted, effective marketing strategies are essential for reaching the target audience. This may include leveraging social media platforms, email marketing, and collaborations with influencers or bloggers to promote the eBook. Additionally, creating a compelling landing page with strong calls-to-action can drive conversions. Utilizing paid advertising and search engine optimization (SEO) strategies helps increase visibility and attract potential readers. A comprehensive marketing approach ensures that the eBook gains traction in the crowded digital marketplace, ultimately leading to higher sales and readership.`
  };
  
  return (
    <CardPage
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Electronic Book"}
    />
  );
};

export default Ebook;
