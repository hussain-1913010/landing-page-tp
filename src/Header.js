import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
                <section className="container main_hero_container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header_left d-flex justify-content-center flex-column align-items-start">
                            <h1 className="display-2">
                                Online Payment Made <br/> Easy For You.
                            </h1>
                            <p className="main_hero_pera">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ex quam atque eum aut mollitia accusantium tempora quidem dolorum, blanditiis repellat enim vero eos? Distinctio harum cum incidunt praesentium eveniet?
                            </p>
                            <h3 className="">Get early access for you</h3>
                            <div className="input_group mt-3">
                                <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text"/>
                                <div className="input_group_text">Get it now</div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 header_right d-flex justify-content-center align-items-center">
                            <img src="./images/hero1.jpg" alt="not found" className="img-fluid"/>
                            <img src="./images/hero4.jpg" alt="not found" className="img-fluid"/>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
};

export default Header;