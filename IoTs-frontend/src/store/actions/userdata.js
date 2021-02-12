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
import { ADD_USER_INPUTDATA } from '../actions'

//Access user data
export const UserData = (Data) => {
    return dispatch => {
        return axios.get("/api/getuser", Data)

    }
}

//Get user modified data
export const getInputData = (InputData) => {
    return {
        type: ADD_USER_INPUTDATA,
        InputData
    }
}

//delete
export const UserDelete = (userdelete) => {
    return dispatch => {
        return axios.post(`/api/getuser/delete/${userdelete}`, userdelete)
    }
}

//Get changes
export const UserUpdata = (userupdata) => {
    return dispatch => {
        return axios.post(`/api/getuser/updata/${userupdata}`).then(res => {
            console.log("test");
            const userdata = res.data[0]
            dispatch(getInputData(userdata))
        })
    }
}

//Add to
export const UserModify = (usermodify) => {
    return dispatch => {
        return axios.post(`/api/getuser/modify/`, usermodify)
    }
}
//Update the data
export const UpdataUserdata = (updatauserdata, childDataId) => {
    return dispatch => {
        return axios.post(`/api/getuser/userdata/${childDataId}`, updatauserdata, childDataId)
    }
}