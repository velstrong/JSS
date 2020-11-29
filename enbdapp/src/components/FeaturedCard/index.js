import React from 'react';
import { Text, RichText, Link } from '@sitecore-jss/sitecore-jss-react';

const FeaturedCard = (props) => (
    <React.Fragment>
    <div className="featured-boxes-area">
        <div className="container">
            <div className="featured-boxes-inner">
                    <div className="row m-0">
                        {props.fields.items.map((item, i) => (
                            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-fb7756">
                                        <i className="flaticon-piggy-bank"></i>
                                    </div>
                                    <Text tag="h3" field={item.fields.Title} />
                                    <RichText tag="p" field={item.fields.Description} />
                                    <Link field={item.fields.CTALink} className="read-more-btn" />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        </div>
        </React.Fragment>
);

export default FeaturedCard;
