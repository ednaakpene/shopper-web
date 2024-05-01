import React from 'react';
import firstImg from "../../assets/headphones-displayed-against-dark-background.jpg";
import secondImg from "../../assets/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background.jpg";
import thirdImg from "../../assets/pile-winter-sweaters-with-pine-cones.jpg";

const Heroshop = () => {
  return (
    <div className="pt-20"> {/* Add padding top to the Heroshop component */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstImg} className="d-block w-100" alt="headphone" height="500px" />
          </div>
          <div className="carousel-item">
            <img src={secondImg} className="d-block w-100" alt="jewelry" height="500px" />
          </div>
          <div className="carousel-item">
            <img src={thirdImg} className="d-block w-100" alt="ladiesdress" height="500px" />
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Heroshop;
