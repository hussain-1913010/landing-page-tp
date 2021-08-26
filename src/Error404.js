import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <div id="notFound">
                <div className="notFound">
                    <div className="notFound404">
                        <h1>404</h1>
                    </div>
                    <h2 className="">WE ARE SORRY, PAGE NOT FOUND</h2>
                    <p className="">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE</p>
                <NavLink to="/" className="backTohomeLink">BACK TO HOMEPAGE</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Error404;