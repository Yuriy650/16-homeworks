import React from 'react';
import './Contact.css';
class Contact extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="contactBlock">
                <img className="imageGender" src={this.props.imageGender} alt='gender'/>
                <p className="dataContact">{this.props.firstName}</p>
                <p className="dataContact">{this.props.lastName}</p>
                <p className="dataContact">{this.props.phone}</p>
            </div>
        )
    }
}
export default Contact;