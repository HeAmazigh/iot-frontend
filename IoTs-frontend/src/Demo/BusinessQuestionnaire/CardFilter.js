
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
import { Row, Col } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";

class CardFilter extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <nav class="navbar m-b-30 p-10">
                            <ul class="nav">
                                <li class="nav-item f-text active">
                                    <a class="nav-link text-secondary" href="#!">Filter: <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button aria-haspopup="true" aria-expanded="false" id="dropdown-basic" type="button" class="text-secondary nav-link dropdown-toggle btn btn-link">
                                            <span class="fa fa-clock-o"></span> By Date
                                </button>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button aria-haspopup="true" aria-expanded="false" id="bystatus" type="button" class="text-secondary nav-link dropdown-toggle btn btn-link"><span class="fa fa-line-chart"></span> By Score
                            </button>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button aria-haspopup="true" aria-expanded="false" id="bypriority" type="button" class="text-secondary nav-link dropdown-toggle btn btn-link">
                                            <span class="fa fa-list-ol"></span> By Project
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <div class="nav-item nav-grid f-view"><span class="m-r-15">View Mode: </span>
                                <button type="button" class="btn btn-primary btn-icon m-0 mr-1" data-toggle="tooltip" data-placement="top" title="list view">
                                    <i class="fa fa-list-ul">
                                    </i>
                                </button>
                                <button type="button" class="btn btn-primary btn-icon m-0" data-toggle="tooltip" data-placement="top" title="grid view">
                                    <i class="fa fa-th-large">
                                    </i>
                                </button>
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default CardFilter;







