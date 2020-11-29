import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const FeaturesContent = (props) => {
    const { FeartureCards } = props.fields;
    console.log(FeartureCards);
    return (

        <section className="features-area ptb-70 bg-f6f4f8">
            <div className="container">
                <div className="section-title">
                    <Text tag="h2" field={props.fields.Title} />
                    <div className="bar"></div>
                    <RichText tag="p" field={props.fields.Description} />
                </div>

                <div className="row">
                    {FeartureCards.map((item, i) => (
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-settings"></i>
                                </div>
                                <h3>{item.fields.Title.value}</h3>
                                <p>{props.fields.Description.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FeaturesContent;
