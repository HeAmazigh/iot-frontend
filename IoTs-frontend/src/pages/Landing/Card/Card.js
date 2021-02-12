import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';

import avatar3 from '../../assets/images/user/secure4.png';
import DEMO from "../../store/constant";
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <Col md={4} xl={3}>
            <Card className="card-border-color" >
                <div style={{ textAlign: "right", padding: "10px" }}> <i className="icon feather icon-maximize-2" /> </div>
                <Card.Body>
                    <div flashFn={this.props.flashFn} >
                        <div className="whenhovered" onClick={this.toggle}>
                            {this.state.hiddenPopupMenu && (
                                <div>
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
                                </div>
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
    )
}

export default Card
