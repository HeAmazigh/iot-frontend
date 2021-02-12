import React from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import classnames from 'classnames'

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../layout/AdminLayout/Breadcrumb";
import { login } from '../../../store/actions/login'
import validataInput from '../../../store/utils/validations/login'

class SignIn1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            username: '',
            password: '',
            errors: {},
            isLoading: false
        }
    };



    //Get the target value
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    //Non-empty verification
    isValid = (e) => {
        const { errors, isValid } = validataInput(this.state);
        if (!isValid) {
            this.setState({ errors })
        }
        return isValid
    }
    //Determine whether the backend query is successful or failed
    onSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true })
            this.props.login(this.state).then(

                (res) => this.props.history.push("/IoTsTrusT/landing"),
                (err) => this.setState({ errors: err.res.data.errors, isLoading: false }),

            )
        }
    };

    render() {
        // this .state of all
        const { username, password, errors, isLoading } = this.state

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
                        <div className="card" >
                            <div className="card-body text-center"  >
                                <div className="mb-4">
                                    <i className="feather icon-unlock auth-icon" />
                                </div>
                                <h3 className="mb-4">Login</h3>
                                <form onSubmit={this.onSubmit}>

                                    {errors.from && <div className="alert alert-danger">{errors.from}</div>}
                                    <div className="input-group mb-3">
                                        <input
                                            value={username}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="username"
                                            name="username"
                                            className={classnames('form-control', { 'is-invalid': errors.username })}
                                        />
                                        {errors.username && <span className="form-text text-muted">{errors.username}</span>}
                                    </div>
                                    <div controlId="formPassword" className="input-group mb-4">
                                        <input
                                            value={password}
                                            onChange={this.onChange}
                                            type="password"
                                            placeholder="password"
                                            name="password"
                                            className={classnames('form-control', { 'is-invalid': errors.password })}
                                        />
                                        {errors.password && <span className="form-text text-muted">{errors.password}</span>}
                                    </div>
                                    <div className="form-group text-left">
                                        <div className="checkbox checkbox-fill d-inline">
                                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary shadow-2 mb-4" onClick={this.onSubmit} disabled={isLoading} >Login</button>
                                    <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                    <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default withRouter(connect(null, { login })(SignIn1));