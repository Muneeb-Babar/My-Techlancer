import { useState } from "react";
import ProjectData from "../../Data/project2Data.js";

const Projecr3 = () => {
  const categoryMenu = [
    { title: "Marketing", category: "Marketing" },
    { title: "Software", category: "Software" },
    { title: "Real Estate", category: "RealEstate" },
    { title: "Technology", category: "Technology" },
    { title: "Gaming Assets", category: "GamingAssets" },
    { title: "2D Illustrations", category: "2DArts" },
    { title: "3D Models", category: "3DModels" },
    { title: "Brand Designing", category: "BrandDesigning" },
    { title: "3D Character", category: "3DCharacter" },
    { title: "Interior Designing", category: "InteriorDesigning" },
  ];

  const [active, setActive] = useState("all");

  return (
    <div className="case-study-area project-main-area">
      <div className="container">
        <div className="row case-study-bg">
          <div className="col-lg-12 col-sm-12">
            <div className="case_study_nav">
              <div className="case_study_menu">
                <ul className="menu-filtering">
                  <li
                    className={active === "all" ? "active" : ""}
                    onClick={() => setActive("all")}
                  >
                    SEE All
                  </li>
                  {categoryMenu.map((item, index) => (
                    <li
                      onClick={() => setActive(item.category)}
                      className={active === item.category ? "active" : ""}
                      key={index}
                      style={{ padding: '10px' }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row image_load">
          {ProjectData.map((item, index) => (
            <div
              className={`col-lg-6 col-sm-6 project-Grid2-area Grid2-item ${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
              }`}
              key={index}
            >
              <div
                className="case-study-single-box"
                style={{
                  height: "800px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="case-study-thumb"
                  style={{
                    height: "700px",
                    overflow: "hidden",
                  }}
                >
                  {item.category === "GamingAssets" ? (
                    <video
                      src={item.img} // Assuming `img` contains the video source
                      controls
                      style={{
                        width: "100%",
                        height: "90%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={item.img}
                      alt="thumb"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                {/* Remove the title for Gaming Assets */}
                {item.category !== "GamingAssets" && (
                  <div
                    className="case-study-content1"
                    style={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                      border: '1px solid #008eb2',
                    }}
                  >
                    <div className="case-study-title">
                      <h5 style={{ fontWeight: "bold" }}>{item.title}</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projecr3;
