import { useState } from "react";
import { data } from "../../Data/project1";
import { Link } from "react-router-dom";

const Projecr3 = () => {
  const categoryMenu = [
    {
      title: "Marketing",
      category: "Marketing",
    },
    {
      title: "Software",
      category: "Software",
    },
    {
      title: "Technology",
      category: "Technology",
    },
    {
      title: "Real Estate",
      category: "Real Estate",
    },
    {
      title: "Helpdesk",
      category: "Helpdesk",
    },
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
          {data.map((item, index) => (
            <div
              className={`col-lg-6 col-sm-6 project-grid-area grid-item ${
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
                  <img
                    src={item.img}
                    alt="thumb"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", 
                    }}
                  />
                </div>
                <div
                  className="case-study-content1"
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    border:'1px solid #008eb2'
                  }}
                >
                  <div className="case-study-title" >
                    <h5 style={{fontWeight: "bold"}}>{item.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projecr3;
