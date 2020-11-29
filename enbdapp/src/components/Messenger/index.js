import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Messenger = (props) => (
  <div>
    <p>Messenger Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Messenger;
