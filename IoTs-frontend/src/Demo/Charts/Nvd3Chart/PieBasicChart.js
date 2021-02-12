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

import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "One", y: 29, color: "#ff8a65"},
    {key: "Two", y: 0, color: "#f4c22b"},
    {key: "Three", y: 32, color: "#04a9f5"},
    {key: "Four", y: 196, color: "#3ebfea"},
    {key: "Five", y: 2, color: "#4F5467"},
    {key: "Six", y: 98, color: "#1de9b6"},
    {key: "Seven", y: 13, color: "#a389d4"},
    {key: "Eight", y: 5, color: "#FE8A7D"}
];

class PieBasicChart extends React.Component {

    render() {
        return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y"  />
    }
}

export default PieBasicChart;