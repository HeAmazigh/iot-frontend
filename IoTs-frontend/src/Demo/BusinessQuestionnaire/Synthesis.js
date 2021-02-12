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
/* eslint-disable no-template-curly-in-string */

//Synthesis dashboard 
import React, { Component } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import CardFilter from "./CardFilter"
import ReactSpeedometer from "react-d3-speedometer";
import Aux from "../../hoc/_Aux";
import Card from "../../pages/components/MainCard";
import MultiBarChart from "../Charts/Nvd3Chart/MultiBarChart";

import BarDiscreteChart from "../Charts/Nvd3Chart/BarDiscreteChart";
import '../LandingPage/app.css'
class Synthesis extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <CardFilter />
                        <Tabs variant="pills" defaultActiveKey="managerial" className="mb-3">
                            <Tab eventKey="managerial" title="Managerial Synthesis" >
                                <Row>
                                    <Col xl={3}>
                                        <Card title='Project Information' isOption>
                                            <p>
                                                <dl className="dl-horizontal row">
                                                    <dt className="col-sm-5">Application Owner</dt>
                                                    <dd className="col-sm-7"> <mark> Roland Atoui</mark></dd>
                                                    <dt className="col-sm-5">Interview Date</dt>
                                                    <dd className="col-sm-7"> <mark> 24/08/2020 </mark></dd>
                                                    <dt className="col-sm-5">Project Manager</dt>
                                                    <dd className="col-sm-7"><mark> Ayman Khalil </mark></dd>
                                                    <br /> <br />
                                                    <dt className="col-sm-9">  Product/Solution Description</dt>
                                                    <br />
                                                    <dd className="col-sm-9">The plant under consideration is a remotely managed ICS handling the water supply of an urban area with 500,000 inhabitants.
                                                    The ICS is geographically distributed over several sites(reservoirs, booster stations, pumps).
                                                    Remote sites communicate with the central site via PSTN1 lines or GPRS2 connections.</dd>
                                                </dl>
                                            </p>
                                        </Card>
                                    </Col>
                                    <Col xl={9}>
                                        <Row>
                                            <Col md={6}>
                                                <Card title='Project Complexity' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={4}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText= "Score :${value}" 
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        />
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card title='Project Sensitivity' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={2}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText='Score :${value}'  
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        />
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card title='Impact' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={4}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText="  Score :${value}"
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        />
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card title='Impacts Categories' isOption>
                                                    <BarDiscreteChart />
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="actions" title="Actions" >
                            </Tab>
                            <Tab eventKey="technical" title="Technical Dashboard  " >
                                <Row>
                                    <Col xl={3}>
                                        <Card title='ANSSI ICS Classification' isOption>
                                            <p>
                                                <dl className="dl-horizontal row">
                                                    <dt className="col-sm-3"><mark>Class 3 :</mark> </dt>
                                                    <dd className="col-sm-9">
                                                        ICSs for which the risk or impact of an attack is critical. In this class, the obligations are heightened and the conformity of ICSs is verified by the state authority or an accredited body </dd>
                                                </dl></p>
                                        </Card>
                                    </Col>
                                    <Col xl={9}>
                                        <Row>
                                            <Col md={4}>
                                                <Card title='Users' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={3}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText="  Score :${value}"
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        />
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card title='Attackers' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={2}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText="  Score :${value}"
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        />
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card title='Exposure' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={3}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText="  Score :${value}"
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        /></p>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card title='Likelihood' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={3}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText="  Score :${value}"
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        />
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card title='Overview' isOption>
                                                    <p style={{ textAlign: "center" }}>
                                                        <ReactSpeedometer
                                                            //fluidWidth
                                                            needleHeightRatio={0.7}
                                                            ringWidth="40"
                                                            maxValue={5}
                                                            minValue={0}
                                                            value={4}
                                                            needleTransitionDuration={4000}
                                                            needleTransition="easeElastic"
                                                            currentValueText="  Score :${value}"
                                                            needleColor="gray"
                                                            startColor="green"
                                                            segmentColors={["#56c42f", "#fa9107", "#EA4228", "#2c2c2e"]}
                                                            segments={4}
                                                            endColor="blue"
                                                            height={250}
                                                            width={350}
                                                            maxSegmentLabels={1}
                                                        // flu idWidth={true}
                                                        />
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card title='Impacts' isOption>
                                                    <MultiBarChart />
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Tab>
                        </Tabs>

                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Synthesis;