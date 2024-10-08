import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import IllustrationBasics from "../assets/images/2dillustration.jpg";
import IllustrationTools from "../assets/images/2dillustrationtool.jpg";
import IllustrationApplications from "../assets/images/2dapplication.jpg";

const Illustrations = () => {
  const Comp1 = {
    img1: IllustrationBasics,
    heading1: "2D Illustrations",
    para1: `2D illustrations are visual representations created on a flat surface, utilizing various techniques and styles to convey ideas, tell stories, or enhance communication. They play a crucial role in multiple fields, including advertising, education, gaming, and web design. Artists use tools like pencils, markers, and digital software to create illustrations that can range from simple line art to complex, colorful designs. With the rise of digital platforms, 2D illustrations have become increasingly popular for their versatility and ability to engage audiences visually.`
  };
  
  const Comp2 = {
    img2: IllustrationTools,
    heading2: "Tools for 2D Illustrations",
    para2: `Creating stunning 2D illustrations involves the use of various tools and software. Traditional methods include drawing by hand with pencils, inks, and paints, while digital illustrations often utilize software like Adobe Illustrator, Procreate, and CorelDRAW. These tools offer features such as layers, vector graphics, and a wide array of brushes that allow artists to achieve detailed and polished results. Mastering these tools is essential for illustrators to bring their creative visions to life and produce high-quality illustrations that stand out.`
  };
  
  const Comp3 = {
    img3: IllustrationApplications,
    heading3: "Applications 2D Illustrations",
    para3: `2D illustrations are widely used across various industries for diverse applications. In publishing, they enhance storytelling in books and magazines, while in marketing, they create compelling visuals for advertisements and branding. Illustrations also play a significant role in user interface (UI) design, helping to create visually appealing and user-friendly digital experiences. Additionally, in educational materials, they simplify complex concepts and engage learners effectively. The versatility of 2D illustrations makes them a powerful tool for communication and expression in today’s visual-centric world.`
  };
  

  return (
    <CardPage
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"2D Illustrations"}
    />
  );
};

export default Illustrations;
