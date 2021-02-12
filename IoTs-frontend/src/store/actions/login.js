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

import axios from 'axios'
import setToken from '../utils/validations/setToken'
import { SET_CURRENT_USER } from "../actions";
import jwtdecode from "jwt-decode"; //Decrypt token cnpm install --save decode

//Trigger the reducer to pass in the user
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

//Log out
export const logout = () => {
    return dispatch => {
        localStorage.removeItem("jwtToken");//Clear jxtToken
        //Clear request header information
        setToken(false);
        //Clear Token data
        dispatch(setCurrentUser({}))
    }
}

export const login = (data) => {
    return dispatch => {
        return axios.post("/api/auth", data).then(res => {
            const token = res.data; //Get token
            localStorage.setItem('jwtToken', token); //Save to local
            setToken(token) //At this time, the token can be handed in to the background for processing
            dispatch(setCurrentUser(jwtdecode(token))) //The distribution event is triggered and the decrypted token is passed in
        })
    }
}