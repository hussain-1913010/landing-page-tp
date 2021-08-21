import React, { useState } from "react";
import serviceapi from "./api/servicees";

const Services = () => {
  const [servicedata, setServicedata] = useState(serviceapi);
  return (
    <div>
      <section className="serviceMainContainer">
        <div className="container serviceContainer">
          <h1 className="mainHeading fw-bold text-center">How to send money</h1>
          <div className="row">
            {servicedata.map((curr) => {
              const { id, logo, title, info } = curr;
              return (
                <div
                  key={id}
                  className="col-11 col-lg-4 col-xxl-4 workContainerSubdiv"
                >
                  <i className={`fontawesome_style ${logo}`}></i>
                  <h2 className="subHeading">{title}</h2>
                  <p className="main_hero_para">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
