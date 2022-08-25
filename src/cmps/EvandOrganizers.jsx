import React from "react";

function EvandOrganizers({ image, title }) {
  return (
    <div className="container row organizers-carousel-item">
      <img src={image} alt="image" className="col w-100" />
      <span className="col">{title} </span>
    </div>
  );
}

export default EvandOrganizers;
