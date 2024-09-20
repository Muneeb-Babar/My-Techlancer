import React from 'react'
import CardPage from "../Components/CardsPage/CardsPage";

import character1 from '../assets/images/character-modeling.avif'
import character2 from '../assets/images/projects/2D/art5.jpg'
import character3 from '../assets/images/character-modeling2.avif'

import icon1 from '../assets/images/stacks/art/icon1.png'
import icon2 from '../assets/images/stacks/art/icon2.png'
import icon3 from '../assets/images/stacks/art/icon3.png'
import icon4 from '../assets/images/stacks/art/icon4.png'

const Art = () => {
  const techStacks = [
    { name: "SEO", src: icon1 },
    { name: "Analysis", src: icon2 },
    { name: "Emal", src: icon3 },
    { name: "Affiliate", src: icon4 }
  ];

  const Comp1 = {
    img1: character1,
    heading1: "Character Modeling",
    para1: `Character modeling is the art and science of creating the visual representation of characters for various media, including animation, video games, and illustrations. This multifaceted process involves conceptualizing and designing characters, whether in 2D or 3D formats, to convey their personality, traits, and stories effectively. In 2D character modeling, artists focus on flat designs that utilize color, line, and shape to bring characters to life on a two-dimensional plane. Conversely, 3D character modeling involves creating detailed, lifelike representations that can move and interact within a three-dimensional space. Both techniques require a blend of artistic creativity and technical skill, enabling creators to engage audiences and enhance storytelling through captivating character designs.`,
  };

  const Comp2 = {
    img2: character2,
    heading2: "2D Characters",
    para2: `2D character modeling is a creative process that involves designing and illustrating characters in a flat, two-dimensional space. This technique is widely used in animation, video games, and illustrations, where artists bring characters to life through vibrant colors, distinct shapes, and expressive features. By focusing on line art and flat designs, 2D character modeling allows for a unique visual style that captures the essence of characters in a way that resonates with audiences. Whether for cartoons, mobile games, or digital illustrations, 2D character modeling emphasizes artistic flair and storytelling through dynamic poses and engaging visuals.`,
  };

  const Comp3 = {
    img3: character3,
    heading3: "3D Characters",
    para3: `3D character modeling is an essential component of modern animation and game design, where artists create lifelike, three-dimensional representations of characters. This process involves sculpting, texturing, and rigging models to ensure they can move and express emotions realistically within a virtual environment. Using advanced software, creators can add depth and detail to characters, from their physical features to intricate clothing designs. 3D character modeling not only enhances visual storytelling but also allows for immersive experiences in films, games, and virtual reality, where audiences can interact with characters in a believable and engaging way.`,
  };
  return (
    <CardPage
      tectStacks={techStacks}
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"2D/3D Character Modeling"}
    />
  );
};

export default Art
