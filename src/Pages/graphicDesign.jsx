import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import Acrobat from "../assets/images/stacks/graphic/acrobat.png";
import Adobe from "../assets/images/stacks/graphic/adobe.png";
import After from "../assets/images/stacks/graphic/aftereffects.png";
import Audtion from "../assets/images/stacks/graphic/audition.png";
import Framer from "../assets/images/stacks/graphic/framer.png";
import Illustrator from "../assets/images/stacks/graphic/illustrator.png";
import Indesign from "../assets/images/stacks/graphic/indesign.png";
import Media from "../assets/images/stacks/graphic/media.png";
import Photoshop from "../assets/images/stacks/graphic/photoshop.png";
import Premier from "../assets/images/stacks/graphic/premier.png";
import Graphic from "../assets/images/CardImages/graphic.jpg";
import Branding from "../assets/images/CardImages/branding.jpg";
import Motion from "../assets/images/CardImages/motion.jpg";

const GraphicDesign = () => {
  const techStacks = [
    { name: "Acrobat", src: Acrobat },
    { name: "Adobe", src: Adobe },
    { name: "After", src: After },
    { name: "Audition", src: Audtion },
    { name: "Framer", src: Framer },
    { name: "Illustrator", src: Illustrator },
    { name: "Indesign", src: Indesign },
    { name: "Media", src: Media },
    { name: "Photoshop", src: Photoshop },
    { name: "Premier", src: Premier },
  ];

  const Comp1 = {
    img1: Graphic,
    heading1: "Graphic Design",
    para1: `Graphic design is the art and practice of creating visual content to communicate messages. 
            Designers use typography, imagery, color, and form to convey ideas effectively, whether in 
            print or digital media. Through the careful selection of fonts, images, layouts, and color schemes, 
            graphic designers craft visuals that capture attention, evoke emotions, and influence perceptions.
            This discipline spans multiple areas, including logo design, advertising, packaging, brochures, 
            websites, and digital interfaces. In the modern world, graphic design plays a crucial role in 
            branding, marketing, and digital user experiences, contributing to the success of businesses by 
            making information more engaging and accessible. Whether for a small business or a large corporation, 
            good graphic design ensures that communication is visually striking and aligned with the brand’s values.
            With the rise of digital platforms, the scope of graphic design has expanded, becoming a key element in 
            building digital presence, online marketing, and user-centered designs across various industries.` 
};

const Comp2 = {
    img2: Branding,
    heading2: "Branding & Identity Design",
    para2: `Branding and identity design is a specialized field within graphic design that focuses on creating
            cohesive and impactful visual elements that represent the essence of a brand. This process typically involves 
            the creation of logos, color schemes, typography, and visual guidelines that collectively define a brand’s 
            image. Branding is not just about visual appeal; it's about shaping how customers perceive a brand, 
            conveying its values, mission, and personality. A consistent and memorable brand identity ensures that a 
            business stands out in competitive markets and fosters customer loyalty over time. The creation of a 
            comprehensive branding strategy often involves deep research into the brand’s target audience, market 
            positioning, and competitive landscape.` 
};

const Comp3 = {
    img3: Motion,
    heading3: "Motion Graphics",
    para3: `Motion graphics design is the art of blending animation with graphic design to create dynamic, 
            moving visuals that help communicate messages in an engaging and interactive way. Motion graphics 
            combine visual elements like shapes, text, icons, and illustrations with animation techniques to add 
            motion, making static designs come alive. This design approach is widely used in video production, 
            digital marketing, film titles, explainer videos, and user interface animations to enhance the overall 
            user experience. Motion graphics help break down complex ideas, add visual interest, and guide viewers’ 
            attention toward key information. Designers use tools like Adobe After Effects, Cinema 4D, and other 
            animation software to create fluid transitions, eye-catching effects, and storytelling moments that 
            captivate audiences.` 
};


  return (
    <CardPage
      tectStacks={techStacks}
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Graphic Design"}
    />
  );
};

export default GraphicDesign;
