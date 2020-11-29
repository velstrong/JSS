import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const HeroBanner = (props) => (
  <div>
    <p>HeroBanner Component</p>
       <p><Text field={props.fields.heading} /></p>
        <p> <Text field={props.fields.description} /></p>
  </div>
);

export default HeroBanner;
