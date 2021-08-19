import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <section className="commonSection ourServices">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center serviceLeftSideImg">
                            <img src="./images/hero3.jpg" alt="not found" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-lg-7 ourServiceList">
                            <h3 className="miniTitle">
                                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className="mainHeading">How to use the App?</h1>
                            <div className="row ourServicesInfo">
                                <div className="col-1 ourServicesNumber">1</div>
                                <div className="col-10 ourServicesData">
                                    <h2 className="">Sign in</h2>
                                    <p className="main_hero_para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque numquam odit excepturi similique iure sint minus eveniet. Ab repellat consequatur, excepturi hic, possimus labore dolore eligendi asperiores nostrum ipsam delectus.
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <button className="btn_style btn_style_border">learn more</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;