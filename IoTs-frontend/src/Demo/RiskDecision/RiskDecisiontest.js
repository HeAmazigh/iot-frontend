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

import React, { Component } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Tabs} from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Aux from "../../hoc/_Aux";

import "react-simple-tree-menu/dist/main.css";
import "../LandingPage/app.css";
import CardFilter from "./CardFilter"
import Treemenu from './TreeMenu'
import 'antd/dist/antd.css'
import AddSecurityGoals from './AddSecurityGoals';


const { TabPane } = Tabs;

class RiskDecisiontest extends Component {

    constructor() {
        super();
        this.state = {
            threat: [],
            modalShow: false,
            show: false,
            key1: "",
            currentTab: -1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    
    modalClose = () => this.setState({ modalShow: false });

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClick(currentTab) {
        this.setState({ currentTab });
    }

    componentDidMount() {

        axios.get('/api/threat')
            .then(res => {
                const threat = res.data;
                this.setState({ threat });
            })
    }


    render() {
        const {  threat } = this.state;

        return (
            <Aux>
                <Row>
                    <>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={this.state.show} onHide={this.handleClose}>
                            
                            <Modal.Body>
                                <div style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "20px" }}>
                                    <i class="fa fa-check-circle   text-success fa-5x" aria-hidden="true"></i>
                                </div>
                                <h5 style={{ textAlign: "center" }}>  Great, we have done all the operations! </h5>
                                <h4 style={{ textAlign: "center", padding: "20px" }}> Do you want to continue? </h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                               </Button>
                                <Link to="/risk-decision"><Button variant="primary" >
                                    Next Step
                              </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>
                        <Col xl={2}>
                            <Card>
                                <Card.Body>
                                    <Treemenu />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={10}>
                            <CardFilter />
                            <Card >
                                <Card.Header>
                                    <Card.Title as='h5'>  Security Goals
                                        </Card.Title>
                                </Card.Header>
                                <Card.Body className='border-bottom'>

                                    <Tabs tabPosition="left">
                                        {threat.map((item, i) => (
                                            <>
                                                <TabPane tab={<>{item.THREAT_CATA} {item.THREAT_DESCP} </>} key={i}>

                                                    <AddSecurityGoals key={i} />

                                                </TabPane>
                                            </>
                                        ))}
                                    </Tabs>
                                </Card.Body>
                            </Card >
                        </Col>
                    </>
                </Row>
                <br />
                <div className="mb-4 text-right" >
                    <Link to="/likelihood"> <button className="btn btn-secondary shadow-2 mb-4">Previous Step</button> </Link>
                    <button onClick={this.handleShow} className="btn btn-primary shadow-2 mb-4">Save Changes</button>
                </div>

            </Aux>
        )

    }
}
export default RiskDecisiontest;