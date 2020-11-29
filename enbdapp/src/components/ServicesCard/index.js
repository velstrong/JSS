import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';
function Greeting(props, input) {
    const { Alignment } = props.params;
    if (Alignment == input) {
        return (<div className="overview-image">
            <div className="image">
                <Image media={props.fields.CardImage} />
                <div className="circle-img">
                    <img src={require("../../assets/images/circle.png")} alt="image" />
                </div>
            </div>
        </div>);
    }
    return "";
}

const ServicesCard = (props) => {
    const { HighLightList } = props.fields;
   // console.log(props.children);
    return (
        <div className="services-area ptb-70">
            <div className="container-fluid p-0">
                <div className="overview-box">
                    {
                        Greeting(props, "Right")
                    }
                    <div className="overview-content">
                        <div className="content left-content">
                            <Text tag="h2" field={props.fields.Heading} />
                            <div className="bar"></div>
                            <RichText tag="p" field={props.fields.Description} />
                            <ul className="services-list">
                                {HighLightList.map((item, i) => (
                                    <li>
                                        <span>
                                            <i className="flaticon-check-mark"></i>
                                            {item.fields.Title.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {
                        Greeting(props, "Left")
                    }
                </div>
            </div>
        </div>
    );
};
export default ServicesCard;
