
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
import {
    Row,
    Form,
    Col,
    Button,
    Card,
    Collapse
} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";

class InstallationGuidance extends Component {

    state = {
        isBasic: false,
        isMultiTarget: [],
        accordionKey: 1
    };
    // handle all accordio list item
    targetHandler = target => {
        if (this.state.isMultiTarget.some(item => item === target)) {
            this.setState(prevState => {
                return {
                    isMultiTarget: prevState.isMultiTarget.filter(item => item !== target)
                }
            });
        } else {
            this.setState(prevState => {
                return {
                    isMultiTarget: [...prevState.isMultiTarget, target]
                }
            });
        }
    };
    //Map all target
    multiTargetHandler = () => {
        const allTarget = ['target1', 'target2', 'target3', 'target4', 'target5'];
        allTarget.map(target => {
            this.targetHandler(target);
            return false;
        });
    };


    render() {
        const { isMultiTarget, accordionKey } = this.state;
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 1) ? 1 : 0 })}
                                        aria-controls="accordion1"
                                        aria-expanded={accordionKey === 1}>
                                        EIA_SF.2
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 1}>
                                <div id="accordion1">
                                    <Card.Body>
                                        <Button variant="secondary" onClick={() => this.targetHandler('target1')} aria-controls="target1" aria-expanded={isMultiTarget.some(target => target === 'target1')}>Security Goal</Button>
                                        <Button variant="secondary" onClick={() => this.targetHandler('target2')} aria-controls="target2" aria-expanded={isMultiTarget.some(target => target === 'target2')}> Security Requirement </Button>
                                        <Button variant="secondary" onClick={() => this.targetHandler('target3')} aria-controls="target3" aria-expanded={isMultiTarget.some(target => target === 'target3')}>Vendor Instructions</Button>
                                        <Button variant="secondary" onClick={() => this.targetHandler('target4')} aria-controls="target4" aria-expanded={isMultiTarget.some(target => target === 'target4')}>Vendor Responses</Button>
                                        <Button variant="secondary" onClick={() => this.targetHandler('target5')} aria-controls="target5" aria-expanded={isMultiTarget.some(target => target === 'target5')}>Evaluator Feedback</Button>
                                        <Button variant="secondary" onClick={this.multiTargetHandler}>Toggle All</Button>
                                        <Row>
                                            <Col>
                                                <Card className="mt-2">
                                                    <Collapse in={isMultiTarget.some(target => target === 'target1')}>
                                                        <div id="target1">
                                                            <Card.Header> Security Goal</Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>
                                                                    DIU INTEGRITY                                                </Card.Text>
                                                            </Card.Body>
                                                        </div>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="mt-2">
                                                    <Collapse in={isMultiTarget.some(target => target === 'target2')}>
                                                        <div id="target2">
                                                            <Card.Header> Security Requirement Definition </Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>
                                                                    The device SHALL Use protocols and mechanisms able to represent and manage trust and trust relationships.                                                </Card.Text>
                                                            </Card.Body>
                                                        </div>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="mt-2">
                                                    <Collapse in={isMultiTarget.some(target => target === 'target3')}>
                                                        <div id="target3">
                                                            <Card.Header> Vendor Instructions </Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>
                                                                    <ul className="list-unstyled">
                                                                        <li>
                                                                            <ul>
                                                                                <li>
                                                                                    Provide a response of how the requirement is fulfiled.
                                                                                     </li>
                                                                                <li>
                                                                                    Where it is not possible to implement the functionality on the device, the vendor SHALL justify how this requirement is fulfiled by the device's support infrastructure.
                                                                             </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </div>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="mt-2">
                                                    <Collapse in={isMultiTarget.some(target => target === 'target4')}>
                                                        <div id="target4">
                                                            <Card.Header> Vendor Responses </Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>

                                                                    <Form.Control as="textarea" rows="3" />

                                                                </Card.Text>
                                                            </Card.Body>
                                                        </div>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="mt-2">
                                                    <Collapse in={isMultiTarget.some(target => target === 'target5')}>
                                                        <div id="target5">
                                                            <Card.Header> Evaluator Feedback </Card.Header>
                                                            <Card.Body>
                                                                <Card.Text>
                                                                    <Form.Control as="textarea" rows="3" />
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </div>
                                                    </Collapse>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 2) ? 2 : 0 })}
                                        aria-controls="accordion2"
                                        aria-expanded={accordionKey === 2}>
                                        EIA_SF.15
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 2}>
                                <div id="accordion2">
                                    <Card.Body>
                                        <Card.Body>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target1')} aria-controls="target1" aria-expanded={isMultiTarget.some(target => target === 'target1')}>Security Goal</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target2')} aria-controls="target2" aria-expanded={isMultiTarget.some(target => target === 'target2')}> Security Requirement </Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target3')} aria-controls="target3" aria-expanded={isMultiTarget.some(target => target === 'target3')}>Vendor Instructions</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target4')} aria-controls="target4" aria-expanded={isMultiTarget.some(target => target === 'target4')}>Vendor Responses</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target5')} aria-controls="target5" aria-expanded={isMultiTarget.some(target => target === 'target5')}>Evaluator Feedback</Button>
                                            <Button variant="secondary" onClick={this.multiTargetHandler}>Toggle All</Button>
                                            <Row>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target1')}>
                                                            <div id="target1">
                                                                <Card.Header>
                                                                    Security Goal
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        DIU INTEGRITY
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target2')}>
                                                            <div id="target2">
                                                                <Card.Header> Security Requirement Definition </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        The device SHALL Use protocols and mechanisms able to represent and manage trust and trust relationships.                                                </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target3')}>
                                                            <div id="target3">
                                                                <Card.Header> Vendor Instructions </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <ul className="list-unstyled">
                                                                            <li>
                                                                                <ul>
                                                                                    <li>
                                                                                        Provide a response of how the requirement is fulfiled.
                                                                                    </li>
                                                                                    <li>
                                                                                        Where it is not possible to implement the functionality on the device, the vendor SHALL justify how this requirement is fulfiled by the device's support infrastructure.
                                                                                   </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target4')}>
                                                            <div id="target4">
                                                                <Card.Header> Vendor Responses </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <Form.Control as="textarea" rows="3" />
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target5')}>
                                                            <div id="target5">
                                                                <Card.Header> Evaluator Feedback </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <Form.Control as="textarea" rows="3" />
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                                        aria-controls="accordion3"
                                        aria-expanded={accordionKey === 3}>
                                        EIA_SF.17
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 3}>
                                <div id="accordion3">
                                    <Card.Body>
                                        <Card.Body>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target1')} aria-controls="target1" aria-expanded={isMultiTarget.some(target => target === 'target1')}>Security Goal</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target2')} aria-controls="target2" aria-expanded={isMultiTarget.some(target => target === 'target2')}> Security Requirement </Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target3')} aria-controls="target3" aria-expanded={isMultiTarget.some(target => target === 'target3')}>Vendor Instructions</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target4')} aria-controls="target4" aria-expanded={isMultiTarget.some(target => target === 'target4')}>Vendor Responses</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target5')} aria-controls="target5" aria-expanded={isMultiTarget.some(target => target === 'target5')}>Evaluator Feedback</Button>
                                            <Button variant="secondary" onClick={this.multiTargetHandler}>Toggle All</Button>
                                            <Row>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target1')}>
                                                            <div id="target1">
                                                                <Card.Header> Security Goal</Card.Header>

                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        DIU INTEGRITY                                                </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target2')}>
                                                            <div id="target2">
                                                                <Card.Header> Security Requirement Definition </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        The device SHALL Use protocols and mechanisms able to represent and manage trust and trust relationships.                                                </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target3')}>
                                                            <div id="target3">
                                                                <Card.Header> Vendor Instructions </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <ul className="list-unstyled">
                                                                            <li>
                                                                                <ul>
                                                                                    <li> Provide a response of how the requirement is fulfiled. </li>
                                                                                    <li>Where it is not possible to implement the functionality on the device, the vendor SHALL justify how this requirement is fulfiled by the device's support infrastructure.
                                                                             </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target4')}>
                                                            <div id="target4">
                                                                <Card.Header> Vendor Responses </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <Form.Control as="textarea" rows="3" />
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target5')}>
                                                            <div id="target5">
                                                                <Card.Header> Evaluator Feedback </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <Form.Control as="textarea" rows="3" />
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                                        aria-controls="accordion3"
                                        aria-expanded={accordionKey === 3}>
                                        EIA_SF.18
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 3}>
                                <div id="accordion3">
                                    <Card.Body>
                                        <Card.Body>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target1')} aria-controls="target1" aria-expanded={isMultiTarget.some(target => target === 'target1')}>Security Goal</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target2')} aria-controls="target2" aria-expanded={isMultiTarget.some(target => target === 'target2')}> Security Requirement </Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target3')} aria-controls="target3" aria-expanded={isMultiTarget.some(target => target === 'target3')}>Vendor Instructions</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target4')} aria-controls="target4" aria-expanded={isMultiTarget.some(target => target === 'target4')}>Vendor Responses</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target5')} aria-controls="target5" aria-expanded={isMultiTarget.some(target => target === 'target5')}>Evaluator Feedback</Button>
                                            <Button variant="secondary" onClick={this.multiTargetHandler}>Toggle All</Button>
                                            <Row>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target1')}>
                                                            <div id="target1">
                                                                <Card.Header> Security Goal</Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        DIU INTEGRITY                                                </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target2')}>
                                                            <div id="target2">
                                                                <Card.Header> Security Requirement Definition </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        The device SHALL Use protocols and mechanisms able to represent and manage trust and trust relationships.                                                </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target3')}>
                                                            <div id="target3">
                                                                <Card.Header> Vendor Instructions </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <ul className="list-unstyled">
                                                                            <li>
                                                                                <ul>
                                                                                    <li> Provide a response of how the requirement is fulfiled. </li>
                                                                                    <li>Where it is not possible to implement the functionality on the device, the vendor SHALL justify how this requirement is fulfiled by the device's support infrastructure.
                                                                             </li>
                                                                                </ul>
                                                                            </li>

                                                                        </ul>
                                                                    </Card.Text>                                                      </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target4')}>
                                                            <div id="target4">
                                                                <Card.Header> Vendor Responses </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <Form.Control as="textarea" rows="3" />
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target5')}>
                                                            <div id="target5">
                                                                <Card.Header> Evaluator Feedback </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <Form.Control as="textarea" rows="3" />
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                        <Card className="mt-2">
                            <Card.Header>
                                <Card.Title as="h5">
                                    <a href={DEMO.BLANK_LINK}
                                        onClick={() => this.setState({ accordionKey: (accordionKey !== 3) ? 3 : 0 })}
                                        aria-controls="accordion3"
                                        aria-expanded={accordionKey === 3}>
                                        EIA_SF.21
                                    </a>
                                </Card.Title>
                            </Card.Header>
                            <Collapse in={this.state.accordionKey === 3}>
                                <div id="accordion3">
                                    <Card.Body>
                                        <Card.Body>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target1')} aria-controls="target1" aria-expanded={isMultiTarget.some(target => target === 'target1')}>Security Goal</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target2')} aria-controls="target2" aria-expanded={isMultiTarget.some(target => target === 'target2')}> Security Requirement </Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target3')} aria-controls="target3" aria-expanded={isMultiTarget.some(target => target === 'target3')}>Vendor Instructions</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target4')} aria-controls="target4" aria-expanded={isMultiTarget.some(target => target === 'target4')}>Vendor Responses</Button>
                                            <Button variant="secondary" onClick={() => this.targetHandler('target5')} aria-controls="target5" aria-expanded={isMultiTarget.some(target => target === 'target5')}>Evaluator Feedback</Button>
                                            <Button variant="secondary" onClick={this.multiTargetHandler}>Toggle All</Button>
                                            <Row>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target1')}>
                                                            <div id="target1">
                                                                <Card.Header> Security Goal</Card.Header>

                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        DIU INTEGRITY
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target2')}>
                                                            <div id="target2">
                                                                <Card.Header> Security Requirement Definition </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        The device SHALL Use protocols and mechanisms able to represent and manage trust and trust relationships.                                                </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target3')}>
                                                            <div id="target3">
                                                                <Card.Header> Vendor Instructions </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>
                                                                        <ul className="list-unstyled">
                                                                            <li>
                                                                                <ul>
                                                                                    <li> Provide a response of how the requirement is fulfiled. </li>
                                                                                    <li>Where it is not possible to implement the functionality on the device, the vendor SHALL justify how this requirement is fulfiled by the device's support infrastructure.
                                                                             </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target4')}>
                                                            <div id="target4">
                                                                <Card.Header> Vendor Responses </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        <Form.Control as="textarea" rows="3" />

                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                                <Col>
                                                    <Card className="mt-2">
                                                        <Collapse in={isMultiTarget.some(target => target === 'target5')}>
                                                            <div id="target5">
                                                                <Card.Header> Evaluator Feedback </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        <Form.Control as="textarea" rows="3" />

                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </div>
                                                        </Collapse>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card.Body>
                                </div>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default InstallationGuidance;









