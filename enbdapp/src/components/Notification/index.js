import React from 'react';
import { Text, RichText, Link } from '@sitecore-jss/sitecore-jss-react';

const Notification = ({ fields }) => (
    <div className="account-create-area">
        <div className="container account-create-content">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <Text tag="h2" field={fields.Title} />
                    <RichText tag="p" field={fields.Description} />
                </div>

                <div className="col-lg-4">
                    <div className="create-account">
                        <Link field={fields.CTALink} className="btn btn-primary">
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Notification;
