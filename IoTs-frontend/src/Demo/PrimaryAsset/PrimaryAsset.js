
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
import { Row, Col, Tab, Tabs, Form, Button, Modal, Card, InputGroup, FormControl, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardFilter from "./CardFilter"
import Aux from "../../hoc/_Aux";
import axios from "axios";
import * as Survey from 'survey-react';
import "../LandingPage/app.css";
import Treemenu from './TreeMenu'
import "survey-react/modern.css";
//import all  images (security profile questionnaire)
import multipurpose from "../../assets/images/multipurpose.png";
import cpu from "../../assets/images/cpu.png";
import discrete from "../../assets/images/discrete.png";
import actuator from "../../assets/images/actuator.png";
import network from "../../assets/images/network.png";
import boot from "../../assets/images/bootprocess.png";
import drivers from "../../assets/images/drivers.png";
import programmeconsole from "../../assets/images/programingconsolesecpro.png";
import firmware from "../../assets/images/appsfirmware.png";
import buzzer from "../../assets/images/buzzer.png";
import physical from "../../assets/images/physicalports.png";
import logfil from "../../assets/images/logfil.png";
import usercredential from "../../assets/images/usercredentiel.png";
import sensor from "../../assets/images/sensor.png";

// Survey theme modern
Survey.StylesManager.applyTheme("modern");


class PrimaryAsset extends Component {
    //initial state
    constructor() {
        super();
        this.state = {
            transactional_data: [],
            security_data: [],
            configuration_data: [],
            secondary_data: [],
            modalShow: false,
            userInput: '',
            show: false,
            userInput1: '',
            userInput2: '',
            key1: "",
            limit: 10,
            activePage: 1,
            items: [],
            items1: [],
            items2: [],
            visible: 3,
            error: false
        };
        //loadmore state
        this.loadMore = this.loadMore.bind(this);
        //handle show state
        this.handleShow = this.handleShow.bind(this);
        //handle close state
        this.handleClose = this.handleClose.bind(this);
    }
    //load more function
    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 3 };
        });
    }

    // Begin Onchange function
    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    onChange1(event) {
        this.setState({
            userInput1: event.target.value
        });
    }
    onChange2(event) {
        this.setState({
            userInput2: event.target.value
        });
    }
    // End onchange
    // Begin add primary
    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }
    addTodo1(event) {
        event.preventDefault();
        this.setState({
            userInput1: '',
            items1: [...this.state.items1, this.state.userInput1]
        });
    }
    addTodo2(event) {
        event.preventDefault();
        this.setState({
            userInput2: '',
            items2: [...this.state.items2, this.state.userInput2]
        });
    }
    //End add primary
    //Begin delete primary
    deleteTodo(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }
    deleteTodo1(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items1;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items1: array
        });
    }
    deleteTodo2(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items2;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items2: array
        });
    }
    deleteTransactionaldata(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.transactional_data;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            transactional_data: array
        });
    }
    deleteSecuritydata(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.security_data;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            security_data: array
        });
    }
    deleteMonitoringdata(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.configuration_data;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            configuration_data: array
        });
    }
    // End delete primary

    deleteSecondaryasset(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.secondary_data;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            secondary_data: array
        });
    }

    // Begin add item to deleteTodo.bind(this, item)
    renderTodos() {

        return this.state.items.map((item, j) => {
            return (
                <>
                    <tr className="unread">
                        <td>
                            {/* <h6 className="mb-1"></h6> */}
                            <p style={{ fontSize: "15px", fontWeight: "bold" }} className="m-0">  {item}</p>
                        </td>
                        <td>
                            <i onClick={this.deleteTodo.bind(this, item)} class="fa fa-trash  fa-2x " style={{ cursor: "pointer", color: "#748892" }} aria-hidden="true" />
                        </td>
                    </tr>
                </>

            );
        });
    }
    renderTodos1() {

        return this.state.items1.map((item, j) => {
            return (
                <>
                    <tr className="unread">
                        <td>
                            {/* <h6 className="mb-1"></h6> */}
                            <p style={{ fontSize: "15px", fontWeight: "bold" }} className="m-0">  {item}</p>
                        </td>
                        <td>
                            <i onClick={this.deleteTodo1.bind(this, item)} class="fa fa-trash  fa-2x " style={{ cursor: "pointer", color: "#748892" }} aria-hidden="true" />

                        </td>
                    </tr>
                </>

            );
        });
    }
    renderTodos2() {

        return this.state.items2.map((item, j) => {
            return (
                <>
                    <tr className="unread">
                        <td>
                            <p style={{ fontSize: "15px", fontWeight: "bold" }} className="m-0">  {item}</p>
                        </td>
                        <td>
                            <i onClick={this.deleteTodo2.bind(this, item)} class="fa fa-trash  fa-2x " style={{ cursor: "pointer", color: "#748892" }} aria-hidden="true" />
                        </td>
                    </tr>
                </>


            );
        });
    }
    // End add item to deleteTodo.bind(this, item)

    //Close function Modal
    modalClose = () => this.setState({ modalShow: false });

    // Survey Json 
    json = {
        //clearInvisibleValues: "onHidden",
        //showProgressBar: "top",
        pages: [

            /* {
       
             /******************************************************* Collect ********************************************** */

            {
                name: "page1",
                elements: [

                    {
                        // "title": "Device Features selection",
                        isRequired: true,
                        type: "panel",
                        name: "panel1",

                        questions: [
                            {
                                type: "imagepicker",
                                name: "Device Features selection",
                                // hasSelectAll: true,
                                "imageHeight": 50,
                                "imageWidth": 50,
                                // hasNone: true,
                                defaultValue: ['cpu', 'display', 'buzzer'],
                                showLabel: true,
                                colCount: 4,
                                //defaultValue:'Sensor',
                                // defaultValue: ['sensor'],

                                //readOnly:"true",
                                /* noneText: "None of the above",
                                   validators: [{
                                     type: "answercount",
                                     text: "You should select 0 or 4 images",
                                     minCount: 0,
                                     maxCount: 8
                                   }],*/

                                choices: [
                                    {
                                        value: "multipurpose",
                                        text: "Multipurpose ",
                                        //  score: 1,
                                        imageLink: `${multipurpose}`
                                    }, {
                                        value: "display",
                                        text: "Display",
                                        // score: 1, 
                                        imageLink: `${cpu}`
                                    }, {
                                        value: "cpu",
                                        text: "CPU",
                                        // score: 1,
                                        imageLink: `${cpu}`
                                    }, {
                                        value: "discrete",
                                        text: "Discrete Components",
                                        // score: 1,
                                        imageLink: `${discrete}`
                                    }, {
                                        value: "network",
                                        text: "Network",
                                        // score: 1,
                                        imageLink: `${network}`
                                    }, {
                                        value: "bootprocess",
                                        text: "Boot Process ",
                                        // score: 1,
                                        imageLink: `${boot}`
                                    }, {
                                        value: "divers",
                                        text: "Drivers",
                                        // score: 1,
                                        imageLink: `${drivers}`
                                    }, {
                                        value: "actuator",
                                        text: "Actuator",
                                        // score: 1,
                                        imageLink: `${actuator}`
                                    }, {
                                        value: "programmingconsole",
                                        text: "Programming Console",
                                        // score: 1,
                                        imageLink: `${programmeconsole}`
                                    },
                                    {
                                        value: "appsfirmware",
                                        text: "Apps Firmware ",
                                        // score: 1,
                                        imageLink: `${firmware}`
                                    }, {
                                        value: "buzzer",
                                        text: "Buzzer",
                                        // score: 1,
                                        imageLink: `${buzzer}`
                                    }, {
                                        value: "physical",
                                        text: "Physical Ports & Interfaces",
                                        // score: 1,
                                        imageLink: `${physical}`
                                    }, {
                                        value: "logfiles",
                                        text: "Logs Files",

                                        //  score: 1,
                                        imageLink: `${logfil}`
                                    }, /*{
                                          value: "configurationdata",
                                          text:"Configuration Data",
                                          //score: 1,
                                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/configurationdata.png`  
                                        },*/ {
                                        value: "usercredentials",
                                        text: "User Credentials",
                                        //  score: 1,
                                        imageLink: `${usercredential}`
                                    }, /*{
                                          value: "authentication",
                                          text:"Authentication Data",
                                          // score: 1,
                                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/authenticationdata.png`  
                                        }, {
                                          value: "transactiondata",
                                          text:"Transaction Data(commands, requests)",
                                          // score: 1,
                                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/transaction.png`  
                                        }, {
                                          value: "accesscontrol",
                                          text:"Access Control Data",
                                          // score: 1,
                                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/accesscontrol.png`  
                                        }, */{
                                        value: "sensor",
                                        text: "Sensor",
                                        // score: 1,
                                        imageLink: `${sensor}`
                                    },
                                ],
                                multiSelect: true
                            },
                            {
                                type: "dropdown",
                                name: "sensor",
                                width: "200px",
                                //"description": "(You can select multiple options here, related to your complaint body part selected )",
                                //"descriptionLocation": "underTitle",
                                defaultValue: '0',
                                startWithNewLine: "false",
                                title: "Sensor",
                                choices: [

                                    { value: 0, text: "Temperature" },
                                    { value: 1, text: "Machine vision" },
                                    { value: 2, text: "Acceleration/Tilt" },
                                    { value: 3, text: "Electric/Magnetic" },
                                    { value: 4, text: "Leaks/Levels" },
                                    { value: 5, text: "Force/Pressure/Strain/Tourque" },
                                    { value: 6, text: "Flow" },
                                    { value: 7, text: "Chemical" },
                                    { value: 8, text: "Acoustic/Sound/Vibration" },
                                    { value: 9, text: "Humidity/Moisture" },
                                    { value: 10, text: "Motion/Velosity" },
                                    { value: 11, text: "Position/Presence/Proximity" },
                                    { value: 12, text: "Gas" },

                                ]
                            }],
                    }]
            },




            /******************** First question of primary assets************* */

            {

                name: "page2",
                elements: [{
                    // "title": "Device Features selection",
                    isRequired: true,
                    type: "panel",
                    name: "panel1",


                    elements: [{
                        type: "checkbox",
                        name: "processed",
                        "renderAs": "prettycheckbox",
                        title: "What kind of data is your IoT Device/Product processing?",
                        isRequired: true,
                        hasNone: true,
                        defaultValue: ['1'],
                        //"startWithNewLine": false,

                        //colCount: 1,
                        // "choicesOrder": "asc",
                        choices: [

                            {
                                value: "0",
                                text: "Move/Impact"
                            },
                            {
                                value: "1",
                                text: "Location",
                            },
                            {
                                value: "2",
                                text: "Luminosity",
                            },
                            {
                                value: "3",
                                text: "Temperature",
                            },
                            {
                                value: "4",
                                text: "Weight",
                            },
                            {
                                value: "5",
                                text: "Depth",
                            },

                            {
                                value: "6",
                                text: "Pressure",
                            },
                            {
                                value: "7",
                                text: "Personal Data",
                            },
                            {
                                value: "8",
                                text: "Banking/Financial Data/Security Keys",
                            },
                            {
                                value: "9",
                                text: "Configuration Data",
                            },
                            {
                                value: "others",
                                text: "Others",
                            },

                        ]
                    },

                    {
                        type: "comment",
                        name: "otherwise",
                        visibleIf: " {processed} contains ['others'] ",
                        title: "Please specify",

                    },


                    ]
                }
                ]
            },

            /********************* Second question ************************* */




            {

                name: "page3",

                elements: [{

                    isRequired: true,
                    type: "panel",
                    name: "panel2",


                    elements: [{

                        type: "checkbox",
                        name: "store",
                        defaultValue: ['30'],
                        "renderAs": "prettycheckbox",
                        //"renderAs": "checkbox",
                        title: "What kind of data is your IoT Device/Product storing?",
                        isRequired: true,
                        "visibleIf": "{otherwise} notempty or {processed} notempty  ",
                        "colCount": 1,
                        "hasNone": true,
                        choices: [

                            {
                                "value": "otherwise",
                                "visibleIf": "{otherwise} notempty",
                                "text": "Others: {otherwise}"
                            },

                            {
                                value: "21",
                                text: "Move/Impact"
                            },
                            {
                                value: "22",
                                text: "Location",
                            },
                            {
                                value: "23",
                                text: "Luminosity",
                            },
                            {
                                value: "24",
                                text: "Temperature",
                            },
                            {
                                value: "25",
                                text: "Weight",
                            },
                            {
                                value: "26",
                                text: "Depth",
                            },

                            {
                                value: "27",
                                text: "Pressure",
                            },
                            {
                                value: "28",
                                text: "Personal Data",
                            },
                            {
                                value: "29",
                                text: "Banking/Financial Data/Security Keys",
                            },
                            {
                                value: "30",
                                text: "Configuration Data",
                            },
                            {
                                value: "others1",
                                text: "Others",
                            },

                        ]
                    },
                    {
                        type: "comment",
                        name: "stored",
                        visibleIf: " {store} contains['others1'] ",
                        title: "Please specify",

                    },



                    ]
                }
                ]
            },


            /********************************************* third question transported ******************************************** */


            {
                name: "page4",
                elements: [{

                    isRequired: true,
                    type: "panel",
                    name: "panel3",


                    elements: [{

                        type: "checkbox",
                        //"renderAs": "checkbox",
                        "renderAs": "prettycheckbox",
                        name: "transport",
                        defaultValue: ['13'],
                        title: "What kind of data is your IoT Device/Product storing?",
                        isRequired: true,
                        "visibleIf": "{stored} notempty or {store} notempty or {otherwise} notempty or {processed} notempty ",
                        "colCount": 1,
                        "hasNone": true,
                        choices: [
                            {
                                "value": "otherwise",
                                "visibleIf": "{otherwise} notempty",
                                "text": "Others: {otherwise}"
                            },
                            {
                                "value": "stored",
                                "visibleIf": "{stored} notempty",
                                "text": "Others: {stored}"
                            },

                            {
                                value: "10",
                                text: "Move/Impact"
                            },
                            {
                                value: "11",
                                text: "Location",
                            },
                            {
                                value: "12",
                                text: "Luminosity",
                            },
                            {
                                value: "13",
                                text: "Temperature",
                            },
                            {
                                value: "14",
                                text: "Weight",
                            },
                            {
                                value: "15",
                                text: "Depth",
                            },

                            {
                                value: "16",
                                text: "Pressure",
                            },
                            {
                                value: "17",
                                text: "Personal Data",
                            },
                            {
                                value: "18",
                                text: "Banking/Financial Data/Security Keys",
                            },
                            {
                                value: "19",
                                text: "Configuration Data",
                            },
                            {
                                value: "others2",
                                text: "Others",
                            },

                        ]
                    },
                    {
                        type: "comment",
                        name: "transported",
                        visibleIf: " {transport} contains 'others2' ",
                        title: "Please specify"

                    }

                    ]
                }
                ]
            },


            /******************************************** forth Question**************************************** */



            {
                name: "page5",
                elements: [{

                    isRequired: true,
                    type: "panel",
                    name: "panel4",


                    elements: [{

                        type: "checkbox",
                        name: "active",
                        defaultValue: ['30'],
                        "renderAs": "prettycheckbox",
                        title: "What kind of data is exchanged during device activation?",
                        isRequired: true,

                        "colCount": 1,
                        "hasNone": true,
                        choices: [


                            {
                                value: "30",
                                text: "Personal Data",
                            },
                            {
                                value: "31",
                                text: "Banking/Financial Data",
                            },
                            {
                                value: "32",
                                text: "Configuration Data/ Security Keys",
                            },
                            {
                                value: "33",
                                text: "I don't know",
                            },
                            {
                                value: "others3",
                                text: "Others",
                            },

                        ]
                    },
                    {
                        type: "comment",
                        name: "actived",
                        visibleIf: "{active} contains'others3' ",
                        title: "Please specify",

                    },

                    ]
                }
                ]
            },


            /********************************************* End of json *********************************** */
        ],
        "showQuestionNumbers": "off",
        completedHtml: "<p><h4>Redirect...............</h4></p>"
    };
    //handleClose function Modal
    handleClose() {
        this.setState({ show: false });
    }
    //handleshow function Modal
    handleShow() {
        this.setState({ show: true });
    }
    //render survey 
    model = new Survey.Model(this.json);

    componentDidMount() {
        // Transactional data 
        let one =
            '/api/primaryasset/transactional-data';
        //Security Data
        let two =
            '/api/primaryasset/security-data';
        //Monitoring data
        let three =
            '/api/primaryasset/configuration-data';
        //secondary asset data
        let fourth =
            '/api/primaryasset/others'

        const transactional_data = axios.get(one);
        const security_data = axios.get(two);
        const configuration_data = axios.get(three);
        const secondary_data = axios.get(fourth);

        axios
            .all([transactional_data, security_data, configuration_data, secondary_data])
            .then(
                axios.spread((...responses) => {
                    const transactional_data = responses[0].data;
                    const security_data = responses[1].data;
                    const configuration_data = responses[2].data;
                    const secondary_data = responses[3].data;
                    this.setState({ transactional_data, security_data, configuration_data, secondary_data });
                    // use/access the results
                    //console.log(responseOne, responseTwo, responesThree);
                })
            )
            .catch(errors => {
                // react on errors.
                console.error(errors);
            });
    }

    render() {
        // render threat lists
        const { transactional_data, security_data, configuration_data, secondary_data } = this.state;

        return (
            <Aux>

                <Row>
                    {/* Begin Modal */}
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
                            <Link to="/impact">
                                <Button variant="primary" >
                                    Next Step
                           </Button>
                            </Link>
                        </Modal.Footer>
                    </Modal>
                    {/* End Modal */}

                    <Tab.Container defaultActiveKey="0" >
                        <>
                            {/* Security Profile Response Demo */}
                            <Col xl={3}>
                                <Card >
                                    <Card.Body>
                                        <Treemenu />
                                    </Card.Body>
                                </Card>
                                <Card isOption className='Recent-Users'>
                                    <Card.Header>
                                        <Card.Title as='h5'> Demo </Card.Title>
                                    </Card.Header>
                                    <Card.Body style={{ overflowY: "scroll", height: "700px" }} >
                                        <Survey.Survey
                                            model={this.model}
                                            isSinglePage="true"
                                            id="survey"
                                            mode="display"
                                            onAfterRenderQuestion={this.onAfterRenderQuestion}
                                            onAfterRenderPanel={this.onAfterRenderPanel}
                                            showNavigationButtons={this.showNavigationButtons}
                                            onTextMarkdown={this.onTextMarkdown}
                                            //onComplete={sendDataToServer}
                                            onCurrentPageChanged={this.doOnCurrentPageChanged}
                                            sendResultOnPageNext={true}
                                            showCompletedPage={this.showCompletedPage}
                                            onPartialSend={this.onSurveyPartialSend}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                            {/* Begin of Primary Asset */}
                            <Col xl={9}>
                                <CardFilter />
                                <Card >
                                    <Card.Header>
                                        <Card.Title as='h5'> Primary Asset
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body >
                                        <Row>
                                            {/* Add New Primary Asset  */}
                                            <Col>
                                                <h5 className="">Transactional Data</h5>
                                                <br />
                                                <InputGroup className="">
                                                    <Form.Control as="select" value={this.state.userInput} onChange={this.onChange.bind(this)}>
                                                        <option>Choose... </option>
                                                        {transactional_data.map(item => (
                                                            <>
                                                                <option>  {item.THREAT_DESCP}   </option>
                                                            </>
                                                        ))}
                                                    </Form.Control>
                                                    <InputGroup.Append>
                                                        <button onClick={this.addTodo.bind(this)} class="btn btn-icon btn-secondary m-0  " type="button"><i class="fa fa-plus" /> </button>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <h5 className="">Security Data</h5>
                                                <br />
                                                <InputGroup className="">
                                                    <Form.Control as="select" value={this.state.userInput1} onChange={this.onChange1.bind(this)}>
                                                        <option>Choose... </option>
                                                        {security_data.map(item => (
                                                            <>

                                                                <option>  {item.THREAT_DESCP}   </option>

                                                            </>
                                                        ))}
                                                    </Form.Control>
                                                    <InputGroup.Append>
                                                        <button onClick={this.addTodo1.bind(this)} class=" btn btn-icon btn-secondary m-0 " type="button"><i class="fa fa-plus" /> </button>
                                                    </InputGroup.Append>
                                                </InputGroup>

                                            </Col>
                                            <Col>
                                                <h5 className="">Configuaration & Monitoring Data</h5>
                                                <br />
                                                <InputGroup className="">
                                                    <FormControl
                                                        as="select" value={this.state.userInput2} onChange={this.onChange2.bind(this)}>
                                                        <option>Choose... </option>
                                                        {configuration_data.map(item => (
                                                            <>
                                                                <option>  {item.THREAT_DESCP}   </option>
                                                            </>
                                                        ))}
                                                    </FormControl>
                                                    <InputGroup.Append>
                                                        <button type="button" onClick={this.addTodo2.bind(this)} class="btn btn-icon btn-secondary m-0 " ><i class="fa fa-plus" /> </button>
                                                    </InputGroup.Append>
                                                </InputGroup>

                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    {/* Render All primary asset added */}
                                    <Card.Body className='Recent-Users' >
                                        <Tabs variant="pills" defaultActiveKey="transactionaldata">
                                            <Tab eventKey="transactionaldata" title="Transactional Data">
                                                <Table borderless={true} responsive hover>
                                                    <tbody>

                                                        {transactional_data.map((item, i) =>
                                                            <tr className="unread">
                                                                <td>
                                                                    <p style={{ fontSize: "15px", fontWeight: "bold" }} className="m-0">{item.THREAT_DESCP}</p>
                                                                </td>
                                                                <td>
                                                                    <i onClick={this.deleteTransactionaldata.bind(this, item)} class="fa fa-trash  fa-2x " style={{ cursor: "pointer", color: "#748892" }} aria-hidden="true" />
                                                                </td>
                                                            </tr>)}
                                                        {this.renderTodos()}
                                                    </tbody>
                                                </Table>
                                            </Tab>
                                            <Tab eventKey="securitydata" title="Security Data">
                                                <Table responsive hover>
                                                    <tbody>
                                                        {security_data.map((item, i) =>
                                                            <tr className="unread">
                                                                <td>
                                                                    <p style={{ fontSize: "15px", fontWeight: "bold" }} className="m-0">{item.THREAT_DESCP}</p>
                                                                </td>
                                                                <td>
                                                                    <i onClick={this.deleteSecuritydata.bind(this, item)} class="fa fa-trash  fa-2x " style={{ cursor: "pointer", color: "#748892" }} aria-hidden="true" />

                                                                </td>
                                                            </tr>)}
                                                        {this.renderTodos1()}
                                                    </tbody>
                                                </Table>
                                            </Tab>
                                            <Tab eventKey="configurationdata" title="Configuartion & Monitoring Data">
                                                <Table responsive hover>
                                                    <tbody>
                                                        {configuration_data.map((item, i) =>
                                                            <tr className="unread">
                                                                <td>
                                                                    <p style={{ fontSize: "15px", fontWeight: "bold" }} className="m-0">{item.THREAT_DESCP}</p>
                                                                </td>
                                                                <td>
                                                                    <i onClick={this.deleteMonitoringdata.bind(this, item)} class="fa fa-trash  fa-2x " style={{ cursor: "pointer", color: "#748892" }} aria-hidden="true" />
                                                                </td>
                                                            </tr>)}
                                                        {this.renderTodos2()}
                                                    </tbody>
                                                </Table>
                                            </Tab>
                                        </Tabs>
                                    </Card.Body>
                                </Card >
                                {/* Render Default Secondary Asset */}
                                <Card className='Recent-Users'>
                                    <Card.Header>
                                        <Card.Title as='h5'> Default Secondary Asset
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body  >
                                        <Table responsive hover>
                                            <tbody>
                                                {/* Map all secondary asset list */}
                                                {secondary_data.slice(0, this.state.visible).map((item, i) =>
                                                    <tr className="unread">
                                                        <td>
                                                            <p style={{ fontSize: "15px", fontWeight: "bold" }} className="m-0">{item.THREAT_DESCP}</p>
                                                        </td>
                                                        <td>
                                                            <i onClick={this.deleteSecondaryasset.bind(this, item)} class="fa fa-trash  fa-2x " style={{ cursor: "pointer", color: "#748892" }} aria-hidden="true" />
                                                        </td>
                                                    </tr>)}
                                            </tbody>
                                        </Table>
                                        {this.state.visible < this.state.secondary_data.length &&
                                            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                                        }
                                    </Card.Body >
                                </Card >
                            </Col>
                        </>
                    </Tab.Container >
                </Row>
                <br />
                {/* Begin Button Navigation */}
                <div className="mb-4 text-right" >
                    <Link to="/security-profile-questionnaire"> <button className="btn btn-secondary shadow-2 mb-4">Previous Step</button> </Link>
                    <button onClick={this.handleShow} className="btn btn-primary shadow-2 mb-4">Save Changes</button>
                </div>
                {/* End Button Navigation */}
            </Aux>
        )

    }
}

export default PrimaryAsset;