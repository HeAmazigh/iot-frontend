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

// function generateNumber(min, max) {
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

function getDatum() {
    // let sin = [],
    //     sin2 = [],
    //     sin3 = [];

    // const len =  35 + (Math.random() * (70-35));
    // for (let i = 0; i < len; i++) {
    //     sin.push({
    //         'x': i,
    //         'y': generateNumber(0, 60)
    //     });
    //     sin2.push({
    //         'x': i,
    //         'y': generateNumber(0, 100)
    //     });
    //     sin3.push({
    //         'x': i,
    //         'y': generateNumber(0, 30)
    //     });
    // }
    return [
        {
            values: [{ "x":1, 'y':1},{ "x": 2, 'y':2},{ "x": 3, 'y':4}],
            key: 'Availability',
            color: '#EA4228'
        },
        {
            values: [{ "x":1, 'y':3},{ "x": 2, 'y':2},{ "x": 3, 'y':3}],
            key: 'Integrity',
            color: '#fa9107'
        },
        {
            values: [{ "x":1, 'y':4},{ "x": 2, 'y':3},{ "x": 3, 'y':1}],
            key: 'Confidentiality',
            color: '#56c42f',
            area: true
        }
    ];
}

class MultiBarChart extends React.Component {

    render() {
        const data = getDatum();
        return <NVD3Chart type="multiBarChart" datum={data} x="x" y="y" height={300} showValues groupSpacing={0.3} />
    }
}

export default MultiBarChart;