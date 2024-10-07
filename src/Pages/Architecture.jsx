import React from "react";
import CardPage from "../Components/CardsPage/CardsPage";
import ArchitectureBasics from "../assets/images/architecture1.jpg";
import DesignTools from "../assets/images/architecture2.jpg";
import ArchitecturalApplications from "../assets/images/architecture3.jpg";

const Architecture = () => {

  const Comp1 = {
    img1: ArchitectureBasics,
    heading1: "2D/3D Architecture",
    para1: `2D and 3D architecture involves the planning, designing, and visualizing of structures and spaces using two-dimensional and three-dimensional representations. 2D architecture primarily includes floor plans, elevations, and technical drawings that provide detailed information about dimensions and materials. On the other hand, 3D architecture brings these designs to life through three-dimensional modeling and visualization techniques, allowing architects and clients to explore spaces in a realistic context. Both approaches are essential in the architectural design process, providing clarity and enhancing communication between stakeholders.`
  };
  
  const Comp2 = {
    img2: DesignTools,
    heading2: "Tools for 2D/3D Architecture",
    para2: `Architects and designers utilize various software tools for both 2D and 3D architectural design. Popular software for 2D design includes AutoCAD and SketchUp, which allow for precise technical drawings and layouts. For 3D modeling and visualization, tools like Revit, Rhino, and 3ds Max are widely used, offering advanced features such as rendering, animation, and virtual reality integration. Mastery of these tools is crucial for architects to create accurate designs, simulate real-world conditions, and present their concepts effectively to clients and stakeholders.`
  };
  
  const Comp3 = {
    img3: ArchitecturalApplications,
    heading3: "Apps of 2D/3D Architecture",
    para3: `The applications of 2D and 3D architecture extend beyond traditional building design. In urban planning, these techniques help visualize city layouts and infrastructure projects. In interior design, 3D modeling allows for virtual walkthroughs of spaces, aiding in material selection and layout planning. Additionally, in construction, accurate 2D drawings and detailed 3D models facilitate better communication among contractors and ensure that projects are executed as planned. As technology advances, the integration of 2D and 3D architecture continues to evolve, enabling innovative design solutions and improving overall project outcomes.`
  };
  
  
  return (
    <CardPage
      Comp1={Comp1}
      Comp2={Comp2}
      Comp3={Comp3}
      pageName={"2D / 3D Architecture"}
    />
  );
};

export default Architecture