import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router-dom";

import BreadcrumbImg from '../../assets/images/breadcumb-bg.png'

const BreadCumb = ({Title}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
      <div className="breadcumb-area about" data-background={BreadcrumbImg}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h4>{Title}</h4>
                <ul className="breadcumb-list">
                  <li><Link to="/">Home</Link></li>
                  <li className="list-arrow">&lt;</li>
                  <li>{Title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BreadCumb;