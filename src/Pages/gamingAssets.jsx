import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import Characters from "../assets/images/stacks/gaming-assets/characters.avif";
import Environments from "../assets/images/stacks/gaming-assets/environment.jpg";
import ItemsAndProps from "../assets/images/stacks/gaming-assets/objects.jpg";

const GamingAssets = () => {

  const Comp1 = {
    img1: Characters,
    heading1: "Character Design",
    para1: `Character design is one of the core elements in creating gaming assets. It involves crafting unique,
            visually appealing, and engaging characters that fit the narrative, style, and gameplay of the game. 
            Character designers focus on anatomy, costumes, and personalities to ensure that characters resonate 
            with players emotionally and function effectively in gameplay. This process typically involves sketching,
            3D modeling, texturing, and rigging to bring characters to life in digital environments. Characters often
            become the faces of games, making their design critical to the game's branding and player connection.`
};

const Comp2 = {
    img2: Environments,
    heading2: "Environment Assets",
    para2: `Environment assets are essential in building immersive and visually captivating game worlds. These assets
            include landscapes, buildings, props, and other in-game objects that shape the overall setting. Environment 
            designers and artists create realistic or stylized scenes that enhance the player's experience, making 
            the game world feel alive and interactive. Whether it's lush forests, dystopian cities, or underwater realms, 
            the environment serves as the backdrop for gameplay and story progression. Environment assets are often built
            using 3D modeling software, textured for realism or specific art styles, and then optimized to ensure smooth
            performance across different platforms.`
};

const Comp3 = {
    img3: ItemsAndProps,
    heading3: "Items & Props",
    para3: `Items and props are smaller, interactive objects in games that contribute to the mechanics, story, and
            overall gameplay experience. These can range from weapons, tools, and vehicles to consumables, treasure, and
            power-ups. Each item or prop is meticulously designed with both form and function in mind, ensuring that it
            fits seamlessly into the game world while also serving a practical purpose for the player. Designers often 
            incorporate intricate details to make these assets visually consistent with the game’s art style. High-quality 
            3D models, textures, and animations are used to give these objects life, making them interactive and engaging
            within the game.`
};



  return (
    <CardPage
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Gaming Assets"}
    />
  );
};

export default GamingAssets;
