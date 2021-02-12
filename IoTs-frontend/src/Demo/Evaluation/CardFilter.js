
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
import { Row, Col, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

class CardFilter extends Component {




    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <nav style={styles.navbar} class="navbar m-b-30 p-10">

                            <ul class="nav">
                                <li class="nav-item f-text active">
                                    <a class="nav-link text-secondary" href="#!">Filter By: <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button aria-haspopup="true" aria-expanded="false" id="bystatus" type="button" class="text-secondary nav-link dropdown-toggle btn btn-link">
                                            <span class="fa fa-line-chart"/>Status
                                      </button>
                                    </div>
                                </li>
                            </ul>
                            <ul class="nav">
                                <li class="nav-item f-text active">
                                </li>
                                <li class="nav-item f-text active">
                                    <a class="nav-link text-secondary" href="/#">Search: <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <DropdownButton
                                        style={{ float: "right" }}
                                        title={<><i class="fa fa-bars" /> </>}
                                        variant="secondary"
                                    >
                                        <Dropdown.Item eventKey="1">Resolved</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Closed</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Remove</Dropdown.Item>
                                    </DropdownButton>
                                </li>
                                <li class="nav-item">
                                    <InputGroup className="">
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
                                </li>

                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default CardFilter;

const styles = {

    navbar: {
        backgroundColor: " #fff",
        borderRadius: "4px",
        boxShadow: '0 1px 20px 0 rgba(69,90,100,.08)',
        padding: '1rem 1rem'
    }


}








