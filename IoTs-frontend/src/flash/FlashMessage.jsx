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
/**
 * Tip
 * Success
 * Failure danger
 */
class FlashMessage extends React.Component {
    onClick = () => {
        this.props.deleteFlashMessage(this.props.message.id)
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.deleteFlashMessage(this.props.message.id)
        }, 1000)
    }
    render() {

        /**
         * Tip type
         * type
         * Information
         * text
         */

        const { type, text } = this.props.message
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            })}>
                <button onClick={this.onClick} className="close">&times;</button>
                {text}
            </div>
        )
    }
}

export default FlashMessage