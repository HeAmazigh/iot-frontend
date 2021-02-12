
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

//Data
const datum = [
    {
        key: "Cumulative Return",
        values: [{
            "label": "Financial",
            "value": 1,
            "color": "#fa9107"
        }, {
            "label": "Brand Image",
            "value": 4,
            "color": "#dede2f"
        }, {
            "label": "Competitiveness",
            "value": 2,
            "color": "#EA4228"
        }, {
            "label": "Remediation",
            "value": 3,
            "color": "#56c42f"
        }, ]
    }
];

class BarDiscreteChart extends React.Component {

    render() {
        return <NVD3Chart tooltip={{enabled:true}} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />
    }
}

export default BarDiscreteChart;