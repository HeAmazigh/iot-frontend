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
import { ADD_PROJECT_INPUTDATA } from '../actionTypes/project'
//Access project data/
export const ProjectData = (Data) => {
    return dispatch => {
        return axios.get("/api/getproject", Data)
    }
}

//Get project modified data
export const getInputProjectData = (InputData) => {
    return {
        type: ADD_PROJECT_INPUTDATA,
        InputData
    }
}
//delete
export const ProjectDelete = (projectdelete) => {
    return dispatch => {
        return axios.post(`/api/getproject/delete/${projectdelete}`, projectdelete)
    }
}

//Get changes
export const ProjectUpdata = (projectupdata) => {
    return dispatch => {
        return axios.post(`/api/getproject/updata/${projectupdata}`).then(res => {
            const projectdata = res.data/*[0]*/
            dispatch(getInputProjectData(projectdata))
        })
    }
}

//Add to
export const ProjectModify = (projectmodify) => {
    return dispatch => {
        return axios.post(`/api/getproject/modifyproject/`, projectmodify)
    }
}
//Update the data
export const UpdataProjectdata = (updataprojectdata, projectDataId) => {
    return dispatch => {
        return axios.post(`/api/getproject/projectdata/${projectDataId}`, updataprojectdata, projectDataId)
    }
}
