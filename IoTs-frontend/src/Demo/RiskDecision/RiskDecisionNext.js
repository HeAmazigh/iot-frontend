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
//risk Decision
import React, { Component } from 'react';
import { Row, Col, Table, Tab, InputGroup, Form, Button, Collapse, Modal, Nav, FormControl } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import Aux from "../../hoc/_Aux";
import "../LandingPage/app.css"
import DEMO from "../../store/constant";
import Card from "../../App/components/MainCard";
// import Pagination from "./Pagination";

//table example
var products = [{
    id: 1,
    name: "Item name 1",
    quality: 'good',
    price: 100,

}, {
    id: 2,
    name: "Item name 2",
    quality: 'Bad',
    price: 100,

},
{
    id: 3,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 4,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 5,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 6,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 7,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 8,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 6,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 6,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 6,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 6,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 6,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

},
{
    id: 6,
    name: "Item name 2",
    quality: "unknown",
    price: 100,

}
];

const selectOptions = {
    0: 'good',
    1: 'Bad',
    2: 'unknown'
};

const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name',
    filter: textFilter()
},
{
    dataField: 'quality',
    text: 'Product Quailty',
    formatter: cell => selectOptions[cell],
    filter: selectFilter({
        options: selectOptions,
        defaultValue: 0
    })
},
{
    dataField: 'price',
    text: 'Product Price',

}];

const expandRow = {
    parentClassName: 'parent-expand-foo', //color header change
    className: 'expanding-foo', // color content background change
    renderer: row => (
        <div>
            <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
            <p>You can render anything here, also you can add additional data on every row object</p>
            <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
    ),
    showExpandColumn: true,
    expandColumnPosition: 'right',
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
        if (isAnyExpands) {
            return <b>-</b>;
        }
        return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
            return (
                <b>-</b>
            );
        }
        return (
            <b>...</b>
        );
    }
};
//table example

let profiles = [
    {
        key: "1",
        name: "T02-Disclosure of Data(Processed)",
    },
    {
        key: "2",
        name: "T07-Compromise of personal data/sensitivite info/confidential info(Transported)",
    },
    {
        key: "3",
        name: "T12-Regulatory Sansctions",
    },
    {
        key: "4",
        name: "T03-Manipulation or Injectionof Data",
    },
    {
        key: "6",
        name: "T07-Compromise of personal data/sensitivite info/confidential info(Transported)",
    },
    {
        key: "7",
        name: "T03-Manipulation or Injectionof Data",
    },
    {
        key: "8",
        name: "T12-Regulatory Sansctions",
        // todo:<>
        //  {this.renderTodos()}
        // </>
    },
    {
        key: "9",
        name: "T07-Compromise of personal data/sensitivite info/confidential info(Transported)",
    },
    {
        key: "10",
        name: "T02-Disclosure of Data(Processed)",
    },
    {
        key: "11",
        name: "T03-Manipulation or Injectionof Data",

    },
]
const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing { from} to { to} of { size} Results
    </span>
);



class RiskDecisionNext extends Component {
    state = {
        modalShow: false,
        accordionKey: 1
    };

    modalClose = () => this.setState({ modalShow: false });

    render() {
        const options = {
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            custom: true,
            paginationSize: 4,
            pageStartIndex: 1,
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            totalSize: products.length,
            paginationTotalRenderer: customTotal,
            disablePageTitle: true,
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: products.length
            }], // A numeric array is also available. the purpose of above example is custom the text

            showTotal: true,

        };
        const contentTable = ({ paginationProps, paginationTableProps }) => (
            <div>

                <PaginationListStandalone {...paginationProps} />
                <div>
                    <div>
                        <BootstrapTable
                            striped
                            hover
                            keyField="id"
                            data={products}
                            columns={columns}
                            expandRow={expandRow}
                            filter={filterFactory()}

                            {...paginationTableProps}
                        />
                    </div>
                </div>

            </div>
        );



        const { accordionKey, modalShow } = this.state;


        return (
            <Aux>


                {/* /****************************** */}

                <Modal
                    /* className='Recent-Users '*/
                    {...this.props}
                    //size="lg"
                    dialogClassName="modal-80w"
                    show={this.state.modalShow}
                    onHide={this.modalClose}
                    //aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: "#b12222" }} id="contained-modal-title-vcenter">
                            <b>Security Goal : </b>Confidentiality of Data (DIU)
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ overflowY: "scroll", height: '500px' }}>
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
                                        <dt>  EIA_SF.1 </dt>
                                    </td>
                                    <td>
                                        <dt>  Use protocols and mechanisms able to represent and manage trust and trust relationships</dt>
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
                                        <dt>  EIA_SF.12</dt>
                                    </td>
                                    <td>
                                        <dt>  Multi-factor Authentication(Knowledge factor, possession factor, location factor, time factor, inheritance factor) </dt>
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
                                        <dt>  EIA_SF.12</dt>
                                    </td>
                                    <td>
                                        <dt>  Multi-factor Authentication(Knowledge factor, possession factor, location factor, time factor, inheritance factor) </dt>
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
                                        <dt>  EIA_SF.12</dt>
                                    </td>
                                    <td>
                                        <dt>  Multi-factor Authentication(Knowledge factor, possession factor, location factor, time factor, inheritance factor) </dt>
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
                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.modalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                {/* /************************************************ */}
                <h2 class="docs-page-header bg-dark text-white">
                    <span class="docs-header-path">IoTsTrusT
                    </span>
                    <ul className="navbar-nav ml-auto" style={{ color: "white", float: "right" }}>
                        <li>
                            <i style={{ paddingRight: "20px", fontSize: "20px" }} className="icon feather icon-bell" />
                            <i style={{ paddingRight: "20px", fontSize: "20px" }} className="icon feather icon-mail" />
                            <i style={{ fontSize: "20px" }} className="icon feather icon-settings" />
                            <i style={{ fontSize: "20px" }} className="icon feather icon-chevron-down" />
                        </li>
                    </ul>
                </h2>
                <div class="docs-wrapper">
                    <div class="docs-sections">
                        <ul class="docs-sections-inner">
                            <li class="nav-item">
                                <a class="nav-link" href="#page-alert">
                                    <span className=" d-flex  align-items-center">
                                        <i style={{ color: "#b12222" }} className="fa fa-caret-down f-22 m-r-10 " />Collect
                                     </span>
                                </a>
                                <ul>
                                    <li>
                                        <a class="nav-link" href="#page-grid">
                                            <span className=" d-flex  align-items-center">
                                                <i style={{ color: "rgb(128, 128, 128)" }} className="fa fa-caret-right f-22 m-r-10 " />  Assets
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#page-datepicker">
                                    <span className=" d-flex  align-items-center">
                                        <i style={{ color: "#b12222" }} className="fa fa-caret-down f-22 m-r-10 " />Define
                                    </span>
                                </a>
                                <ul>
                                    <li>
                                        <a class="nav-link" href="#page-grid">
                                            <span className=" d-flex  align-items-center">
                                                <i style={{ color: "rgb(128, 128, 128)" }} className="fa fa-caret-right f-22 m-r-10 " />  Impact
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-link" href="#page-grid">
                                            <span className=" d-flex  align-items-center">
                                                <i style={{ color: "rgb(128, 128, 128)" }} className="fa fa-caret-right f-22 m-r-10 " />  Likelihood
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#page-datepicker">
                                    <span className=" d-flex  align-items-center">
                                        <i style={{ color: "#b12222" }} className="fa fa-caret-down f-22 m-r-10 " />Decide
                                    </span>
                                </a>
                                <ul>
                                    <li>
                                        <a class="nav-link" href="#page-grid">
                                            <span className=" d-flex  align-items-center">
                                                <i style={{ color: "rgb(128, 128, 128)" }} className="fa fa-caret-right f-22 m-r-10 " />Risks
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-link " href="#page-alert">
                                            <span className=" d-flex  align-items-center">
                                                <i style={{ color: "rgb(128, 128, 128)" }} className="fa fa-caret-right f-22 m-r-10 " />   Security goals
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="nav-link active" href="#page-grid">
                                            <span className=" d-flex  align-items-center">
                                                <i style={{ color: "rgb(128, 128, 128)" }} className="fa fa-caret-right f-22 m-r-10 " />Security Requirements
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="docs-inner">
                        <ul class="docs-header" id="page-alert" className="breadcrumb">
                            <li style={{ fontSize: "18px" }} className="breadcrumb-item">
                                <Link to="/"><i className="feather icon-home" /> / Decide / Security Requirements </Link>
                            </li>
                        </ul>

                        {/* <div className="survey-wrapper">
                    <div className="survey-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div> */}
                        {/* <div className="card"> */}
                        <Row>
                            <Tab.Container defaultActiveKey={0} >
                                <Col xl={3}>
                                    <Card title='Threat List' isOption>

                                        <InputGroup className="mb-4">
                                            <FormControl
                                                placeholder="Search Here"
                                                aria-label="Search Here"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append className="text-center">
                                                <button type="button" class=" btn btn-icon btn-primary m-0" >
                                                    <i class="fa fa-search" />
                                                </button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                {profiles.map((item, i) =>
                                                    <Nav.Link key={i} eventKey={i}>
                                                        {item.name}
                                                    </Nav.Link>
                                                )}
                                            </Nav.Item>
                                        </Nav>

                                    </Card>
                                </Col>
                                <Col xl={9}>
                                    <Card title='Security Requirements' isOption>
                                        <p >
                                            <Table striped responsive bordered hover>
                                                <tbody>
                                                    <tr className="unread">
                                                        <td>
                                                            <dt className="mb-1">Asset</dt>
                                                        </td>
                                                        <td>
                                                            <dt className="mb-1">Vulnerability</dt>
                                                        </td>
                                                        <td>
                                                            <dt className="mb-1">Impact</dt>
                                                        </td>
                                                        <td>
                                                            <dt className="mb-1">Likelihood</dt>
                                                        </td>
                                                        <td>
                                                            <dt className="mb-1">Security Assurance Level</dt>
                                                        </td>
                                                        <td>
                                                            <dt className="mb-1">Security Goals</dt>
                                                        </td>

                                                        <td>
                                                            <dt className="mb-1">Risk Owner Decision</dt>
                                                        </td>
                                                    </tr>
                                                    <tr className="unread">
                                                        <td>
                                                            <h6 className="mb-1">Transactional Data</h6></td>
                                                        <td>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Inadequate classification of information</h6>
                                                                </td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Lack of the use of cryptography</h6>
                                                                </td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Lack of systems for identification and authentication </h6>
                                                                </td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Disposal of storage media without deleting data</h6>
                                                                </td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">User rights are not reviewed regularly</h6>
                                                                </td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Uncontrolled copying of data </h6>
                                                                </td>
                                                            </tr>
                                                            {/* <tr className="unread">
                                                                    <td>
                                                                        <h6 className="mb-1">Mathilde Andersen</h6>
                                                                        <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                                    </td>
                                                                </tr> */}
                                                        </td>
                                                        <td>
                                                            <a href={DEMO.BLANK_LINK} style={{ background: "yellow" }} className="label theme-bg2 text-dark f-12"> Minor</a>
                                                        </td>
                                                        <td><a href={DEMO.BLANK_LINK} style={{ background: "#56c42f" }} className="label theme-bg text-white f-12">Unlikely</a></td>
                                                        <td><a href={DEMO.BLANK_LINK} style={{ background: "#56c42f" }} className="label theme-bg text-white f-12">Basic</a></td>
                                                        {/* Security Goals */}
                                                        <td>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Confidentiality of Data (DIU)</h6>

                                                                </td>
                                                                <td>
                                                                    <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" />
                                                                </td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 >Confidentiality of stored data (DAR)</h6>
                                                                </td>
                                                                <td>
                                                                    <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" />
                                                                </td>
                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 >Access Control</h6>
                                                                </td>
                                                                <td>
                                                                    <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" />
                                                                </td>
                                                            </tr>
                                                            {/* <tr className="unread">
                                                                    <td>
                                                                        <h6 className="mb-1">Availability of Data</h6>

                                                                    </td>
                                                                    <td>
                                                                        <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" />

                                                                    </td>
                                                                </tr>  */}
                                                            <tr className="unread">
                                                                <td>
                                                                    <h6 className="mb-1">Integrity of stored data (DAR)</h6>
                                                                </td>
                                                                <td>
                                                                    <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" />
                                                                </td>
                                                            </tr>
                                                        </td>
                                                        {/* SecurityOwner Decision */}
                                                        <td>
                                                            {/*    <tr className="unread">
                                                                    <td>
                                                                        <Form.Control as="select" className="mb-3">
                                                                            <option>Reduce</option>
                                                                            <option>Accept</option>
                                                                            <option>Avoid</option>
                                                                            <option>Transfert</option>
                                                                        </Form.Control>
                                                                    </td>
                                                                </tr>*/}
                                                            <tr className="unread">
                                                                <td>
                                                                    <Form.Control as="select">
                                                                        <option>Reduce</option>
                                                                        <option>Accept</option>
                                                                        <option>Avoid</option>
                                                                        <option>Transfert</option>

                                                                    </Form.Control>

                                                                </td>

                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <Form.Control as="select" >
                                                                        <option>Reduce</option>
                                                                        <option>Accept</option>
                                                                        <option>Avoid</option>
                                                                        <option>Transfert</option>

                                                                    </Form.Control>

                                                                </td>

                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <Form.Control as="select">
                                                                        <option>Reduce</option>
                                                                        <option>Accept</option>
                                                                        <option>Avoid</option>
                                                                        <option>Transfert</option>

                                                                    </Form.Control>

                                                                </td>

                                                            </tr>
                                                            <tr className="unread">
                                                                <td>
                                                                    <Form.Control as="select">
                                                                        <option>Reduce</option>
                                                                        <option>Accept</option>
                                                                        <option>Avoid</option>
                                                                        <option>Transfert</option>

                                                                    </Form.Control>

                                                                </td>

                                                            </tr>
                                                        </td>

                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </p>
                                    </Card>
                                </Col>
                            </Tab.Container >
                        </Row>




                        {/* <BootstrapTable
  keyField='id'
  data={ products }
  columns={ columns }
  expandRow={ expandRow }
  filter={ filterFactory() }
/> */}
                        {/* <Row>
<Col>
<PaginationProvider
         pagination={ paginationFactory(options) }
        >
          { contentTable }
        </PaginationProvider>        
                                             </Col>
                        </Row> */}
                        <br />
                        <div className="mb-4 text-right" >
                            <button className="btn btn-primary shadow-2 mb-4">Previous Step</button>
                            <button className="btn btn-primary shadow-2 mb-4">Next Step</button>
                        </div>

                    </div>
                </div>





                {/* <div className="survey-wrapper">
                    <div className="survey-content">
                        <Card className='Recent-Users '>
                            <Card.Header>
                                <Card.Title as='h5'>Risk Decision</Card.Title>
                            </Card.Header>
                            <Card.Body >


                                <Card className='Recent-Users ' >
                                    <Card.Header>
                                        <Card.Title as="h5">
                                            <a href={DEMO.BLANK_LINK}
                                                onClick={() => this.setState({ accordionKey: (accordionKey !== 1) ? 1 : 0 })}
                                                aria-controls="accordion1"
                                                aria-expanded={accordionKey === 1}>
                                                T02-Disclosure of Data(Processed)
                                                    </a>
                                        </Card.Title>
                                    </Card.Header>
                                    <Collapse in={this.state.accordionKey === 1}>
                                        <div id="accordion1">
                                            <Card.Body className='px-0 py-2'>
                                                <Table responsive hover>
                                                    <tbody>
                                                        <tr className="unread">
                                                            <td>
                                                                <dt className="mb-1">Asset</dt>
                                                            </td>
                                                            <td>
                                                                <dt className="mb-1">Vulnerability</dt>
                                                            </td>
                                                            <td>
                                                                <dt className="mb-1">Impact</dt>
                                                            </td>
                                                            <td>
                                                                <dt className="mb-1">Likelihood</dt>
                                                            </td>
                                                            <td>
                                                                <dt className="mb-1">Security Assurance Level</dt>
                                                            </td>
                                                            <td>
                                                                <dt className="mb-1">Security Goals</dt>
                                                            </td>

                                                            <td>
                                                                <dt className="mb-1">Risk Owner Decision</dt>
                                                            </td>
                                                        </tr>
                                                        <tr className="unread">
                                                            <td> <h6 className="mb-1">Transactional Data</h6></td>
                                                            <td>
                                                                <tr className="unread">
                                                                    <td>
                                                                        <h6 className="mb-1">Improper Access Control</h6>

                                                                    </td>
                                                                    {/* <td>
                                        <Form.Control as="select" className="mb-3">
                                            <option>Default select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        </td> */}

                {/* </tr> */}
                {/* <tr className="unread">
                                                                    <td>
                                                                        <h6 className="mb-1">Mathilde Andersen</h6>
                                                                        <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                                    </td>
                                                                </tr> */}
                {/* // </td> */}
                {/* // <td>
                                                            //     <a href={DEMO.BLANK_LINK} style={{ background: "yellow" }} className="label theme-bg2 text-dark f-12"> Minor</a>
                                                            // </td>
                                                            // <td><a href={DEMO.BLANK_LINK} style={{ background: "#56c42f" }} className="label theme-bg text-white f-12">Unlikely</a></td>
                                                            // <td><a href={DEMO.BLANK_LINK} style={{ background: "#56c42f" }} className="label theme-bg text-white f-12">Basic</a></td> */}
                {/* Security Goals */}
                {/* // <td>
                                                            //     <tr className="unread">
                                                            //         <td>
                                                            //             <h6 className="mb-1">Integrity</h6>

                                                            //         </td>
                                                            //         <td>
                                                            //         <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" />

                                                            //         </td>
                                                            //     </tr>
                                                            //     <tr className="unread">
                                                            //         <td>
                                                            //             <h6 className="mb-1">Identification & Integration</h6>

                                                            //         </td>
                                                            //         <td>
                                                            //             <i onClick={() => this.setState({ modalShow: true })} style={{ color: " #bb060f" }} className="feather icon-info text-c-primary f-30 m-r-5" />

                                                            //         </td>
                                                            //     </tr>
                                                            // </td> */}

                {/* SecurityOwner Decision */}
                {/* //                                             <td>
                //                                                 <tr className="unread">
                //                                                     <td>
                //                                                         <Form.Control as="select" className="mb-3">
                //                                                             <option>Reduce</option>
                //                                                             <option>Accept</option>
                //                                                             <option>Avoid</option>
                //                                                             <option>Transfert</option>

                //                                                         </Form.Control>

                //                                                     </td>

                //                                                 </tr>
                //                                                 <tr className="unread">
                //                                                     <td>
                //                                                         <Form.Control as="select" className="mb-3">
                //                                                             <option>Reduce</option>
                //                                                             <option>Accept</option>
                //                                                             <option>Avoid</option>
                //                                                             <option>Transfert</option>

                //                                                         </Form.Control>

                //                                                     </td>

                //                                                 </tr>
                //                                             </td>

                //                                         </tr> */}







                {/* 
                //                                     </tbody>
                //                                 </Table> */}

                {/* //                             </Card.Body>
                //                         </div>
                //                     </Collapse>
                //                 </Card>
                //                 <Card className="mt-2">
                //                     <Card.Header>
                //                         <Card.Title as="h5">
                //                             <a href={DEMO.BLANK_LINK}
                //                                 onClick={() => this.setState({ accordionKey: (accordionKey !== 2) ? 2 : 0 })}
                //                                 aria-controls="accordion2"
                //                                 aria-expanded={accordionKey === 2}>
                //                                 T07-Compromise of personal data/sensitivite info/confidential info(Transported)
                //                                      </a>
                //                         </Card.Title>
                //                     </Card.Header>
                //                     <Collapse in={this.state.accordionKey === 2}>
                //                         <div id="accordion2">
                //                             <Card.Body>
                //                                 <Card.Text>
                //                                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                //                                     aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                //                                     sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                //                                     craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                //                                     occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                //                                     labore sustainable VHS.
                //                                         </Card.Text>
                //                             </Card.Body>
                //                         </div>
                //                     </Collapse>
                //                 </Card> */}
                {/* //                 <Card className="mt-2">
                //                     <Card.Header>
                //                         <Card.Title as="h5">
                //                             <a href={DEMO.BLANK_LINK}
                //                                 onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                //                                 aria-controls="accordion3"
                //                                 aria-expanded={accordionKey === 3}>
                //                                 T12-Regulatory Sansctions
                //                                      </a>
                //                         </Card.Title>
                //                     </Card.Header>
                //                     <Collapse in={this.state.accordionKey === 3}>
                //                         <div id="accordion3">
                //                             <Card.Body>
                //                                 <Card.Text>
                //                                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                //                                     aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                //                                     sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                //                                     craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                //                                     occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                //                                     labore sustainable VHS.
                //                         </Card.Text>
                //                             </Card.Body>
                //                         </div>
                //                     </Collapse>
                //                 </Card>
                //                 <Card className="mt-2">
                //                     <Card.Header>
                //                         <Card.Title as="h5">
                //                             <a href={DEMO.BLANK_LINK}
                //                                 onClick={() => this.setState({ accordionKey: (accordionKey !== 4) ? 4 : 0 })}
                //                                 aria-controls="accordion3"
                //                                 aria-expanded={accordionKey === 4}>
                //                                 T03-Manipulation or Injectionof Data
                //                                      </a>
                //                         </Card.Title>
                //                     </Card.Header>
                //                     <Collapse in={this.state.accordionKey === 4}>
                //                         <div id="accordion3">
                //                             <Card.Body>
                //                                 <Card.Text>
                //                                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                //                                     aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                //                                     sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                //                                     craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                //                                     occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                //                                     labore sustainable VHS.
                //                         </Card.Text>
                //                             </Card.Body>
                //                         </div>
                //                     </Collapse>
                //                 </Card>
                //                 <Card className="mt-2">
                //                     <Card.Header>
                //                         <Card.Title as="h5">
                //                             <a href={DEMO.BLANK_LINK}
                //                                 onClick={() => this.setState({ accordionKey: (accordionKey !== 5) ? 5 : 0 })}
                //                                 aria-controls="accordion3"
                //                                 aria-expanded={accordionKey === 5}>
                //                                 T12-Regulatory Sansctions
                //                                      </a>
                //                         </Card.Title>
                //                     </Card.Header>
                //                     <Collapse in={this.state.accordionKey === 5}>
                //                         <div id="accordion3">
                //                             <Card.Body>
                //                                 <Card.Text>
                //                                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia
                //                                     aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                //                                     sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                //                                     craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                //                                     occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                //                                     labore sustainable VHS.
                //                         </Card.Text>
                //                             </Card.Body>
                //                         </div>
                //                     </Collapse>
                //                 </Card>

                //             </Card.Body>
                //         </Card>
                //         <br />
                //         <div className="mb-4 text-center" >
                //             <button className="btn btn-primary shadow-2 mb-4">Previous Step</button>
                //             <button className="btn btn-primary shadow-2 mb-4">Next Step</button>
                //         </div>
                //     </div>
                // </div> */}

            </Aux>
        );
    }
}

export default RiskDecisionNext;