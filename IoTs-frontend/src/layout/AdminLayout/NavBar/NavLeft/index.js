/*
 * @Author: ryma.naiatamara 
 * @Date: 2020-02-12 11:23:59 
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
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import windowSize from 'react-window-size';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import NavSearch from './NavSearch';
import Aux from "../../../../hoc/_Aux";
import DEMO from "../../../../store/constant";
import * as actionTypes from "../../../../store/actions";
import avatar2 from '../../../../assets/images/user/secure4.png';

class NavLeft extends Component {
    state = { visible: false };
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };



    render() {
        let iconFullScreen = ['feather'];
        iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

        let navItemClass = ['nav-item'];
        if (this.props.windowWidth <= 575) {
            navItemClass = [...navItemClass, 'd-none'];
        }
        let dropdownRightAlign = false;
        if (this.props.rtlLayout) {
            dropdownRightAlign = true;
        }

       // const { visible } = this.state;
        return (
            <Aux>
                <ul className="navbar-nav mr-auto">
                    <li><a href={DEMO.BLANK_LINK} className="full-screen" onClick={this.props.onFullScreen}><i className={iconFullScreen.join(' ')} /></a></li>
                    <li className="nav-item" > <i  onClick={this.showDrawer}  class="fa fa-th" aria-hidden="true" /></li>
                    <li className={navItemClass.join(' ')}>
                        <Dropdown alignRight={dropdownRightAlign}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                Action
                            </Dropdown.Toggle>
                            <ul>
                                <Dropdown.Menu>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Action</a></li>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Another action</a></li>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Something else here</a></li>
                                </Dropdown.Menu>
                            </ul>
                        </Dropdown>
                    </li>
                    <li className="nav-item"><NavSearch/></li>
                </ul>

        <Drawer
         title={ <>  <Link to="/landing"><span style={{color:"darkred", fontWeight:"bold"}}><i class="fa fa-arrow-circle-left text-red" aria-hidden="true"></i>  &nbsp; Landing </span> </Link></>}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          //key={placement}
        >
            <br/>
           <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}} className="m-0 d-inline">Business Questionnaire</h6>
                    </div>
                </div>

                <Link to="/security-profile-questionnaire">  <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}}  className="m-0 d-inline">Security Profile</h6>
                    </div>
                </div> </Link>
            
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}} className="m-0 d-inline">Standard Catalogue</h6>
                    </div>
                </div>

                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}}  className="m-0 d-inline">Labs/CABs Catalogue</h6>
                    </div>
                </div>

                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}}  className="m-0 d-inline">Certified Products</h6>
                    </div>
                </div>

                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}}  className="m-0 d-inline">Update Certificate</h6>
                    </div>
                </div>

                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}}  className="m-0 d-inline">Disclose Vulnerability</h6>
                    </div>
                </div>

                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}}  className="m-0 d-inline">Certify My Solution</h6>
                    </div>
                </div>

                <Link to="/evaluation"> <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 style={{color:"dimgray", fontWeight:"bold"}}  className="m-0 d-inline">Evaluation Tools</h6>
                    </div>
                </div> </Link>
        </Drawer>
        
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFullScreen: state.isFullScreen,
        rtlLayout: state.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreen: () => dispatch({type: actionTypes.FULL_SCREEN}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLeft));
