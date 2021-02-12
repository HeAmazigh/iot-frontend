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

import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Tabs } from 'antd';
import DEMO from "../../store/constant";
import Aux from "../../hoc/_Aux";
import "../LandingPage/app.css";
import 'antd/dist/antd.css'
import CardFilter from "./CardFilter"
import SecurityFunctionality from './Componnent/SecurityFunctionality';
import AttachedFile from './AttachedFile';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import OperationalEnvironment from './Componnent/OperationalEnvironment';
import InstallationGuidance from './Componnent/InstallationGuidance';
import FlawRemediation from './Componnent/FlawRemediation';

const { TabPane } = Tabs;

class Evaluation extends Component {
//state
    constructor() {
        super();
        this.state = {
            modalShow: false,
            userInput: '',
            key1: "",
            items: [],
            currentTab: -1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

  //handleClick 
    handleClick(currentTab) {
        this.setState({ currentTab });
    }

    render() {
        
       // render evaluation category 
        let profiles = [
            {
                key: "1",
                name: <> <i class="fa fa-caret-right" aria-hidden="true"></i> &nbsp; Security Functionality </>,
                todo: <>
                    <SecurityFunctionality />
                </>

            },
            {
                key: "2",
                name: <> <i class="fa fa-caret-right" aria-hidden="true"></i> &nbsp; Operational Environment  </>,
                todo: <>
                    <OperationalEnvironment/>
                </>
            },
            {
                key: "3",
                name: <> <i class="fa fa-caret-right" aria-hidden="true"></i> &nbsp; Installation Guidance  </>,
                todo: <>
                      <InstallationGuidance/>
                </>
            },
            {
                key: "4",
                name: <> <i class="fa fa-caret-right" aria-hidden="true"></i> &nbsp; Flaw Remediation  </>,
                todo: <>
                      <FlawRemediation/>
                </>
            },
            {
                key: "6",
                name: <> <i class="fa fa-caret-right" aria-hidden="true"></i> &nbsp; Dev Lifecycle Process  </>,
                todo: <>

                </>
            },
            {
                key: "7",
                name: <> <i class="fa fa-caret-right" aria-hidden="true"></i> &nbsp; Functional Specification </>,
                todo: <>

                </>
            },
            {
                key: "8",
                name: <> <i class="fa fa-caret-right" aria-hidden="true"></i> &nbsp; Integration  </>,
                todo: <>

                </>

            },

        ]

        return (
            <Aux>
                <Row>
                    <>
                        <Col xl={2}>
                            <AttachedFile />
                            <Card >
                                <Card.Header>
                                    <Card.Title as='h5'> Assigned Users
                                        </Card.Title>
                                </Card.Header>
                                <Card.Body >
                                    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                                        <div className="m-r-10 photo-table">
                                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="m-0 d-inline">Silje Larsen</h6>
                                            <p className=""> Consultant CyberSecurity </p>
                                        </div>
                                    </div>
                                    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                                        <div className="m-r-10 photo-table">
                                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="m-0 d-inline">Julie Vad</h6>
                                            <p className=""> Consultant CyberSecurity </p>

                                        </div>
                                    </div>
                                    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                                        <div className="m-r-10 photo-table">
                                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="m-0 d-inline">Storm Hanse</h6>
                                            <p className=""> Consultant CyberSecurity </p>

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card >
                        </Col>

                        <Col xl={10}>
                            <CardFilter />
                            <Card >
                                <Card.Header>
                                    <Card.Title as='h5'> Evaluation
                                        </Card.Title>
                                        <Button
                                    style={{ float: "right" }}                                  
                                    variant="secondary"
                                        >
                                   <i class="fa fa-bell-o m-r-5" /> Check in
                                </Button>
                                </Card.Header>
                                <Card.Body className='border-bottom'>
                                    <Tabs tabPosition="left">
                                        {profiles.map((item, i) => (
                                            <TabPane tab={item.name} key={i}>
                                                {item.todo}
                                            </TabPane>
                                        ))}
                                    </Tabs>
                                </Card.Body>
                            </Card >
                        </Col>
                    </>
                </Row>
                <br />
                
                {/* Button navigation */}
                <div className="mb-4 text-right" >
                   
                    <button className="btn btn-primary shadow-2 mb-4">Complete</button>
                </div>
            </Aux>
        )

    }
}
export default Evaluation;