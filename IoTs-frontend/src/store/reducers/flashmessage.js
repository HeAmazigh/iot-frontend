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

import {ADD_FLASH_MESSAGE,DELETE_FLASE_MESSAGE} from '../actions'
import shortid from 'shortid'   
import findIndex from 'lodash/findIndex' //lodash tool library needs to see
//Initialize a state to an array
const flashMessage = (state=[],action={})=>{
    switch(action.type){
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id:shortid.generate(),
                    type:action.message.type,
                    text:action.message.text
                }
            ]
        case DELETE_FLASE_MESSAGE:
            
//findIndex overload to get the id assigned to index
            const index = findIndex(state,{id:action.id});
          
//Determine whether the message exists
            if(index >=0){
                return[
                    ...state.slice(0,index),
                    ...state.slice(index+1)
                ]
            }
            return state;
        default:
            return state
    }
}
export default flashMessage