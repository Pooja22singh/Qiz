import React from 'react';
import { connect } from 'react-redux';
import { saveDetails } from '../actions/auth';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            emailId: "",
            error: ""
        }
    }
    setFullName = (e) => {
        if (e.target.value) {
            this.setState({ "fullName": e.target.value })
        }
    }
    setEmailId = (e) => {
        if (e.target.value) {
            this.setState({ "emailId": e.target.value })
        }
    }

    resetForm() {
        this.setState({
            fullName: "",
            emailId: "",
            error: ""
        })
    }
    doSignUponEnter = (event) => {
        if (event.key === "Enter")
            this.doSignUp();
    }

    doSignUp = () => {
        this.props.saveDetails(this.state.fullName, this.state.emailId);
        this.props.history.push("/instructions");
    }
    render() {

        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" onChange={this.setFullName} placeholder="Full Name"></input>
                    <input type="email" onChange={this.setEmailId} onKeyPress={this.doSignUponEnter} placeholder="Email Id"></input>
                    <button onClick={this.doSignUp} className="button">Sign Up</button>
                </div>
            </div>
        );

    }

}

const mapDispatchToProps = (dispatch) => ({
    saveDetails: (fullname, emailid) => dispatch(saveDetails(fullname, emailid))
});
export default connect(undefined, mapDispatchToProps)(LoginPage); 