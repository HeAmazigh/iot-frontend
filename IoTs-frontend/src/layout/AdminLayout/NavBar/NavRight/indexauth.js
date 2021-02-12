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
import { bindActionCreators } from 'redux'
import NavRight from './index';
import * as userdata from '../../../../store/actions/userdata'
class NavHeaderParent extends React.Component {
  render() {
    return (
      <div className="UserPageFather">
        <NavRight userData={this.props.userData} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      userdata: bindActionCreators(userdata, dispatch)
    }
  }

const mapStateToProps = (state) => {
  return {
    userData: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeaderParent)
