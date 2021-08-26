import React, { useState } from "react";
import workapi from "./api/workapi";

const HowItWorks = () => {
  const [workdata, setWorkdata] = useState(workapi);
  return (
    <div>
      <section className="crossSectional">
        <div className="workContainer container">
          <h1 className="mainHeading text-center">How it works</h1>
          <div className="row">
            {workdata.map((curr) => {
              const { id, logo, title, info } = curr;
              return (
                <>
                <div className="col-12 col-lg-4 text-center workContainerSubdiv">
                  <i className={`fontawesome_style ${logo}`}></i>
                  <h2 className="subHeading">{title}</h2>
                  <p className="main_hero_para">{info}</p>
                </div>
              </>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
