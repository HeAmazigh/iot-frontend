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
import { connect } from 'react-redux'
import { addFlashMeeage } from '../../actions/flashmessage'
import { withRouter } from 'react-router-dom'

//High-end group price
export default function(ComposedComponent){
    class Authenticate extends React.Component{
        UNSAFE_componentWillMount(){
            if(!this.props.isAutenticated){
                this.props.addFlashMeeage({
                    type:"danger",
                    text:"please log in first"
                })
                this.props.history.push("/")
            }
        }
        UNSAFE_componentWillUpdate(nextProps){
            if(!nextProps.isAutenticated){
                this.props.history.push("/")
            }
        }
        render(){
            return(
                <ComposedComponent {...this.props}></ComposedComponent>
            )
        }
    }

    const mapStateToProps = (state)=>{
        return{
            isAutenticated:state.auth.isAutenticated
        }
    }

    return withRouter(connect(mapStateToProps,{addFlashMeeage})(Authenticate))
}