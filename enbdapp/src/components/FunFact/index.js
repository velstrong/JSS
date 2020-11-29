import React from 'react';
import { Text, RichText, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const FunFact = (props) => {
    const { Facts } = props.fields;
    return (
        <section className="funfacts-area ptb-70 pt-0">
            <div className="container">
                <div className="section-title">
                    <Text tag="h2" field={props.fields.Title} />
                    <div className="bar"></div>
                    <RichText tag="p" field={props.fields.Description} />
                </div>
                <div className="row">
                    {Facts.map((item, i) => (
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>{item.fields.Title.value}</span>K</h3>
                                <p>{props.fields.Description.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="contact-cta-box">
                    <Text tag="h2" field={props.fields.CTATitle} />
                    <RichText tag="p" field={props.fields.CTADescription} />
                    <Link field={props.fields.CTALink} className="btn btn-primary" />
                </div>

                <div className="map-bg">
                    <Image media={props.fields.BGImage} />
                </div>
            </div>
        </section>
    );
};

export default FunFact;
