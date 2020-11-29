import React from 'react';
import { Text, RichText, Link, Image  } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const MainBanner = ({ fields }) => (
    <React.Fragment>
        <div className="main-banner">
            <Image media={fields.BannerImage} className="fix-img" />
            <div className="d-table position-relative">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="main-banner-content">
                            <Text tag="h1" field={fields.Heading} />
                            <RichText tag="p" field={fields.Description} />
                            <Link field={fields.CTALink} className="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default MainBanner;