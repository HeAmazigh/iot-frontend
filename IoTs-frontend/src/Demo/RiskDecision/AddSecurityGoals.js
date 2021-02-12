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
import { Row, Col, Card, Form} from 'react-bootstrap';
import { Empty } from 'antd';
import axios from 'axios';
import Aux from "../../hoc/_Aux";

import "react-simple-tree-menu/dist/main.css";
import "../LandingPage/app.css";
import 'antd/dist/antd.css'

class AddSecurityGoals extends Component {

    constructor() {
        super();
        this.state = {
            secgoals: [],
            userInput: '',
            items: [],      
        };
        this.handleClick = this.handleClick.bind(this);  
    }
    /****************** OnChange************************* */
    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    /****************** OnChange************************* */

    /****************** Add Security goal************************* */

    addSecGoal(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    /****************** Add Security goal************************* */
    /****************** Delete Security goal************************* */

    deleteSecGoal(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    /****************** Delete Security goal************************* */
    /****************** Render Security goal************************* */

    // add item to deleteTodo.bind(this, item)
    renderSecGoals() {
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

                                    <i onClick={this.deleteSecGoal.bind(this, item)} style={{ color: "#b12222" }} class="fa fa-trash fa-lg   float-right  m-0" />

                                </Card.Header>
                            </Card>
                        </Col>
                    </Row>
                </div>
            );
        });
    }
    /****************** RenderToDo************************* */

    handleClick(currentTab) {
        this.setState({ currentTab });
    }

    componentDidMount() {
        axios.get('/api/securitygoals')
            .then(res => {
                const secgoals = res.data;
                this.setState({ secgoals });
            })
    }

    render() {

        const { secgoals } = this.state;

        return (
            <Aux>
                <Row>
                    <Col>
                        <div className="media float-right friendlist-box align-items-center justify-content-center m-b-20">
                            <div className="m-r-10 photo-table">
                                <Form.Control as="select" value={this.state.userInput} onChange={this.onChange.bind(this)}>
                                    <option>Choose... </option>
                                    {secgoals.map(item => (
                                        <>
                                            <option>  {item.SECGOALS}   </option>
                                        </>
                                    ))}
                                </Form.Control>
                            </div>
                            <div className="media-body">
                                <span className="float-right d-flex  align-items-center">
                                    <button onClick={this.addSecGoal.bind(this)} type="button" class=" btn btn-icon btn-secondary   m-0" >
                                    <i class="fa fa-plus" />
                                </button>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            {this.renderSecGoals() === 0 ?
                                <div style={{ padding: "150px" }}>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span> No Security Goal </span>} />
                                </div>
                                :
                                this.renderSecGoals()
                            }
                            <br />
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
                        </div>
                    </Col>
                </Row>
            </Aux>
        )

    }
}
export default AddSecurityGoals;