/*
 * @Author: ryma.naiatamara 
 * @Date: 2020-02-12 11:23:59 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-02-12 11:51:36
 * 
 *  Copyright (c) 2019 Red Alert Labs S.A.S.
 *  All Rights Reserved.
 *  This software is the confidential and proprietary information of
 *  Red Alert Labs S.A.S. (Confidential Information). You shall not
 *  disclose such Confidential Information and shall use it only in
 *  accordance with the terms of the license agreement you entered
 *  into with Red Alert Labs S.A.S.
 *  RED ALERT LABS S.A.S. MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE
 *  SUITABILITY OF THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING
 *  BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. RED ALERT LABS S.A.S. SHALL
 *  NOT BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING,
 *  MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
 * 
 */

import React from 'react'
import classnames from 'classnames'
//withRouter
import {NavLink, Link,withRouter} from 'react-router-dom'

import './../../../assets/scss/style.scss';

import DEMO from "../../../store/constant";



class SignUpForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            passwordConfirmation: "",
            errors: {},
            isLoading: false,
            invalid:false
        }
    }

    //Get the input text, get the target value and add it to the target name
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    //Send request when submitting
    onSubmit = (e) => {
        //Block the default behavior
        e.preventDefault()
        this.setState({ errors: {}, isLoading: true })

        //Call the signupActions passed by the parent component
        this.props.signupActions.userSignupRequest(this.state).then(
            () => {

                //Join rudex
                this.props.flashMessage.addFlashMeeage({
                    type: "success",
                    text: " registration success！"
                })

                //withRouterhistory={this.props.history}
                this.props.history.push("/")
            },
            ({ response }) => {
                this.setState({
                    errors: response.data,
                    isLoading: false
                })
            }
        )
    }

    //Username exists //check user
    checkUserExists = (e) => {
        const field = e.target.name;
        const val = e.target.value;
        let invalid;
        if (val !== "") {
            this.props.signupActions.isUserExists(val).then(res => {
                let errors = this.state.errors;
                if (res.data[0]) {
                    errors[field] = " Username exists: " + val;
                    invalid = true
                    //The button is true when successful
                } else {
                    errors[field] = "";
                    invalid = false
                }
                this.setState({ errors, invalid })
            })
        }
    }
    render() {
        const { errors, isLoading, invalid } = this.state
        return (
            <div className="card">
                <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="feather icon-user-plus auth-icon" />
                    </div>
                    <h3 className="mb-4">Sign up</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.onChange}
                                onBlur={this.checkUserExists}
                                className={classnames('form-control', { 'is-invalid': errors.username })}
                            />
                            {errors.username && <span className="form-text text-muted">{errors.username}</span>}
                        </div>
                        <div className="input-group mb-3">
                            <input
                                placeholder="email"
                                type="email"
                                name="email"
                                maxLength="40"
                                value={this.state.email}
                                onChange={this.onChange}
                                className={classnames('form-control', { 'is-invalid': errors.email })}
                            />
                            {errors.email && <span className="form-text text-muted">{errors.email}</span>}
                        </div>
                        <div className="input-group mb-4">
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                className={classnames('form-control', { 'is-invalid': errors.password })}
                            />
                            {errors.password && <span className="form-text text-muted">{errors.password}</span>}
                        </div>
                        <div className="input-group mb-4">
                            <input
                                type="password"
                                placeholder="confirm password"
                                name="passwordConfirmation"
                                value={this.state.passwordConfirmation}
                                onChange={this.onChange}
                                className={classnames('form-control', { 'is-invalid': errors.passwordConfirmation })}
                            />
                            {errors.passwordConfirmation && <span className="form-text text-muted">{errors.passwordConfirmation}</span>}
                        </div>
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">
                                <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2" />
                                <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                            </div>
                        </div>
                        <Link to="/dashboard/default">  <button disabled={isLoading || invalid} className="btn btn-primary shadow-2 mb-4">Sign up</button> </Link>
                        <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin-1">Login</NavLink></p>
                    </form>
                </div>
            </div>
        );
    }
}
export default withRouter(SignUpForm)