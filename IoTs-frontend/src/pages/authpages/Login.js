import React, {Fragment, useContext} from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {NavLink} from 'react-router-dom';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import {useHttpClient} from '../../shared/hooks/http-hook';
import {AuthContext} from '../../shared/context/auth-context';

import '../../assets/scss/style.scss';

const Login = () => {

    const Auth = useContext(AuthContext);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const formik = useFormik({
        initialValues: {
            username: '',
            password:''
        },

        validationSchema: Yup.object({
            username: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
            password: Yup.string().min(8 , 'Must be 8 characters or more').required('Required'),
        }),

        onSubmit: async (values, event) => {
            try {
                const response = await sendRequest('http://localhost:5000/api/users','POST',
                JSON.stringify(values, null, 2), {
                    'Content-Type': 'application/json'
                },
            );
            Auth.login(response.userId, response.token);
            //toast('Logged in successfully!');
            } catch (error) {}
        }
    });

    return (
        <Fragment>
            <div className="auth-wrapper">
                
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r"></span>
                        <span className="r s"></span>
                        <span className="r s"></span>
                        <span className="r"></span>
                    </div>
                    <div className="card">
                        <h1> {isLoading} </h1>
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon"/>
                            </div>
                            <h3 className="mb-4">Login</h3>
                            <h3> {error} </h3>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="input-group mb-3">
                                <div className="col-md-12">
                                    <input 
                                        type='text'
                                        name="username"
                                        placeholder='Username'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <div> {formik.errors.username} </div>
                                    ): null}
                                </div>
                                </div>
                                <div className="input-group mb-4">
                                <div className="col-md-12">
                                    <input 
                                        type='password'
                                        name="password"
                                        placeholder='Password'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div> {formik.errors.password} </div>
                                    ): null}
                                </div>
                                </div>
                                <div className="form-group text-">
                                    <div className="checkbox checkbox-fill d-inline text-center">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                        <label htmlFor="checkbox-fill-a1" className="cr">Save credentials</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary shadow-2 mb-4">Login</button>
                                <p className="mb-2 text-muted">Forgot password ? <NavLink to="">Reset</NavLink></p>
                                <p className="mb-0 text-muted">Don't have an account ? <NavLink to="/signup">Signup</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
