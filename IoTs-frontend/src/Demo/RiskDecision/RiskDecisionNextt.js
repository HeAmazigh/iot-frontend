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
//security goal
import React, { Component } from 'react';
import { Row, Col, Card, Form, Modal, Button, Table } from 'react-bootstrap';
import { Tabs } from 'antd';
// import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import { Link } from 'react-router-dom';
import DEMO from "../../store/constant";
import Aux from "../../hoc/_Aux";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import "react-simple-tree-menu/dist/main.css";
import * as Survey from 'survey-react';
import "../LandingPage/app.css";
import CardFilter from "./CardFilter"
import Treemenu from './TreeMenunext'
import 'antd/dist/antd.css'
//import "survey-react/survey.css";
import "survey-react/modern.css";

//Survey.StylesManager.applyTheme("modern");
Survey.StylesManager.applyTheme("modern");
const { TabPane } = Tabs;





class RiskDecisionNextt extends Component {

    constructor() {
        super();
        this.state = {
            modalShow: false,
            show: false,
            key1: "",
            items: [],

            currentTab: -1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }


    /****************** RenderToDo************************* */

    modalClose = () => this.setState({ modalShow: false });

    handleClick(currentTab) {
        this.setState({ currentTab });
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

       //var model = new Survey.Model(this.state.json1);


        const products1 = [
            {
                id: 'T07',
                threat: 'Compromise of personal data/sensitive info/ confidential info etc.(Processed)',
                asset: 'Configuration and monitoring Data',
                vul: <> <ul> <li>Inadequate classification of information </li> <li>Disposal of storage media without deleting data </li> <li>
                    Lack of the use of cryptography </li> </ul> </>,
                impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2 f-14 f-w-400 ">Minor</label> </>,
                likelihood: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Unlikely</label> </>,
                sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

            },

        ];
        const products2 = [
            {
                id: 'T02',
                threat: 'Disclosure of Data (Transported)',
                asset: 'Transactional Data',
                vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                    Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
                likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
                sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

            },
        ];

        const products3 = [
            {
                id: 'T03',
                threat: 'Manipulation or Injection of Data',
                asset: 'Transactional Data',
                vul: <> <ul > <li>
                    Lack of systems for identification and authentication </li> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                        Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
                likelihood: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Very Likely</label> </>,
                sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

            },
        ];
        const products4 = [
            {
                id: 'T02',
                threat: 'Disclosure of Data (Transported)',
                asset: 'Transactional Data',
                vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                    Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
                likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
                sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

            },
        ];
        const products5 = [
            {
                id: 'T01',
                threat: 'Replay of data(Transported)',
                asset: 'Transactional Data',
                vul: <> <ul > <li>
                    Lack of systems for identification and authentication </li>  <li>
                        Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2 f-14 f-w-400 ">Minor</label> </>,
                likelihood: <> <label style={{ background: "#fc3e28" }} className="label theme-bg2 text-white f-14 f-w-400 ">Almost Certain</label> </>,
                sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

            },
        ];
        const products6 = [
            {
                id: 'T07',
                threat: 'Compromise of personal data/sensitive info/ confidential info etc.(Processed)',
                asset: 'Security Data',
                vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                    Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Moderate</label> </>,
                likelihood: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Very Likely</label> </>,
                sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

            },
        ];
        const products7 = [
            {
                id: 'T02',
                threat: 'Disclosure of Data (Transported)',
                asset: 'Transactional Data',
                vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                    Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Minor</label> </>,
                likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
                sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

            },
        ];
        const products8 = [
            {
                id: 'T12',
                threat: 'Regulatory Sanctions(Processed)',
                asset: 'Security of Data',
                vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                    Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
                likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
                sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

            },
        ];
        const products9 = [
            {
                id: 'T02',
                threat: 'Disclosure of Data (Transported)',
                asset: 'Configuration and monitoring Data',
                vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                    Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Minor</label> </>,
                likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Unlikely</label> </>,
                sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

            },
        ];
        const products10 = [
            {
                id: 'T04',
                threat: 'Deletion of data (Stored, Processed, Transported)',
                asset: 'Transactional Data',
                vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                    Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
                impact: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Moderate</label> </>,
                likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
                sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

            },
        ];
        const productexpand1 = [

            {
                securitygoals: "Confidentiality of Data (DIU)",
                info:
                    <>
                        <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                        <Modal
                            dialogClassName="modal-80w"
                            {...this.props}
                            id="1"
                            show={this.state.modalShow}
                            onHide={this.modalClose}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                    <b>Security Goal : </b>Confidentiality of Data (DIU)
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Table bordered striped responsive hover /*variant="secondary"*/  >
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.7 </dt>
                                            </td>
                                            <td>
                                                <dt>  Data encryption during processing.
</dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.8</dt>
                                            </td>
                                            <td>
                                                <dt>  Code obfuscation
 </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.9</dt>
                                            </td>
                                            <td>
                                                <dt> Generic Error messages </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.DocumentationReview</dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.FunctionalSecurityTesting </dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> VA.VulnerabilityScanning </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>

                                    </tbody>
                                </Table>

                                {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.modalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </>,

                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Security audit & Monitoring",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        {...this.props}
                        id="2"
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Security audit & Monitoring
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.63 </dt>
                                        </td>
                                        <td>
                                            <dt> Detection intrusion
 </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.64</dt>
                                        </td>
                                        <td>
                                            <dt> Detection of replay  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.65</dt>
                                        </td>
                                        <td>
                                            <dt>  Logging sensitive events (user authentication, management of accounts and access rights, modifications to security rules, and the functioning of the system </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.66</dt>
                                        </td>
                                        <td>
                                            <dt>  Storage of the audit log  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Secure Data Management",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        {...this.props}
                        id="3"
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Secure Data Management
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.68 </dt>
                                        </td>
                                        <td>
                                            <dt> Integrity and confidentiality of security data </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.69</dt>
                                        </td>
                                        <td>
                                            <dt>  Administration of security features and data  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>


                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Data protection and compliance",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        {...this.props}
                        id="4"
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Data protection and compliance
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF90 </dt>
                                        </td>
                                        <td>
                                            <dt>  Personal data must be collected and processed fairly and lawfully</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.90</dt>
                                        </td>
                                        <td>
                                            <dt>  Make sure that personal data is used for the specified purposes for which they were collected </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.90</dt>
                                        </td>
                                        <td>
                                            <dt>  IoT stakeholders must be compliant with the EU General Data Protection Regulation (GDPR) </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.90</dt>
                                        </td>
                                        <td>
                                            <dt> Users of IoT products and services must be able to exercise their rights to information, access, erasure, rectification, data portability, restriction of processing, objection to processing, and their right not to be evaluated based on automated processing</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]

        const productexpand2 = [
            {
                securitygoals: "Access Control",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Access Control
                                </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.20 </dt>
                                        </td>
                                        <td>
                                            <dt> Enforce Disconnection of inactive connection/user session.</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.21</dt>
                                        </td>
                                        <td>
                                            <dt>  Access Control Policy is enforced

</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.22</dt>
                                        </td>
                                        <td>
                                            <dt> Ensure a context-based security
 </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.23</dt>
                                        </td>
                                        <td>
                                            <dt>  Tamper Detection </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.25</dt>
                                        </td>
                                        <td>
                                            <dt> Tamper detection and reaction should not rely on network connectivity </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Confidentiality of Data (DIU)",
                info:
                    <>
                        <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                        <Modal
                            dialogClassName="modal-80w"
                            // {...this.props}                 
                            show={this.state.modalShow}
                            onHide={this.modalClose}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                    <b>Security Goal : </b>Confidentiality of Data (DIU)
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Table bordered striped responsive hover /*variant="secondary"*/  >
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.7 </dt>
                                            </td>
                                            <td>
                                                <dt>  Data encryption during processing.
</dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.8</dt>
                                            </td>
                                            <td>
                                                <dt>  Code obfuscation
 </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.9</dt>
                                            </td>
                                            <td>
                                                <dt> Generic Error messages </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.DocumentationReview</dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.FunctionalSecurityTesting </dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> VA.VulnerabilityScanning </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>

                                    </tbody>
                                </Table>

                                {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.modalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </>,

                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]
        const productexpand3 = [
            {
                securitygoals: "Availability of data",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Availability of data
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.30 </dt>
                                        </td>
                                        <td>
                                            <dt>Limit allowed actions by implementing authorization mechanism </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.31</dt>
                                        </td>
                                        <td>
                                            <dt> Use principle of least privilege (POLP)
</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.32</dt>
                                        </td>
                                        <td>
                                            <dt> Isolate privileged code, processes and data from portions of the firmware that do not need access to them. </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.33</dt>
                                        </td>
                                        <td>
                                            <dt>  Authorize all devices before establishing connection </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Confidentiality of Data (DIU)",
                info:
                    <>
                        <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                        <Modal
                            dialogClassName="modal-80w"
                            // {...this.props}                 
                            show={this.state.modalShow}
                            onHide={this.modalClose}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                    <b>Security Goal : </b>Confidentiality of Data (DIU)
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Table bordered striped responsive hover /*variant="secondary"*/  >
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.7 </dt>
                                            </td>
                                            <td>
                                                <dt>  Data encryption during processing.
</dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.8</dt>
                                            </td>
                                            <td>
                                                <dt>  Code obfuscation
 </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.9</dt>
                                            </td>
                                            <td>
                                                <dt> Generic Error messages </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.DocumentationReview</dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.FunctionalSecurityTesting </dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> VA.VulnerabilityScanning </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>

                                    </tbody>
                                </Table>

                                {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.modalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </>,

                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]
        const productexpand4 = [
            {
                securitygoals: "Confidentiality of Data (DIU)",
                info:
                    <>
                        <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                        <Modal
                            dialogClassName="modal-80w"
                            // {...this.props}                 
                            show={this.state.modalShow}
                            onHide={this.modalClose}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                    <b>Security Goal : </b>Confidentiality of Data (DIU)
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Table bordered striped responsive hover /*variant="secondary"*/  >
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.7 </dt>
                                            </td>
                                            <td>
                                                <dt>  Data encryption during processing.
</dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.8</dt>
                                            </td>
                                            <td>
                                                <dt>  Code obfuscation
 </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.9</dt>
                                            </td>
                                            <td>
                                                <dt> Generic Error messages </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.DocumentationReview</dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.FunctionalSecurityTesting </dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> VA.VulnerabilityScanning </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>

                                    </tbody>
                                </Table>

                                {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.modalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </>,

                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Confidentiality of stored data (DAR)",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Confidentiality of stored data (DAR)
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.38 </dt>
                                        </td>
                                        <td>
                                            <dt>  Data Encryption during storage </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>

                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.70</dt>
                                        </td>
                                        <td>
                                            <dt> Data Encryption during storage </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>


                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]

        const productexpand5 = [
            {
                securitygoals: "Availability of data",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Availability of data
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.30 </dt>
                                        </td>
                                        <td>
                                            <dt>Limit allowed actions by implementing authorization mechanism </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.31</dt>
                                        </td>
                                        <td>
                                            <dt> Use principle of least privilege (POLP)
</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.32</dt>
                                        </td>
                                        <td>
                                            <dt> Isolate privileged code, processes and data from portions of the firmware that do not need access to them. </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.33</dt>
                                        </td>
                                        <td>
                                            <dt>  Authorize all devices before establishing connection </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Confidentiality of Data (DIU)",
                info:
                    <>
                        <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                        <Modal
                            dialogClassName="modal-80w"
                            // {...this.props}                 
                            show={this.state.modalShow}
                            onHide={this.modalClose}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                    <b>Security Goal : </b>Confidentiality of Data (DIU)
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Table bordered striped responsive hover /*variant="secondary"*/  >
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.7 </dt>
                                            </td>
                                            <td>
                                                <dt>  Data encryption during processing.
</dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.8</dt>
                                            </td>
                                            <td>
                                                <dt>  Code obfuscation
 </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.9</dt>
                                            </td>
                                            <td>
                                                <dt> Generic Error messages </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.DocumentationReview</dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.FunctionalSecurityTesting </dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> VA.VulnerabilityScanning </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>

                                    </tbody>
                                </Table>

                                {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.modalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </>,

                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Availability of data",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Availability of data
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.30 </dt>
                                        </td>
                                        <td>
                                            <dt>Limit allowed actions by implementing authorization mechanism </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.31</dt>
                                        </td>
                                        <td>
                                            <dt> Use principle of least privilege (POLP)
</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.32</dt>
                                        </td>
                                        <td>
                                            <dt> Isolate privileged code, processes and data from portions of the firmware that do not need access to them. </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.33</dt>
                                        </td>
                                        <td>
                                            <dt>  Authorize all devices before establishing connection </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]
        const productexpand6 = [
            {
                securitygoals: "Strong cryptography ",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Strong cryptography
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.43 </dt>
                                        </td>
                                        <td>
                                            <dt>  Generation of Cryptographic message integrity code</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.44</dt>
                                        </td>
                                        <td>
                                            <dt> Secure Hashing </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.45</dt>
                                        </td>
                                        <td>
                                            <dt> Encryption & Verification of Cryptographic Keys</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.46</dt>
                                        </td>
                                        <td>
                                            <dt>  Disable Insecure Algorithms
 </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Confidentiality of Data (DIU)",
                info:
                    <>
                        <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                        <Modal
                            dialogClassName="modal-80w"
                            // {...this.props}                 
                            show={this.state.modalShow}
                            onHide={this.modalClose}
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                    <b>Security Goal : </b>Confidentiality of Data (DIU)
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Table bordered striped responsive hover /*variant="secondary"*/  >
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                            </td>
                                            <td>
                                                <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.7 </dt>
                                            </td>
                                            <td>
                                                <dt>  Data encryption during processing.
</dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.8</dt>
                                            </td>
                                            <td>
                                                <dt>  Code obfuscation
 </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <dt>  EIA_SF.9</dt>
                                            </td>
                                            <td>
                                                <dt> Generic Error messages </dt>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.DocumentationReview</dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt>  CA.FunctionalSecurityTesting </dt>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <dt> VA.VulnerabilityScanning </dt>
                                                    </td>
                                                </tr>
                                            </td>

                                        </tr>

                                    </tbody>
                                </Table>

                                {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.modalClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                    </>,

                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Availability of data",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Availability of data
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.30 </dt>
                                        </td>
                                        <td>
                                            <dt>Limit allowed actions by implementing authorization mechanism </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.31</dt>
                                        </td>
                                        <td>
                                            <dt> Use principle of least privilege (POLP)
</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.32</dt>
                                        </td>
                                        <td>
                                            <dt> Isolate privileged code, processes and data from portions of the firmware that do not need access to them. </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.33</dt>
                                        </td>
                                        <td>
                                            <dt>  Authorize all devices before establishing connection </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]
        const productexpand7 = [
            {
                securitygoals: "Availability of data",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Availability of data
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.30 </dt>
                                        </td>
                                        <td>
                                            <dt>Limit allowed actions by implementing authorization mechanism </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.31</dt>
                                        </td>
                                        <td>
                                            <dt> Use principle of least privilege (POLP)
</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.32</dt>
                                        </td>
                                        <td>
                                            <dt> Isolate privileged code, processes and data from portions of the firmware that do not need access to them. </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.33</dt>
                                        </td>
                                        <td>
                                            <dt>  Authorize all devices before establishing connection </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Security audit & Monitoring",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Security audit & Monitoring
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.63 </dt>
                                        </td>
                                        <td>
                                            <dt> Detection intrusion
 </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.64</dt>
                                        </td>
                                        <td>
                                            <dt> Detection of replay  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.65</dt>
                                        </td>
                                        <td>
                                            <dt>  Logging sensitive events (user authentication, management of accounts and access rights, modifications to security rules, and the functioning of the system </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.66</dt>
                                        </td>
                                        <td>
                                            <dt>  Storage of the audit log  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]
        const productexpand8 = [
            {
                securitygoals: "Security audit & Monitoring",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Security audit & Monitoring
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.63 </dt>
                                        </td>
                                        <td>
                                            <dt> Detection intrusion
 </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.64</dt>
                                        </td>
                                        <td>
                                            <dt> Detection of replay  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.65</dt>
                                        </td>
                                        <td>
                                            <dt>  Logging sensitive events (user authentication, management of accounts and access rights, modifications to security rules, and the functioning of the system </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.66</dt>
                                        </td>
                                        <td>
                                            <dt>  Storage of the audit log  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Secure Data Management",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Secure Data Management
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.68 </dt>
                                        </td>
                                        <td>
                                            <dt> Integrity and confidentiality of security data </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.69</dt>
                                        </td>
                                        <td>
                                            <dt>  Administration of security features and data  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>


                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]
        const productexpand9 = [
            {
                securitygoals: "Security audit & Monitoring",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Security audit & Monitoring
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.63 </dt>
                                        </td>
                                        <td>
                                            <dt> Detection intrusion
 </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.64</dt>
                                        </td>
                                        <td>
                                            <dt> Detection of replay  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.65</dt>
                                        </td>
                                        <td>
                                            <dt>  Logging sensitive events (user authentication, management of accounts and access rights, modifications to security rules, and the functioning of the system </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.66</dt>
                                        </td>
                                        <td>
                                            <dt>  Storage of the audit log  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
            {
                securitygoals: "Data protection and compliance",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Data protection and compliance
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF90 </dt>
                                        </td>
                                        <td>
                                            <dt>  Personal data must be collected and processed fairly and lawfully</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.SourceCodeReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.90</dt>
                                        </td>
                                        <td>
                                            <dt>  Make sure that personal data is used for the specified purposes for which they were collected </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.90</dt>
                                        </td>
                                        <td>
                                            <dt>  IoT stakeholders must be compliant with the EU General Data Protection Regulation (GDPR) </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.90</dt>
                                        </td>
                                        <td>
                                            <dt> Users of IoT products and services must be able to exercise their rights to information, access, erasure, rectification, data portability, restriction of processing, objection to processing, and their right not to be evaluated based on automated processing</dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  CA.DocumentationReview</dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt>  CA.FunctionalSecurityTesting </dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> VA.VulnerabilityScanning </dt>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>

                        </Form.Control>
                    </>
            },
        ]
        const productexpand10 = [
            {
                securitygoals: "Non-repudiation ",
                info: <>
                    <div style={{ textAlign: "center" }}>  <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" /> </div>
                    <Modal
                        dialogClassName="modal-80w"
                        // {...this.props}                 
                        show={this.state.modalShow}
                        onHide={this.modalClose}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                                <b>Security Goal : </b>Non-repudiation
                               </Modal.Title>
                        </Modal.Header>
                        <Modal.Body >

                            <Table bordered striped responsive hover /*variant="secondary"*/  >
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Security Requirement</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}>Description</dt>
                                        </td>
                                        <td>
                                            <dt className="mb-1" style={{ fontSize: "16px" }}> Security Assurance Activities </dt>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.71 </dt>
                                        </td>
                                        <td>
                                            <dt> Digital signature </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview  </a></dt>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <dt>  <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.BasicRobustnessTesting </a> </dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <dt>  EIA_SF.72</dt>
                                        </td>
                                        <td>
                                            <dt> Logging  </dt>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.DocumentationReview </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt> <a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> CA.FunctionalSecurityTesting </a></dt>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <dt><a href={DEMO.BLANK_LINK} style={{ background: "#dce0e0" }} className="label theme-bg2 text-dark f-12"> VA.VulnerabilityScanning </a></dt>
                                                </td>
                                            </tr>
                                        </td>

                                    </tr>

                                </tbody>
                            </Table>

                            {/* <BootstrapTable keyField='id' data={ products1 } columns={ columns } /> */}

                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.modalClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </>,
                decision:
                    <>
                        <Form.Control as="select">
                            <option> Reduce </option>
                            <option> Accept</option>
                            <option> Avoid</option>
                            <option>Transfert</option>
                        </Form.Control>
                    </>
            },
        ]
        const columnexpand = [
            {
                dataField: "securitygoals",
                text: " Security Goals",
                search: true,
                headerStyle: {
                    backgroundColor: '#C2C4C4',
                    color: "white",
                    textAlign: "center"
                },

            },
            {
                dataField: "info",
                text: "Info",
                search: true,
                headerStyle: {
                    backgroundColor: '#C2C4C4',
                    color: "white",
                    textAlign: "center"
                },
                formatter: (cell, row, rowIndex) => (
                    <div>
                        <span> {row.info}</span>
                    </div>)
            },
            {
                dataField: "decision",
                text: "Decision",
                searchable: true,
                headerStyle: {
                    backgroundColor: '#C2C4C4',
                    color: "white",
                    textAlign: "center"
                },
                formatter: (cell, row, rowIndex) => (
                    <div>
                        <span> {row.decision}</span>
                    </div>)
            },
        ]

        const columns = [

            {
                dataField: "asset",
                headerAlign: 'center',
                text: "Asset",
                search: true,
                // searchable: false
            },
            {
                dataField: "vul",
                headerAlign: 'center',
                text: "Vulnerability",
                search: true,
                // searchable: true,
                formatter: (cell, row, rowIndex) => (
                    <div>
                        <span> {row.vul}</span>
                    </div>)
            },
            {
                dataField: "impact",
                // text: "Impact",
                align: 'center',
                search: true,
                text: "impact",
                // searchable: true,
                headerAlign: 'center',

                formatter: (cell, row, rowIndex) => (
                    <div>
                        <span> {row.impact}</span>
                    </div>)
                // headerAlign: 'center' // make it on center 



            },
            {
                dataField: "likelihood",
                //text: "Likelihood",
                align: 'center',
                // searchable: true,
                search: true,
                headerAlign: 'center',
                text: "Likelihood",
                formatter: (cell, row, rowIndex) => (
                    <div>
                        <span> {row.likelihood}</span>
                    </div>)
            },
            {
                dataField: "sal",
                text: "Security Assurance Level",
                headerAlign: 'center',
                // searchable: false,
                align: 'center',
                search: true,


                formatter: (cell, row, rowIndex) => (
                    <div>
                        <span> {row.sal}</span>
                    </div>)
            }

        ];


        const expandRow1 = {
            renderer: row => (
                <div>

                    <ToolkitProvider keyField="id" data={productexpand1} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'dimgray', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'dimgray', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow2 = {
            renderer: row => (
                <div>

                    <ToolkitProvider keyField="id" data={productexpand2} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow3 = {
            renderer: row => (
                <div>

                    <ToolkitProvider keyField="id" data={productexpand3} columns={columnexpand} search>
                        {props => (
                            <div>

                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow4 = {
            renderer: row => (
                <div>

                    <ToolkitProvider keyField="id" data={productexpand4} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow5 = {
            renderer: row => (
                <div>
                    <br />
                    <ToolkitProvider keyField="id" data={productexpand5} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow6 = {
            renderer: row => (
                <div>
                    <br />
                    <ToolkitProvider keyField="id" data={productexpand6} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow7 = {
            renderer: row => (
                <div>
                    <br />
                    <ToolkitProvider keyField="id" data={productexpand7} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow8 = {
            renderer: row => (
                <div>
                    <br />
                    <ToolkitProvider keyField="id" data={productexpand8} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow9 = {
            renderer: row => (
                <div>
                    <br />
                    <ToolkitProvider keyField="id" data={productexpand9} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };
        const expandRow10 = {
            renderer: row => (
                <div>
                    <br />
                    <ToolkitProvider keyField="id" data={productexpand10} columns={columnexpand} search>
                        {props => (
                            <div>
                                <br />
                                <BootstrapTable
                                    {...props.baseProps}

                                // headerClasses={styles.header}

                                />
                                <br />
                            </div>
                        )}
                    </ToolkitProvider>

                </div>
            ),
            showExpandColumn: true,
            expandColumnPosition: 'right',
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                if (isAnyExpands) {
                    return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
                }
                return <b style={{ color: 'WHITE', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
            },
            expandColumnRenderer: ({ expanded }) => {
                if (expanded) {
                    return (
                        <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
                    );
                }
                return (
                    <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
                );
            }
        };

        let profiles = [
            {
                key: "1",
                name: "T02-Disclosure of Data(Processed)",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products1} columns={columns} exportCSV search>
                            {props => (
                                <div >
                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow1}

                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>

                </>
            },
            {
                key: "2",
                name: "T07-Compromise of personal data/sensitivite info/confidential info(Transported)",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products2} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow2}

                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>
            },
            {
                key: "3",
                name: "T12-Regulatory Sansctions",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products3} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow3}

                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>
            },
            {
                key: "4",
                name: "T03-Manipulation or Injectionof Data",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products4} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow4}

                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>
            },
            {
                key: "6",
                name: "T07-Compromise of personal data/sensitivite info/confidential info(Transported)",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products5} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow5}

                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>
            },
            {
                key: "7",
                name: "T03-Manipulation or Injectionof Data",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products6} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}
                                            expandRow={expandRow6}
                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>
            },
            {
                key: "8",
                name: "T12-Regulatory Sansctions",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products7} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow7}

                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>

            },
            {
                key: "9",
                name: "T07-Compromise of personal data/sensitivite info/confidential info(Transported)",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products8} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow8}

                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>

            },
            {
                key: "10",
                name: "T02-Disclosure of Data(Processed)",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products9} columns={columns} exportCSV search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}
                                            //pagination={paginationFactory(options)}
                                            expandRow={expandRow9}
                                            filter={filterFactory()}

                                            // filterPosition="bottom"
                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>
            },
            {
                key: "11",
                name: "T03-Manipulation or Injectionof Data",
                todo: <>
                    <div>
                        <ToolkitProvider keyField="id" data={products10} columns={columns} search>
                            {props => (
                                <div >

                                    <br />
                                    <div style={{ overflowX: "scroll" }}>
                                        <BootstrapTable
                                            {...props.baseProps}

                                            expandRow={expandRow10}

                                            // headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                    </div>
                                    <br />

                                    <br />
                                </div>
                            )}
                        </ToolkitProvider>

                    </div>
                </>
            },
        ]

        return (
            <Aux>
                <Row>
                    <>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={this.state.show} onHide={this.handleClose}>
                            {/* <Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header> */}
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
                                <Link to="/final-security-profile"><Button variant="primary" >
                                    Next Step
            </Button> </Link>
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
                                    <Card.Title as='h5'> {/* <i class="fa fa-plus m-r-5" /> */} Risk decision
                                        </Card.Title>
                                        <Link to="/primary-asset"><button type="button" class="btn btn-secondary float-right">  Edit Primary Asset</button> </Link>
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
                <div className="mb-4 text-right" >
                    <Link to="/security-goals"> <button className="btn btn-secondary shadow-2 mb-4">Previous Step</button> </Link>
                    <button onClick={this.handleShow} className="btn btn-primary shadow-2 mb-4">Save Changes</button>
                </div>

            </Aux>
        )

    }
}
export default RiskDecisionNextt;