import React from "react";

function OrganizersTopSale({title,image,activeNum,organizersNum,followersNum}) {
  return (
    <div className=" row mt-5 mb-5 OrganizersTopSale-article">
      <div className="col-3 text-center d-flex flex-column">
        <img src={image} alt="image" className="w-100"/>
        <button className="mt-3">دنبال کنید</button>
      </div>
      <div className="col-9">
        <h5>{title} </h5>
        <div className=" event-info">
          <div className="organizers-event d-flex mt-4">
            <span className="ms-auto">  رویدادهای برگزارشده</span>
            <span> {organizersNum} 12</span>
          </div>
          <div className="active-event d-flex mt-4">
            <span className="ms-auto">  رویدادهای فعال</span>
            <span> {activeNum}12 </span>
          </div>
          <div className="followers d-flex mt-4">
            <span className="ms-auto">  دنبال‌کننده‌ها </span>
            <span> {followersNum} 12</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizersTopSale;
