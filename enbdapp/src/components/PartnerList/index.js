import React from 'react';
import { Text, RichText, Link, Image } from '@sitecore-jss/sitecore-jss-react';

const PartnerList = (props) => {
    const { Partners } = props.fields;
    return (
        <div className="partner-area ptb-70">
            <div className="container">
                <div className="section-title">
                    <Text tag="h2" field={props.fields.Title} />
                    <div className="bar"></div>
                    <RichText tag="p" field={props.fields.Description} />  </div>
                <div className="partner-inner">
                    <div className="row align-items-center">
                        {Partners.map((item, i) => (
                            <div className="single-partner-item">
                                <Link field={item.fields.CTALink}>
                                    <Image media={item.fields.Image} />
                                    <Image media={item.fields.Image} />
                                    </Link>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PartnerList;
