import React from 'react';
import { Link } from '@sitecore-jss/sitecore-jss-react';

const Navigation = (props) => (
    <React.Fragment>
        <div id="navbar" className="navbar-area">
            <div className="luvion-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                {props.fields.items.map((item, i) => (
                                    <li className="nav-item">
                                        <Link field={item.fields.CTALink} className="nav-link" />
                                    </li>
                                    ))}
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Navigation;
