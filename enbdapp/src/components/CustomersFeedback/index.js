import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 0,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
}

class CustomersFeedback extends React.Component {
   
    constructor(props) {
        super(props);
    }

    _isMounted = false;
    state = {
        display: false
    }

    componentDidMount(){
        this._isMounted = true;
        this.setState({ display: true })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        const { FeedbackList } = this.props.fields;

        return (
            <section className="feedback-area ptb-70 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <Text tag="h1" field={this.props.fields.Title} />
                        <div className="bar"></div>
                        <RichText tag="p" field={this.props.fields.Description} />
                    </div>

                    {this.state.display ? <OwlCarousel
                        className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {FeedbackList.map((item, i) => (

                            <div className="item">
                                <div className="single-feedback">
                                    <i className="fas fa-quote-left quote-icon"></i>
                                    <p>
                                        <q>{item.fields.Details.value}</q>
                                    </p>

                                    <div className="client-img">
                                        <img src={item.fields.Image.value.src} alt="image" />
                                        <h3>{item.fields.Name.value}</h3>
                                        <span>{item.fields.Position.value}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel> : ''}    
                </div>
            </section>
        );
    };
};
export default CustomersFeedback;
