import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import BookCoverBasics from "../assets/images/bookcover1.jpg";
import CoverDesignTools from "../assets/images/bookcover2.jpg";
import CoverDesignTrends from "../assets/images/bookcover3.jpg";

const BookCover = () => {
  const Comp1 = {
    img1: BookCoverBasics,
    heading1: "Book Cover Design",
    para1: `Book cover design is the art of creating the visual outer layer of a book that serves both aesthetic and functional purposes. A well-designed book cover not only attracts potential readers but also communicates the essence of the story or content within. It incorporates elements such as typography, imagery, color schemes, and layout to create a visually appealing and engaging cover. In today's digital age, a compelling book cover can make a significant difference in a book's marketability and success, standing out among the vast array of titles available online and in bookstores.`
  };
  
  const Comp2 = {
    img2: CoverDesignTools,
    heading2: "Tools for Book Cover Design",
    para2: `Designing an impactful book cover requires a variety of tools and software. Popular graphic design applications like Adobe Photoshop and Adobe InDesign are widely used for their powerful features, allowing designers to manipulate images, create layouts, and work with typography effectively. Other helpful tools include Canva for easy-to-use templates and Sketch for digital designs. Understanding these tools is crucial for designers to create visually striking covers that capture the attention of readers and reflect the book's theme and genre accurately.`
  };
  
  const Comp3 = {
    img3: CoverDesignTrends,
    heading3: "Trends in Book Cover Design",
    para3: `Book cover design trends evolve constantly, influenced by cultural shifts, design innovations, and reader preferences. Current trends include minimalistic designs with bold typography, hand-drawn illustrations, and vibrant colors that evoke emotions. Additionally, the rise of digital publishing has led to more creative freedom in cover designs, enabling artists to experiment with unconventional formats and visual storytelling. Keeping up with these trends is essential for designers to ensure that their covers resonate with contemporary audiences and remain competitive in the ever-changing book market.`
  };
  
  return (
    <CardPage
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Book Cover"}
    />
  );
};

export default BookCover;
