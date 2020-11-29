import React from 'react';
import { Text, RichText, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const DownloadApp = ({ fields }) => (
   
    <React.Fragment>
    <div className="app-download-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="app-image">
                            <div className="main-image">
                                <Image media={fields.AndroidImage} className="wow fadeInLeft" data-wow-delay="0.6s" />
                                <Image media={fields.IOSImage} className="wow fadeInUp" data-wow-delay="0.9s" />
                          </div>

                        <div className="main-mobile-image">
                            <img src={require("../../assets/images/main-mobile.png")} className="wow fadeInUp" data-wow-delay="0.6s" alt="image" />
                        </div>

                        <div className="circle-img">
                            <img src={require("../../assets/images/circle.png")} alt="image" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                        <div className="app-download-content">
                            <Text tag="h2" field={fields.Title} />
                            <div className="bar"></div>
                            <RichText field={fields.Description} />

                        <div className="btn-box">
                                <Link field={fields.IOSCTALink} className="app-store-btn">
                                    <i className="flaticon-apple"></i>
                                    <RichText field={fields.IOSCTAText} />
                            </Link>

                                <Link field={fields.AndroidCTALink} className="play-store-btn">
                                    <i className="flaticon-play-store"></i>
                                        <RichText field={fields.AndroidCTAText} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </React.Fragment>
);

export default DownloadApp;
