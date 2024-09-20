import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import Html from "../assets/images/stacks/web/html.png";
import CSS from "../assets/images/stacks/web/css.png";
import AWS from "../assets/images/stacks/web/aws.png";
import Mongo from "../assets/images/stacks/web/mongo.png";
import JS from "../assets/images/stacks/web/js.png";
import ReactIcon from "../assets/images/stacks/web/react.png";
import Vue from "../assets/images/stacks/web/vue.png";
import Node from "../assets/images/stacks/web/node-js.png";
import Docker from "../assets/images/stacks/web/docker.png";
import Swift from "../assets/images/stacks/web/swift.png";
import Java from "../assets/images/stacks/web/java.png";

const WebDevelopment = () => {
  const techStacks = [
    { name: "HTML", src: Html },
    { name: "CSS", src: CSS },
    { name: "JavaScript", src: JS },
    { name: "React", src: ReactIcon },
    { name: "Node.js", src: Node },
    { name: "Vue.js", src: Vue },
    { name: "MongoDB", src: Mongo },
    { name: "Docker", src: Docker },
    { name: "AWS", src: AWS },
    { name: "Swift", src: Swift },
    { name: "Java", src: Java },
  ];

  const Comp1 = {
    img1: "https://img.freepik.com/free-photo/it-specialist-checking-code-computer-dark-office-night_1098-18699.jpg?t=st=1726759290~exp=1726762890~hmac=56425d3718a23b59559b403774d9bf9da35203e054df92cc0b5e5826f52644bc&w=900",
    heading1: "Web Development",
    para1: `Web Development is a broad term that encompasses various aspects
                of creating and maintaining websites and web applications. It
                involves multiple disciplines and skills, including front-end
                and back-end development, as well as design and user experience
                (UX).`,
  };

  const Comp2 = {
    img2: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?t=st=1726765902~exp=1726769502~hmac=fd008b5d025e0d812e70a18b6f5cbc95a77a79b713801095b32f7904b40d4ab3&w=900",
    heading2: "Front End Development",
    para2: `Front-end development is a crucial aspect of web development
                that focuses on the client side of web applications and
                websites. It involves creating and managing the visual and
                interactive elements that users engage with directly. Front-end
                developers use a combination of technologies, design principles,
                and best practices to build user interfaces that are both
                functional and aesthetically pleasing.`,
  };

  const Comp3 = {
    img3: "https://img.freepik.com/premium-photo/data-technology-center-server-racks-dark-room-with-vfx_1271065-3253.jpg?w=740",
    heading3: "Back End Development",
    para3: `Backend development focuses on the server-side of web
                  development. It involves creating and managing the server,
                  database, and application logic that powers the front-end
                  interface. Backend developers work with server-side languages
                  and frameworks to build APIs, manage data storage, and ensure
                  the seamless operation of web applications. They handle tasks
                  such as user authentication, data processing, and server-side
                  scripting to ensure that everything on the client side
                  functions smoothly.`,
  };
  return (
    <CardPage
      tectStacks={techStacks}
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"Web Development"}
    />
  );
};

export default WebDevelopment;
