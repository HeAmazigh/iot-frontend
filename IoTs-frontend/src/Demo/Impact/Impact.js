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
//impact
import React, { Component } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Aux from "../../hoc/_Aux";
import "react-simple-tree-menu/dist/main.css";
import * as Survey from 'survey-react';
import "../LandingPage/app.css";
import CardFilter from "./CardFilter"
import Treemenu from './TreeMenu'
import 'antd/dist/antd.css'
import "survey-react/modern.css";

//Import survey theme "moderne"

Survey.StylesManager.applyTheme("modern");
// tabpane declaration
const { TabPane } = Tabs;

class Impact extends Component {
    // initial state
    constructor() {
        super();
        this.state = {
            modalShow: false,
            userInput: '',
            show: false,
            key1: "",
            threat: [],
            currentTab: -1,
        };
        //handleclick state
        this.handleClick = this.handleClick.bind(this);
        // Survey Json data   
        this.json1 = {
            elements: [
                {
                    type: "matrix",
                    startWithNewLine: false,
                    name: "test2",
                    titleLocation: "hidden",
                    title: "whas it long ?",
                    defaultValue: {
                        Privacy: "4",
                        Confidentiality: "4",
                        Integrity: "4",
                        Availability: "4",
                        Authenticity: "4",
                        "Reputation & Financial Loss": "4",
                        Safety: "4",
                        Scale: "4"
                    },
                    columns: [
                        {
                            value: 1,
                            score: 1,
                            text: "Severe",
                        },
                        {
                            value: 2,
                            score: 2,
                            text: "Moderate",
                        },
                        {
                            value: 3,
                            score: 3,
                            text: "Minor",
                        },

                        {
                            value: 4,
                            score: 4,
                            text: "Low",

                        },
                    ],
                    rows: ["Privacy", "Confidentiality", "Integrity", "Availability", "Authenticity", "Safety", "Reputation & Financial Loss", "Scale"]
                }
            ],

            /********************************************* End of json *********************************** */

            "showQuestionNumbers": "off",
            completedHtml: "  <br/>    <h2 style=' color: #9A9A9A !important; ' class='text-center'> You&apos;re done!</h2>",


        };
        //handleshow state
        this.handleShow = this.handleShow.bind(this);
        //handleclose state
        this.handleClose = this.handleClose.bind(this);
    }

    // handle click function(list item)
    handleClick(currentTab) {
        this.setState({ currentTab });
    }
    //handle close function(modal)
    handleClose() {
        this.setState({ show: false });
    }
    //handle show function(modal)
    handleShow() {
        this.setState({ show: true });
    }
    //axios for API threat 
    componentDidMount() {
        axios.get('/api/threat')
            .then(res => {
                const threat = res.data;
                this.setState({ threat });
            })
    }


    render() {
        //render the survey json
        /// var model = new Survey.Model(this.state.json1);
        // render all threat
        const { threat } = this.state;

     

        return (
            <Aux>
                <Row>
                    <>

                        {/* Begin modal  */}
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={this.state.show}
                            onHide={this.handleClose}>
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
                                <Link to="/likelihood">
                                    <Button variant="primary" >
                                        Next Step
                               </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>
                        {/* End modal */}
                        {/* Card treeMenu */}
                        <Col xl={2}>

                            <Card>
                                <Card.Body>
                                    <Treemenu />
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* Card IMpact with list of threat */}
                        <Col xl={10}>
                            <CardFilter />
                            <Card >
                                <Card.Header>
                                    <Card.Title as='h5'>
                                        Impact
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className='border-bottom'>
                                    <Tabs tabPosition="left">
                                        {threat.map((item, i) => (
                                            <>
                                                <TabPane tab={<>{item.THREAT_CATA} {item.THREAT_DESCP} </>} key={i}>
                                                    <Survey.Survey
                                                        json={this.json1}
                                                        id={i}
                                                    />
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

                {/* Begin Button Navigation  */}
                <div className="mb-4 text-right" >
                    <Link to="/primary-asset"> <button className="btn btn-secondary shadow-2 mb-4">Previous Step</button> </Link>
                    <button onClick={this.handleShow} className="btn btn-primary shadow-2 mb-4">Save Changes</button>
                </div>
                {/* Begin Button Navigation  */}

            </Aux>
        )

    }
}
export default Impact;