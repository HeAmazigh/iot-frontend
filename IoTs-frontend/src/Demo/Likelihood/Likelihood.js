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
//likelihood secprof
import React, { Component } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import axios from 'axios'
import "react-simple-tree-menu/dist/main.css";
import * as Survey from 'survey-react';
import "../LandingPage/app.css";
import CardFilter from "./CardFilter"
import Treemenu from './TreeMenu'
import 'antd/dist/antd.css'
import "survey-react/modern.css";

// survey Modern theme
Survey.StylesManager.applyTheme("modern");
//tabpane decalaration 
const { TabPane } = Tabs;

class Likelihood extends Component {
    //initial state
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
        this.handleClick = this.handleClick.bind(this);

        this.json1 = {

            elements: [

                {
                    "type": "paneldynamic",
                    "name": "relatives1",
                    "title": "Please enter all scenario informations",
                    "renderMode": "progressTop",
                    "templateElements": [
                        {
                            //"titleLocation": "hidden",
                            type: "text",
                            placeHolder: "identify...",
                            title: "Scenario informations",
                            name: "identify",
                        },

                        {
                            type: "dropdown",
                            //"titleLocation": "hidden",
                            "startWithNewLine": false,
                            otherPlaceHolder: "1",
                            width: "150px",
                            name: "probability",
                            title: "probability",
                            defaultValue: '1',
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Significant",

                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "Very High",

                                },

                                {
                                    value: 4,
                                    score: 4,
                                    text: "Almost Certain",

                                },

                            ]
                        },
                        {
                            type: "dropdown",
                            //"titleLocation": "bottom",
                            width: "150px",
                            "startWithNewLine": false,
                            name: "thechnical",
                            title: "thechnical difficulty",
                            defaultValue: '1',
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Moderate",
                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "High",
                                },
                                {
                                    value: 4,
                                    score: 4,
                                    text: "Very High",
                                },
                            ]
                        },
                        {
                            "titleLocation": "hidden",
                            type: "text",
                            placeHolder: "access...",
                            title: "Access",
                            name: "access",

                        },

                        {
                            type: "dropdown",
                            "titleLocation": "hidden",
                            width: "150px",
                            "startWithNewLine": false,
                            name: "probability1",
                            defaultValue: '1',
                            title: "qst1",
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Significant",

                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "Very High",

                                },

                                {
                                    value: 4,
                                    score: 4,
                                    text: "Almost Certain",

                                },

                            ]
                        },
                        {
                            type: "dropdown",
                            "titleLocation": "hidden",
                            width: "150px",
                            "startWithNewLine": false,
                            name: "thechnical1",
                            title: "qst1",
                            defaultValue: '1',
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Moderate",
                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "High",
                                },
                                {
                                    value: 4,
                                    score: 4,
                                    text: "Very High",
                                },

                            ]
                        },
                        {
                            "titleLocation": "hidden",
                            placeHolder: "discover...",
                            type: "text",
                            title: "Discover",
                            name: "discover",

                        },

                        {
                            type: "dropdown",
                            "titleLocation": "hidden",
                            width: "150px",
                            "startWithNewLine": false,
                            name: "probability2",
                            title: "qst1",
                            defaultValue: '1',
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Significant",

                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "Very High",

                                },

                                {
                                    value: 4,
                                    score: 4,
                                    text: "Almost Certain",

                                },

                            ]
                        },
                        {
                            type: "dropdown",
                            "titleLocation": "hidden",
                            width: "150px",
                            "startWithNewLine": false,
                            name: "thechnical2",
                            title: "qst1",
                            defaultValue: '1',
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Moderate",
                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "High",
                                },
                                {
                                    value: 4,
                                    score: 4,
                                    text: "Very High",
                                },

                            ]
                        },
                        {
                            "titleLocation": "hidden",
                            type: "text",
                            placeHolder: "exploit...",
                            title: "Exploit",
                            name: "exploit",

                        },

                        {
                            type: "dropdown",
                            "titleLocation": "hidden",
                            width: "150px",
                            "startWithNewLine": false,
                            name: "probability3",
                            title: "qst1",
                            defaultValue: '1',
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Significant",

                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "Very High",

                                },

                                {
                                    value: 4,
                                    score: 4,
                                    text: "Almost Certain",

                                },]
                        },
                        {
                            type: "dropdown",
                            "titleLocation": "hidden",
                            width: "150px",
                            "startWithNewLine": false,
                            name: "thechnical3",
                            title: "qst1",
                            defaultValue: '1',
                            choices: [
                                {
                                    value: 1,
                                    score: 1,
                                    text: "Low",

                                },
                                {
                                    value: 2,
                                    score: 2,
                                    text: "Moderate",
                                },
                                {
                                    value: 3,
                                    score: 3,
                                    text: "High",
                                },
                                {
                                    value: 4,
                                    score: 4,
                                    text: "Very High",
                                },
                            ]
                        }
                    ],
                    "panelCount": 0,
                    "panelAddText": "Add Scenario",
                    "panelRemoveText": "Remove"
                },
            ],
            /********************************************* End of json *********************************** */
            "showQuestionNumbers": "off",
            /********************************************* End of json *********************************** */
            completedHtml: "  <br/>    <h2 style=' color: #9A9A9A !important; ' class='text-center'> You&apos;re done!</h2>",
        };
        //handle show state
        this.handleShow = this.handleShow.bind(this);
        //handle close state
        this.handleClose = this.handleClose.bind(this);
    }

    // handle click item list function (list tab)
    handleClick(currentTab) {
        this.setState({ currentTab });
    }
    // handle close function (modal)
    handleClose() {
        this.setState({ show: false });
    }
    // handle show function (modal)
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
        // render Survey Json data
       // var model = new Survey.Model(this.state.json1);
        //render list of threat     
        const { threat } = this.state;

        return (
            <Aux>
                <Row>
                    <>
                        {/* Begin Modal  */}
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
                                <Link to="/security-goals">
                                    <Button variant="primary" >
                                        Next Step
                                    </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>
                        {/* End modal */}
                        {/* TreeMenu component */}
                        <Col xl={2}>
                            <Card>
                                <Card.Body>
                                    <Treemenu />
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* Liklihood card  */}
                        <Col xl={10}>
                            <CardFilter />
                            <Card >
                                <Card.Header>
                                    <Card.Title as='h5'>
                                        Likelihood
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className='border-bottom'>
                                    {/* Map all threat list */}
                                    <Tabs tabPosition="left">
                                    {threat.map((item, i) => (
                                            <>
                                                <TabPane tab={ <>{item.THREAT_CATA} {item.THREAT_DESCP} </>} key={i}>
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
                {/* Begin Button navigation */}
                <div className="mb-4 text-right" >
                    <Link to="/impact"> <button className="btn btn-secondary shadow-2 mb-4">Previous Step</button> </Link>
                    <button onClick={this.handleShow} className="btn btn-primary shadow-2 mb-4">Save Changes</button>
                </div>
                {/* End  Button navigation */}
            </Aux>
        )

    }
}
export default Likelihood;