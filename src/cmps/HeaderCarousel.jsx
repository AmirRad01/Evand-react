import React from "react";

function HeaderCarousel({ image, price, coursName, coursTime }) {
  return (
    <div className="header-package-container col">
      <img src={image} alt="package-image" />
      <div className="header-package-info mt-4 container">
        <h5 className="cours-name mb-4">{coursName}</h5>
        <div className="cours-time"> {coursTime} </div>
        <div className="cours-price mb-4"> {price} </div>
      </div>
    </div>
  );
}

export default HeaderCarousel;
