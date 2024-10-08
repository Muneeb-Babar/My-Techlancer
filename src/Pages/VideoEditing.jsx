import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import VideoEditingBasics from "../assets/images/videoediting.jpg";
import AdvancedEditingTools from "../assets/images/editingtools.jpg";
import PostProduction from "../assets/images/postproduction.jpg";
import Adobe from "../assets/images/stacks/video-editing/adobeelements.webp";
import Blender from "../assets/images/stacks/video-editing/blender.png";
import Film from "../assets/images/stacks/video-editing/film.png";
import Filmora from "../assets/images/stacks/video-editing/filmora.png";
import Tiktok from "../assets/images/stacks/video-editing/tiktok.png";

const VideoEditing = () => {
  const techStacks = [
    { name: "Adobe Elements", src: Adobe },
    { name: "Blender", src: Blender },
    { name: "Film", src: Film },
    { name: "Filmora", src: Filmora },
    { name: "Tiktok", src: Tiktok },
  ];

  const Comp1 = {
    img1: VideoEditingBasics,
    heading1: "Video Editing",
    para1: `Video editing is the process of manipulating and rearranging video shots to create a cohesive, polished final product. This involves tasks like trimming clips, cutting unnecessary sections, and organizing footage in a way that tells a story or conveys a message. Editing also includes adjusting aspects like color, sound, and visual effects to enhance the overall quality of the video. With the rise of video content across digital platforms, video editing has become an essential skill for content creators, marketers, filmmakers, and businesses aiming to deliver professional, engaging visuals to their audience.`
  };
  
  const Comp2 = {
    img2: AdvancedEditingTools,
    heading2: "Advanced Tools",
    para2: `Professional video editing often involves the use of advanced software such as Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve. These tools offer features like multi-camera editing, motion tracking, color grading, and special effects integration. In addition to mastering software, editors employ techniques like jump cuts, match cuts, transitions, and visual effects to create seamless edits. Advanced tools also allow for intricate audio mixing and sound design, ensuring the final video is both visually and aurally cohesive. By leveraging these techniques, editors can craft visually stunning and emotionally impactful videos that captivate their audiences.`
  };
  
  const Comp3 = {
    img3: PostProduction,
    heading3: "Post-Production",
    para3: `The post-production phase in video editing involves refining the edited footage into a polished final product. This includes tasks like color correction, sound design, audio synchronization, and adding any visual effects or animations. Post-production is crucial for ensuring that the video looks and sounds professional, with all elements working harmoniously. Once the editing is finalized, the video is exported in various formats suitable for different platforms, such as YouTube, social media, or broadcast. Proper post-production ensures the video meets the required quality standards, resonates with the audience, and fulfills the project's goals.`
  };

  return (
    <CardPage
      tectStacks={techStacks}
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Video Editing"}
    />
  );
};

export default VideoEditing;
