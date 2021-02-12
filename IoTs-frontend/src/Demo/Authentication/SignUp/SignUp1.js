import React from 'react';
import {  withRouter } from 'react-router-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../../store/actions/signupActions'//Import the requested API
import * as flashMessage from '../../../store/actions/flashmessage'
import SignUpForm from './SignUpForm'
import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../pages/layout/AdminLayout/Breadcrumb";


class SignUp1 extends React.Component {
    render() {
        return (
            <Aux>
                <Breadcrumb />
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <SignUpForm signupActions={this.props.signupActions} flashMessage={this.props.flashMessage}/>
                    </div>
                </div>
            </Aux>
        );
    }
}
//Receive dispatch as a parameter, the function will use dispatch to trigger a specific action.
const mapDispatchToPros = (dispatch) => {
    
    //bindActionCreators combines one or more dispatch and action into the content needed by mapDispatchToPros
        return {
            signupActions: bindActionCreators(signupActions,dispatch),
            flashMessage: bindActionCreators(flashMessage,dispatch)
        }
    }

export default withRouter(connect(null, mapDispatchToPros)(SignUp1)) ;