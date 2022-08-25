import React from "react";

function FavPackages({ image, price, coursName, coursTime }) {
  return (
    <div className="fav-article col-xl-3 mt-3 me-2">
      <img src={image} alt="package-image" />
      <div className="header-package-info mt-4 container">
        <i class="bi bi-bookmark"></i>
        <h5 className="cours-name mb-4">{coursName}</h5>
        <div className="cours-time"> {coursTime} </div>
        <div className="cours-price mb-4"> {price} </div>
      </div>
    </div>
  );
}

export default FavPackages;
