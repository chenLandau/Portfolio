import React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="card-container">
      {icon}
      <h1 className="service-title">{title}</h1>
    </div>
  );
};

export default ServiceCard;
