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
import { Row, Col, Card, Tab, Nav, Form, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import { Empty } from 'antd';
import { Link } from 'react-router-dom';

import Aux from "../../hoc/_Aux";

import "../LandingPage/app.css"

// import DEMO from "../../store/constant";


/**** partie pour todo  */

class RiskDecision extends Component {

    constructor() {
        super();
        this.state = {
            modalShow: false,
            userInput: '',
            key1: "",
            items: [],
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

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


    //Button Next Previous...

    // add item to deleteTodo.bind(this, item)
    renderTodos() {

        return this.state.items.map((item, j) => {
            return (
                <div key={item}>
                    <Row>
                        <Col>
                            <Card className="mt-2">
                                <Card.Header className="text-left">
                                    <Card.Title as="h5">
                                        {item}
                                    </Card.Title>

                                    <i onClick={this.deleteTodo.bind(this, item)} style={{ color: "#b12222" }} class="fa fa-trash fa-lg   float-right  m-0" />

                                </Card.Header>
                            </Card>
                        </Col>
                    </Row>
                </div>
            );
        });
    }
    modalClose = () => this.setState({ modalShow: false });
    customizeRenderEmpty = () => (
        <Empty
            description={
                <span>
                    There are currently no todos. <br />
                    Click button "New Item" to add new todos.
                </span>
            }
        />
    );
    render() {

        let profiles = [
            {
                key: "1",
                name: "T02-Disclosure of Data(Processed)",
                todo: <>
                    {/* <TodoApp/> */}
                </>

            },
            {
                key: "2",
                name: "T07-Compromise of personal data/sensitivite info/confidential info(Transported)",
                todo: <>

                    { this.props.i ?
                        this.renderTodos() :
                        null
                    }
                </>
            },
            {
                key: "3",
                name: "T12-Regulatory Sansctions",
                todo: <>
                    {this.renderTodos()}
                </>
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
        const { modalClose } = this.state

        return (
            <Aux>

                <Row>

                    <Tab.Container defaultActiveKey="0" >

                        <>
                            <Col xl={4}>
                                <Card className='Recent-Users'>
                                    <Card.Header>
                                        <Card.Title as='h5'>Threat Lists</Card.Title>
                                    </Card.Header>
                                    <Card.Body >
                                        <InputGroup className="mb-4">
                                            <FormControl
                                                placeholder="Search Here"
                                                aria-label="Search Here"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append className="text-center">
                                                <button type="button" class=" btn btn-icon btn-secondary m-0" >
                                                    <i class="fa fa-search" />
                                                </button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        {profiles.map((item, i) =>
                                            <>
                                                <Nav key={i} variant="pills" className="flex-column">
                                                    <Nav.Item>

                                                        <Nav.Link eventKey={i}>  {item.name} </Nav.Link>

                                                    </Nav.Item>

                                                    {/* <Nav.Item>
                                                    <Nav.Link eventKey="t2">T07-Compromise of personal data/sensitivite info/confidential info(Transported)</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t3">T12-Regulatory Sansctions</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t4">T03-Manipulation or Injectionof Data</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t5">T07-Compromise of personal data/sensitivite info/confidential info(Transported)</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t6">T12-Regulatory Sansctions</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t7">T03-Manipulation or Injectionof Data</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t8">T07-Compromise of personal data/sensitivite info/confidential info(Transported)</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t9">T12-Regulatory Sansctions</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t10">T03-Manipulation or Injectionof Data</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t11">T07-Compromise of personal data/sensitivite info/confidential info(Transported)</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t12">T12-Regulatory Sansctions</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="t13">T03-Manipulation or Injectionof Data</Nav.Link>
                                                </Nav.Item> */}
                                                </Nav>
                                                {/* <Tab.Content key={i} >
                                        <button  onClick={() => this.setState({ modalShow: true })} type="button" class=" btn btn-icon btn-primary float-right  m-0" >
                                                <i class="fa fa-plus" />
                                            </button>
                                            <Tab.Pane eventKey={i}>
                                               <div> {item.todo} </div>
                                            </Tab.Pane>
                                        </Tab.Content> */}
                                            </>
                                        )}

                                        {/* <Nav variant="pills" className="flex-column">                                               
                                                    <Nav.Item>
                                                    {profiles.map((item, i) =>
                                                        <Nav.Link key={i} eventKey={i}>
                                                            {item.name}                                           
                                                        </Nav.Link>
                                                         )}
                                                  </Nav.Item>
                                            </Nav> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={8}>
                                <Card >
                                    <Card.Header>
                                        <Card.Title as='h5'> {/* <i class="fa fa-plus m-r-5" /> */} Security Goal Lists
                                        </Card.Title>
                                        <button onClick={() => this.setState({ modalShow: true })} type="button" class=" btn btn-icon btn-secondary float-right  m-0" >
                                            <i class="fa fa-plus" />
                                        </button>
                                    </Card.Header>
                                    <Card.Body className='border-bottom'>

                                    </Card.Body>
                                    <Card.Body >
                                        <div className="row align-items-center justify-content-center card-active">
                                            <div className="col-4">
                                                <h6 className="text-center m-b-10"><span className="text-muted m-r-5">Assurance Level:</span>  <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label></h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Impact:</span><label style={{ background: "yellow" }} className="label theme-bg2 text-dark f-14 f-w-400 ">Minor</label></h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="text-center  m-b-10"><span className="text-muted m-r-5">Likelihood:</span><label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Unlikely</label></h6>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Modal
                                        className='Recent-Users '
                                        {...this.props}
                                        //size="lg"
                                        show={this.state.modalShow}
                                        onHide={this.modalClose}
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Add New Security Goals
                                                </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <br />
                                            <Form.Control as="select" value={this.state.userInput} onChange={this.onChange.bind(this)}>
                                                <option>Choose... </option>
                                                <option>Integrity of Data (DIU)</option>
                                                <option>Confidentiality of Data (DIU)</option>
                                                <option>Identification and authentication</option>
                                                <option>Access Control</option>
                                                <option>Authorization</option>
                                                <option>Availability of Data</option>
                                                <option>Confidentiality of stored data (DAR)</option>
                                                <option>Integrity of stored data (DAR)</option>
                                                <option>Strong Cryptography</option>
                                                <option>Privacy</option>
                                                <option>Physical Security</option>
                                                <option>Secure and Trusted communication</option>
                                                <option>Security audit & Monitoring</option>
                                                <option>Secure Data Management</option>
                                                <option>Non-repudiation</option>
                                                <option>Safety</option>
                                                <option>Secure Software/Firemware updates</option>
                                                <option>Secure Interface and Network Services</option>
                                                <option>Strong default security and privacy</option>
                                                <option>Data protection and compliance</option>
                                            </Form.Control>
                                            <br />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={this.addTodo.bind(this)}>Save</Button>
                                            <Button onClick={this.modalClose}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Card >
                            </Col>
                        </>
                    </Tab.Container >
                    {/* )} */}
                </Row>
                <br />
                <div className="mb-4 text-right" >
                    <button className="btn btn-primary shadow-2 mb-4">Previous Step</button>
                    <button className="btn btn-primary shadow-2 mb-4">Next Step</button>
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </div>
                </div> */}
            </Aux>
        )

    }
}

export default RiskDecision;