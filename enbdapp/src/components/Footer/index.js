import React from 'react';
import { RichText, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const Footer = (props) => {
    console.log(props)
  
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <a href={props.fields.LogoLink}>
                                    <img src={props.fields.Logo} />
                                </a>
                                <p>{props.fields.Description} </p>
                            </div>

                            <ul className="social-links">
                                <li>
                                    
                                        <a target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                   
                                </li>
                                <li>
                                    
                                        <a target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    
                                </li>
                                <li>
                                    
                                        <a target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    
                                </li>
                                <li>
                                    
                                        <a target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>

                            <ul className="list">
                                <li>
                                    
                                        <a>About Us</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Services</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Features</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Our Pricing</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Latest News</a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>

                            <ul className="list">
                                <li>
                                    
                                        <a>FAQ's</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Privacy Policy</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Terms & Condition</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Community</a>
                                    
                                </li>
                                <li>
                                    
                                        <a>Contact Us</a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <span className="mr-1">Location:</span>
                                    Emirates NBD Bank PJSC, Baniyas Road, Deira, P.O. Box: 777, Dubai, UAE
                                    </li>
                                <li>
                                    <span className="mr-1">Email:</span>
                                    Support@emiratesnbd.com
                                    </li>
                                <li>
                                    <span className="mr-1">Phone:</span>
                                    600 54 0000
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <RichText tag="p" field={props.fields.Copyright} />
                </div>
            </div>
        </footer>
    );
};
export default Footer;
