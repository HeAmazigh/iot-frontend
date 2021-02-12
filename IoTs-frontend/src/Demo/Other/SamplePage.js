
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
import { Row, Col } from 'react-bootstrap';
import avatar2 from '../../assets/images/solution.png';
import Aux from "../../hoc/_Aux";
import Card from "../../pages/components/MainCard";

class SamplePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Coming Soon' isOption>
                            <p style={{textAlign:"center"}} >
                                <img className="rounded-circle"  src={avatar2} alt="activity-user" />
                                <h3>
                                    Coming Soon....
                            </h3>
                            </p >
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;