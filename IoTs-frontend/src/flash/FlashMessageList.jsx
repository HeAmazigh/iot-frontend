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
import FlashMessage from './FlashMessage'
import { connect } from 'react-redux'///Bind redux with react
import { deleteFlashMessage } from '../store/actions/flashmessage'//Import action
class FlashMessageList extends React.Component {

    render() {
        const messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
        )
        return (
            <div className="container">
                {messages}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessage
    }
}


//Bind the data in the state and the state in the ation to the component through connect

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList)