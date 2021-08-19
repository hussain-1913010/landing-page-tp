import React, { useState } from "react";
import howToUseApp from "./api/howtouse";

const AboutUs = () => {
  const [aboutData, setAboutDAta] = useState(howToUseApp);
  return (
    <div>
      <section className="commonSection ourServices">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center serviceLeftSideImg">
              <img
                src="./images/hero3.jpg"
                alt="not found"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-7 ourServiceList">
              <h3 className="miniTitle">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="mainHeading">How to use the App?</h1>

              {aboutData.map((curr) => {
                const { id, title, info } = curr;
                return (
                  <>
                    <div className="row ourServicesInfo" key={id}>
                      <div className="col-1 ourServicesNumber">{id}</div>
                      <div className="col-10 ourServicesData">
                        <h2 className="">{title}</h2>
                        <p className="main_hero_para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn_style btn_style_border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="commonSection ourServices ourServicesRightSide">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 ourServicesRightSideContent d-flex justify-content-center align-items-start flex-column">
              <h3 className="miniTitle">
                -- SUPPORT IN ANY LANGUAGES
              </h3>
              <h1 className="mainHeading">
                  World class support is <br/> available 24/7
              </h1>

              {aboutData.map((curr) => {
                const { id, title, info } = curr;
                return (
                  <>
                    <div className="row ourServicesInfo" key={id}>
                      <div className="col-1 ourServicesNumber">{id}</div>
                      <div className="col-10 ourServicesData">
                        <h2 className="">{title}</h2>
                        <p className="main_hero_para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn_style btn_style_border">learn more</button>
            </div>

            <div className="col-12 col-lg-5 serviceRightSideImg">
              <img
                src="./images/callcenter.jpg"
                alt="not found"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
