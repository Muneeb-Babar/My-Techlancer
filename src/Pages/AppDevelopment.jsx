import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import AppDesignImage from "../assets/images/stacks/app/app.jpg";
import AppDevelopmentProcess from "../assets/images/stacks/app/andoid.jpg";
import AppStoreLaunch from "../assets/images/stacks/app/ios.jpg";

import Java from "../assets/images/stacks/app/java.png";
import Kotlin from "../assets/images/stacks/app/kotlin.png";
import ReactNative from "../assets/images/stacks/app/reactnative.png";
import Flutter from "../assets/images/stacks/app/flutter.png";

const AppDevelopment = () => {
  const techStacks = [
    { name: "Java", src: Java },
    { name: "Kotlin", src: Kotlin },
    { name: "React Native", src: ReactNative },
    { name: "Flutter", src: Flutter },
  ];

  const Comp1 = {
    img1: AppDesignImage, 
    heading1: "App Design",
    para1: `App development starts with designing an intuitive user interface (UI) and ensuring a smooth user experience (UX). A well-designed app should be visually appealing, easy to navigate, and responsive across different devices. User experience plays a critical role in determining an app's success, as it directly impacts user engagement and retention. App designers focus on creating seamless interactions, ensuring that users can accomplish tasks effortlessly, enhancing overall satisfaction and usability.`
  };
  
  const Comp2 = {
    img2: AppDevelopmentProcess, 
    heading2: "App Development Process",
    para2: `App development is a multi-step process that involves planning, designing, coding, testing, and launching an application. Developers often work in collaboration with designers and project managers to ensure that the app meets the desired functionality and performance requirements. The process typically begins with defining the app's features and target audience, followed by creating wireframes and prototypes. After that, the coding phase begins, followed by extensive testing to identify and fix any bugs or usability issues before launch.`
  };
  
  const Comp3 = {
    img3: AppStoreLaunch, 
    heading3: "App Launching",
    para3: `Once the app is developed and thoroughly tested, the next step is launching it on app stores like Google Play and the Apple App Store. The launch involves preparing the app listing, optimizing keywords for better visibility, and promoting the app to reach the intended audience. However, app development doesn't end at the launch; ongoing maintenance is crucial. This includes releasing updates to add new features, fix bugs, and ensure compatibility with new operating systems and devices, ensuring the app remains relevant and functional for users over time.`
  };
  
  return (
    <CardPage
      tectStacks={techStacks}
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"App Development"}
    />
  );
};

export default AppDevelopment;
