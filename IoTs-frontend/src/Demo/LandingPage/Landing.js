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
//landing page
import React, { Component } from 'react';
import { Tabs, Tab, Row, Col, Card, Button } from 'react-bootstrap';
import './app.css';
import Aux from "../../hoc/_Aux";
import avatar2 from '../../assets/images/user/secure4.png';
import avatar3 from '../../assets/images/user/secure4.png';
import DEMO from "../../store/constant";
import { Link } from 'react-router-dom';

const evStop = ev => {
  ev.preventDefault();
  ev.stopPropagation();
  ev.nativeEvent.stopImmediatePropagation();
};

class Landing extends Component {

//Initial State
  state = { hiddenPopupMenu: true };
// Togle function
  toggle = () => {
    this.setState({ hiddenPopupMenu: !this.state.hiddenPopupMenu });
  };
  // Button Click
  clkBtn = (ev, msg) => {
    evStop(ev);
    this.props.flashFn(msg);
  };

  render() {


    return (

      <Aux>
        <Row>
          <Col>
            <Tabs variant="pills" defaultActiveKey="all" className="mb-3">
              {/* Tab All card element */}
              <Tab eventKey="all" title="All" >
                <Row>
                  <Col md={4} xl={3}>
                    <Card className="card-border-color" >
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr />
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px'}} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Business Questionnaire</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>

                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                             <>
                             <div style={{ textAlign: "left", padding: "10px" }}>
                               <br />
                               <h4 style={{color:"whitesmoke"}}> Security Profile</h4>
                                <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                             </div>
                              <hr/>
                              <div>
                             
                              <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                <i className="icon feather icon-bookmark" /> More Details
                             </Button>
                           <Link to="/security-profile-questionnaire">  <Button style={{borderRadius:"20px"}} variant="primary">
                                <i className="icon feather icon-eye" />  View Board
                              </Button> </Link>
                             </div>
                             </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar3} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Security Profile</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                               <>
                               <div style={{ textAlign: "left", padding: "10px" }}>
                                 <br />
                                 <h4 style={{color:"whitesmoke"}}> Standard Catalogue</h4>
                                  <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                               </div>
                                <hr/>
                                <div>                              
                                <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                  <i className="icon feather icon-bookmark" /> More Details
                               </Button>
                               <Button style={{borderRadius:"20px"}} variant="primary">
                                  <i className="icon feather icon-eye" />  View Board
                                </Button>
                               </div>
                               </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Standard Catalogue</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Labs/CABs Catalogue</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>                             
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Labs/CABs Catalogue</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Certified Products</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>                             
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Certified Products</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}>Update Certificate</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>                             
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Update Certificate</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Disclose Vulnerability</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Disclose Vulnerability</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Certify My Solution</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Certify My Solution</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}>Evaluation Tools</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Link to="/evaluation">  <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button> </Link>
                              </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Evaluation Tools</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
             {/* Tab Requirement card element */}
              <Tab eventKey="requirement" title="Requirement">
                <Row>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Update Certificate</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Update Certificate</h4>
                          <dd >A description list is perfect for defining terms.</dd>


                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Disclose Vulnerability</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Disclose Vulnerability</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                               <>
                               <div style={{ textAlign: "left", padding: "10px" }}>
                                 <br />
                                 <h4 style={{color:"whitesmoke"}}> Certify My Solution</h4>
                                  <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                               </div>
                                <hr/>
                                <div>                               
                                <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                  <i className="icon feather icon-bookmark" /> More Details
                               </Button>
                               <Button style={{borderRadius:"20px"}} variant="primary">
                                  <i className="icon feather icon-eye" />  View Board
                                </Button>
                               </div>
                               </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Certify My Solution</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Evaluation Tools</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
             {/* Tab Design card element */}
              <Tab eventKey="design" title="Design">
                <Row>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Standard Catalogue</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Labs/CABs Catalogue</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                               <>
                               <div style={{ textAlign: "left", padding: "10px" }}>
                                 <br />
                                 <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                  <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                               </div>
                                <hr/>
                                <div>                               
                                <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                  <i className="icon feather icon-bookmark" /> More Details
                               </Button>
                               <Button style={{borderRadius:"20px"}} variant="primary">
                                  <i className="icon feather icon-eye" />  View Board
                                </Button>
                               </div>
                               </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Certified Products</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
             {/* Tab Prelaunch card element */}
              <Tab eventKey="prelaunch" title="PreLaunch">
                <Row>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Security Profile</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Standard Catalogue</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Labs/CABs Catalogue</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
             {/* Tab Postlaunch card element */}
              <Tab eventKey="postlaunch" title="PostLaunch">
                <Row>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                             <>
                             <div style={{ textAlign: "left", padding: "10px" }}>
                               <br />
                               <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                             </div>
                              <hr/>
                              <div>                             
                              <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                <i className="icon feather icon-bookmark" /> More Details
                             </Button>
                             <Button style={{borderRadius:"20px"}} variant="primary">
                                <i className="icon feather icon-eye" />  View Board
                              </Button>
                             </div>
                             </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Business Questionnaire</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>                           
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Security Profile</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} xl={3}>
                    <Card>
                      <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                      <Card.Body>
                        <div flashFn={this.props.flashFn} >
                          <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                              <>
                              <div style={{ textAlign: "left", padding: "10px" }}>
                                <br />
                                <h4 style={{color:"whitesmoke"}}> Business Questionnaire</h4>
                                 <p style={{paddingBottom:"20px"}} >some lorem ipsum description for this card </p>  
                              </div>
                               <hr/>
                               <div>
                              
                               <Button style={{borderRadius:"20px"}}variant="outline-primary">
                                 <i className="icon feather icon-bookmark" /> More Details
                              </Button>
                              <Button style={{borderRadius:"20px"}} variant="primary">
                                 <i className="icon feather icon-eye" />  View Board
                               </Button>
                              </div>
                              </>
                            )}
                          </div>
                        </div>
                        <div style={{ textAlign: "center", }}>
                          <div className="m-r-10 photo-table">
                            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{ width: '60px' }} src={avatar2} alt="activity-user" /></a>
                          </div>
                          <br /> <br />
                          <h4 className="card-title">Standard Catalogue</h4>
                          <dd >A description list is perfect for defining terms.</dd>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Aux>
    );
  };
}

export default Landing;