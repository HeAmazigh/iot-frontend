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


/**
 * The event is fired after a user clicks the 'Complete' button and finishes a survey. Use this event to send the survey data to your web server.
 * sender - the survey object that fires the event.
 * options.showDataSaving(text) - call this method to show that the survey is saving survey data on your server. The text is an optional parameter to show a custom message instead of default.
 * options.showDataSavingError(text) - call this method to show that an error occurred while saving the data on your server. If you want to show a custom error, use an optional text parameter.
 * options.showDataSavingSuccess(text) - call this method to show that the data was successfully saved on the server.
 * options.showDataSavingClear - call this method to hide the text about the saving progress.
 */
//   onComplete = (survey, options) => {
//     console.log(`[MySurvey.js] onComplete:: survey: ${JSON.stringify(survey.data)} \n options: ${JSON.stringify(options)}`);
//     this.setState({
//         isCompleted: true
//     });
// }

/**
 * The event is fired when the current page has been changed to another page.
 * Typically it happens when a user click on 'Next' or 'Prev' buttons.
 * sender - the survey object that fires the event.
 * option.oldCurrentPage - a previous current/active page.
 * option.newCurrentPage - a new current/active page.
 * option.isNextPage - commonly means, that end-user press the next page button. In general,
 *                     it means that options.newCurrentPage is the next page after options.oldCurrentPage
 * option.isPrevPage - commonly means, that end-user press the previous page button.
 *                     In general, it means that options.newCurrentPage is the previous page before options.oldCurrentPage
 */
// onCurrentPageChanged = (survey, options) =>  {
//     console.log(`[MySurvey.js] onCurrentPageChanged:: survey: ${JSON.stringify(survey)} \n options: ${JSON.stringify(options)}`);
// }

/**
 * Validate a question
 * The event is fired on validating value in a question. You can specify a custom error message using options.error.
 * The survey blocks completing the survey or going to the next page when the error messages are displayed.
 * sender - the survey object that fires the event.
 * options.question - a validated question.
 * options.name - a question name.
 * options.value - the current question value (answer).
 * options.error - an error string. It is empty by default.
 */
// onValidateQuestion = (survey, options) => {
//     console.log(`[MySurvey.js] onValidateQuestion:: options: ${JSON.stringify(options)}`);
// }


//SecurityProfileQuestionnaire
import React, { Component } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import Aux from "../../hoc/_Aux";
import * as Showdown from "showdown";
import "react-simple-tree-menu/dist/main.css";
import * as Survey from 'survey-react';
import "../LandingPage/app.css";
import multipurpose from "../../assets/images/multipurpose.png";
import cpu from "../../assets/images/cpu.png";
import discrete from "../../assets/images/discrete.png";
import actuator from "../../assets/images/actuator.png";
import network from "../../assets/images/network.png";
import boot from "../../assets/images/bootprocess.png";
import drivers from "../../assets/images/drivers.png";
import programmeconsole from "../../assets/images/programingconsolesecpro.png";
import firmware from "../../assets/images/appsfirmware.png";
import buzzer from "../../assets/images/buzzer.png";
import physical from "../../assets/images/physicalports.png";
import logfil from "../../assets/images/logfil.png";
import usercredential from "../../assets/images/usercredentiel.png";
import sensor from "../../assets/images/sensor.png";

import "antd/dist/antd.css";
//import "survey-react/survey.css";
import "survey-react/modern.css";

//Survey.StylesManager.applyTheme("modern");
Survey.StylesManager.applyTheme("modern");
const json = {
    requiredText: " (*)",
    //horizontalScroll: false,
    showNavigationButtons: "top",
    showPageTitles: false,
    showQuestionNumbers: "off",
    showProgressBar: "top",
    progressBarType: "buttons",
    // focusFirstQuestionAutomatic:true,

    pages: [

        //connectivity 
        {
            title: "<span class='v' style=' align:center '>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
            "name": "page1",
            "navigationTitle": "Collector",
            "navigationDescription": "Collector's info",
            elements: [{

                // isRequired: true,
                type: "panel",
                name: "panel3",
                title: "« Please fill in the questionnaire below in order to complete this step »",
                questions: [
                    {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "question1",
                        //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        title: "Choose the connectivity type of the ICS",

                        isRequired: true,
                        defaultValue: '1',
                        colCount: 1,
                        choices: [
                            {
                                value: 1,
                                text: "Connectivity1 - Isolated ICS ",
                                score: 1
                            },
                            {
                                value: 2,
                                text: "Connectivity2 - ICS connected to corporate network",
                                score: 2
                            },
                            {
                                value: 3,
                                text: "Connectivity3 - ICS connected to corporate network usin wireless technology",
                                score: 3
                            },
                            {
                                value: 4,
                                value: "Connectivity4 - Distributed ICS with public infrastructure",
                                score: 5
                            }
                        ]
                    },
                ]
            },

            {
                "type": "comment",
                "name": "comment-connectivity",
                // "visibleIf": "{manyusers} notempty",
                startWithNewLine: "true",
                "title": "Comments"
            },


            ],

        },

        /******************************************************* Functionality ********************************************** */

        {
            name: "page1",
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                // isRequired: true,
                type: "panel",
                name: "panel0",
                "title": "Functionality of the Industrial Control System",
                //tooltip: " mira mira1 This it a tooltip textext for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                //isRequired: true,

                questions: [

                    {
                        type: "imagepicker",
                        name: "CIM0",
                        title: "CIM0",
                        tooltip: "non-communicating sensors and actuators",
                        // defaultValue:'2',
                        showLabel: true,
                        "imageHeight": 50,
                        "imageWidth": 50,
                        //defaultValue: "2",
                        validators: [{
                            type: "answercount",
                            text: "You should select 0 or 4 images",
                            minCount: 0,
                            maxCount: 4
                        }],

                        choices: [{
                            value: 1,
                            score: 1,
                            text: "Actuator",
                            imageLink: `${actuator}`

                        }, {
                            value: 2,
                            score: 1,
                            text: "Sensor",
                            imageLink: `${sensor}`
                        }, {
                            value: 3,
                            score: 1,
                            text: "Remote I/O",
                            imageLink: `${cpu}`
                        },
                            /* {
                              value: "Actuato",
                              score: 0,
                              imageLink: "images/sensor.jpg"
                             }*/
                        ],
                        multiSelect: true,
                    },

                    /*******************/
                    {
                        type: "imagepicker",
                        name: "CIM1",
                        tooltip: "Programmable Logic Controller (PLC) and Analysers",

                        startWithNewLine: "false",
                        showLabel: true,
                        "imageHeight": 50,
                        "imageWidth": 50,
                        // defaultValue: ['Programming console'],
                        validators: [{
                            type: "answercount",
                            text: "You should select 0 or 4 images",
                            minCount: 0,
                            maxCount: 4
                        }],
                        choices: [{
                            value: "PLC",
                            score: 1,
                            text: "PLC",
                            imageLink: `${programmeconsole}`
                        }, {
                            value: "Programming console",
                            score: 3,
                            text: "Prog console",
                            imageLink: `${programmeconsole}`
                        },
                        {
                            value: "HMI",
                            score: 1,
                            text: "HMI",
                            imageLink: `${cpu}`
                        },
                        {
                            value: "Analyzer",
                            score: 1,
                            text: "Analyzer",
                            imageLink: `${cpu}`
                        }],
                        multiSelect: true
                    },

                    /**********************/
                    {
                        type: "imagepicker",
                        name: "CIM2",
                        tooltip: "Supervisory Control and Data Acquisition (SCADA)",

                        showLabel: true,
                        "imageHeight": 50,
                        "imageWidth": 50,
                        validators: [{
                            type: "answercount",
                            text: "You should select 0 or 4 images",
                            minCount: 0,
                            maxCount: 4
                        }],
                        choices: [{
                            value: "Database",
                            score: 2,
                            text: "Database",
                            imageLink: `${cpu}`
                        }, {
                            value: "SCADA",
                            score: 2,
                            text: "SCADA",
                            imageLink: `${cpu}`
                        }, {
                            value: "Engineering",
                            score: 3,
                            text: "Engineering",
                            imageLink: `${cpu}`


                        }, {
                            value: "Historian",
                            score: 2,
                            text: "Historian",
                            imageLink: `${cpu}`
                        }],
                        multiSelect: true
                    },

                    /*********************/

                    {
                        type: "imagepicker",
                        name: "CIM3",
                        startWithNewLine: "false",
                        tooltip: "Manufacturing Execution System (MES)",

                        showLabel: true,
                        "imageHeight": 50,
                        "imageWidth": 50,
                        validators: [{
                            type: "answercount",
                            text: "You should select 0 or 4 images",
                            minCount: 0,
                            maxCount: 4
                        }],

                        choices: [{
                            value: "MES",
                            score: 3,
                            text: "MES",
                            imageLink: `${cpu}`
                        }, {
                            value: "Historian",
                            score: 3,
                            text: "Historian",
                            imageLink: `${cpu}`
                        }, {
                            value: "Database",
                            score: 3,
                            text: "Database",
                            imageLink: `${cpu}`

                        }, {
                            value: "Remote SCADA",
                            score: 3,
                            text: "Remote SCADA",
                            imageLink: `${cpu}`
                        }],
                        multiSelect: true
                    }

                ]
            }],


        },


        //users industriel system 

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                type: "panel",
                name: "panel1",
                // "title": "Users",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                questions: [

                    /************************************/

                    {
                        "type": "radiogroup",
                        isRequired: true,
                        "name": "question2",
                        "renderAs": "prettycheckbox",
                        defaultValue: 'Less than 5',
                        "choices": [{
                            value: "Less than 5",
                            score: 5
                        }, {
                            value: "Between 5 and 20",
                            score: 5
                        }, {
                            value: "More than 20",
                            score: 5
                        },

                        ],

                        "colCount": 0,
                        // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "How many users will have access to the application or configuration side of the solution? ",
                        //popupdescription: "anyone with an access to any connected machine within the scope of the project.",

                    }, {
                        "type": "comment",
                        "name": "comment1",
                        // "visibleIf": "{manyusers} notempty",
                        startWithNewLine: "false",
                        "title": "Comments"
                    },

                    /***************************************/
                    {
                        "type": "radiogroup",
                        "name": "question3",
                        "renderAs": "prettycheckbox",
                        // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "How is the access control to the system enforced?",
                        "isRequired": true,
                        defaultValue: ['4'],
                        "choices": [{
                            "value": "3",
                            score: 1,
                            text: "Individual credentials are granted role based access to the system."
                        }, {
                            "value": "2",
                            score: 2,
                            text: "Individual credentials are required to access the system."
                        }, {
                            "value": "5",
                            score: 3,
                            text: "A password is required to access the system"
                        },

                        {
                            "value": "1",
                            score: 4,
                            text: "The same password may be used for multiple applications"
                        },
                        {
                            "value": "4",
                            score: 5,
                            text: "No password is required"
                        }
                        ]
                    }, {
                        "type": "comments",
                        "name": "com2",
                        //width:"40px",
                        startWithNewLine: "false",
                        // "visibleIf": "{access_control} notempty",
                        "title": "Comments"
                    },


                ],
            }],

        },
        // Second page users
        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{


                type: "panel",
                name: "panel2",
                //"title": "Users",
                //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                questions: [

                    {

                        "type": "radiogroup",
                        "name": "question4",
                        "renderAs": "prettycheckbox",
                        //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "Who can access the solution or system?",
                        "isRequired": true,
                        defaultValue: ['5'],
                        "choices": [{
                            "value": "3",
                            score: 1,
                            "text": "Authorised certified and controlled users "
                        }, {
                            "value": "2",
                            score: 2,
                            "text": "Authorised and certified users "
                        }, {
                            "value": "1",
                            score: 2,
                            "text": "Authorised and certified external users "
                        }, {
                            "value": "4",
                            score: 3,
                            "text": "Authorised users "
                        }, {
                            "value": "5",
                            score: 4,
                            "text": "Unauthorised users "
                        }]

                    }, {
                        "type": "comment",
                        "name": "com3",
                        //"visibleIf": "{solution_system} notempty",
                        startWithNewLine: "false",
                        "title": "Comments"
                    },


                    /****************************/

                    {
                        "type": "radiogroup",
                        "name": "question5",
                        "renderAs": "prettycheckbox",
                        // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "Are all users access levels based on their individual role profile and responcibilities?",
                        "isRequired": true,
                        defaultValue: ['2'],
                        "choices": [{
                            "value": "3",
                            score: 1,
                            "text": "Yes "
                        }, {
                            "value": "2",
                            score: 5,
                            "text": "No "
                        },]
                    }, {
                        "type": "comment",
                        "name": "com4",
                        startWithNewLine: "false",
                        // "visibleIf": "{Respon} notempty",
                        "title": "Comments"
                    },
                    /*************************************/
                ],
            }],

        },


        //Attackers

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{


                type: "panel",
                name: "panel3",
                //"title": "Attackers",
                //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                questions: [

                    /************************************/
                    {
                        "type": "checkbox",
                        "renderAs": "prettycheckbox",
                        "name": "question6",
                        defaultValue: ['Others(Australia, South America..)'],
                        "isRequired": true,
                        "choices": [{
                            value: "Others(Australia, South America..)",
                            score: 1
                        }, {
                            value: "Europe",
                            score: 2
                        }, {
                            value: "Asia",
                            score: 3
                        }, {
                            value: "North America",
                            score: 4
                        },

                        ],
                        "colCount": 1,

                        //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "Where is the target system/projet located? "


                    }, {
                        "type": "comment",
                        "name": "com5",
                        //"visibleIf": "{target} notempty",
                        startWithNewLine: "false",
                        "title": "Comments"
                    },
                    /************************************** */
                    {
                        "type": "radiogroup",
                        "renderAs": "prettycheckbox",
                        "name": "question7",
                        //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "Is the target system installed on multiple sites in the continent selected above?",
                        "isRequired": true,
                        defaultValue: ['2'],
                        "colCount": 0,
                        "choices": [{
                            "value": "3",
                            score: 1,
                            "text": "yes"
                        }, {
                            "value": "2",
                            score: 0,
                            "text": "No"
                        },

                        ]
                    }, {
                        "type": "comment",
                        "name": "com6",
                        //"visibleIf": "{system_installed} notempty",
                        startWithNewLine: "false",
                        "title": "Comments"
                    },


                ],
            }],

        },
        //second part of Attackers
        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

            elements: [{


                type: "panel",
                name: "panel4",
                // "title": "Attackers",

                questions: [


                    {
                        "type": "radiogroup",
                        "renderAs": "prettycheckbox",
                        "name": "question8",
                        defaultValue: ['1'],
                        //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "Is the area under geopolitical pressure?",
                        "isRequired": true,
                        "choices": [{
                            "value": "3",
                            score: 5,
                            "text": "yes and could impact the plan "
                        }, {
                            "value": "2",
                            score: 3,
                            "text": "Yes but independent of the activity of the plant "
                        }, {
                            "value": "1",
                            score: 1,
                            "text": "No "
                        },

                        ]
                    },
                    {
                        "type": "comment",
                        "name": "com7",
                        // "visibleIf": "{area} notempty",
                        startWithNewLine: "false",
                        "title": "Comments"
                    },


                    /************************** */

                    {
                        "type": "radiogroup",
                        "renderAs": "prettycheckbox",
                        "name": "question9",
                        //tooltip:  "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        "title": "For the system to function correctly, is it dependent on another system outside the country?",
                        "isRequired": true,
                        defaultValue: ['2'],
                        "choices": [{
                            "value": "3",
                            score: 2,
                            "text": "Yes "
                        }, {
                            "value": "2",
                            score: 1,
                            "text": "No "
                        },]
                    },
                    {
                        "type": "comment",
                        "name": "com8",
                        startWithNewLine: "false",
                        //"visibleIf": "{system_outside} notempty",
                        "title": "Comments"
                    },

                ],
            }]

        },
        //Third part of Attackers

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{
                type: "panel",
                name: "panel5",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                // "title": "Attackers",
                questions: [

                    {
                        "type": "radiogroup",
                        "renderAs": "prettycheckbox",
                        "name": "question10",
                        "title": "Is the plant producing any sensitive elements?",
                        tooltip: "« Sensitive elements : components that are necessary in devices/industries that require high-availability »",

                        popupdescription: "Sensitive elements: components that are indespensable in devices/industries that require high-availability.",
                        "isRequired": true,
                        defaultValue: ['2'],
                        "choices": [{
                            "value": "3",
                            score: 2,
                            "text": "Yes, we produce sensitive elements "
                        }, {
                            "value": "2",
                            score: 1,
                            "text": "No "
                        },]
                    }, {
                        "type": "comment",
                        "name": "com9",
                        startWithNewLine: "false",
                        // "visibleIf": "{sensitive} notempty",
                        "title": "Comments"
                    },

                    /****************************************************** */
                ],
            }],

        },
        /********************************************************************** Impact ************************************************************** */
        // {
        //horizontalScroll: true,
        // scrollIntoView:true,
        //Scrolltop:(0,0),
        // questions: [

        /************************ Availability ************************************** */
        /************************ First Question************************************* */

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [

                {

                    type: "panel",
                    name: "panel7",
                    isRequired: true,
                    // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                    "title": "How do you evaluate the potential impact on the system if an automated endpoint response is delayed or is briefly unavailable?",

                    "elements": [

                        {
                            type: "radiogroup",
                            name: "financ1",

                            "renderAs": "prettycheckbox",
                            startWithNewLine: false,
                            //isRequired: true,
                            title: "Financial",
                            defaultValue: '1',
                            choices: [{
                                value: 1,
                                score: 0,
                                text: "No Impact"
                            }, {
                                value: 2,
                                score: 1,
                                text: "Minor"
                            }, {
                                value: 3,
                                score: 2,
                                text: "Moderate"
                            },

                            {
                                value: 4,
                                score: 3,
                                text: "Significant"
                            }, {
                                value: 5,
                                score: 4,
                                text: "Major"
                            }
                            ],

                        },

                        {
                            type: "radiogroup",
                            "renderAs": "prettycheckbox",
                            name: "brand1",
                            defaultValue: '1',
                            //isRequired: true,
                            startWithNewLine: false,
                            title: "Brand Image",
                            choices: [{
                                value: 1,
                                score: 0,
                                text: "No Impact"
                            }, {
                                value: 2,
                                score: 1,
                                text: "Minor"
                            }, {
                                value: 3,
                                score: 2,
                                text: "Moderate"
                            },

                            {
                                value: 4,
                                score: 3,
                                text: "Significant"
                            }, {
                                value: 5,
                                score: 4,
                                text: "Major"
                            }
                            ],

                        }, {
                            type: "radiogroup",
                            "renderAs": "prettycheckbox",
                            name: "compet1",
                            defaultValue: '1',
                            //isRequired: true,
                            startWithNewLine: false,
                            title: "Competitiveness",
                            choices: [{
                                value: 1,
                                score: 0,
                                text: "No Impact"
                            }, {
                                value: 2,
                                score: 1,
                                text: "Minor"
                            }, {
                                value: 3,
                                score: 2,
                                text: "Moderate"
                            },

                            {
                                value: 4,
                                score: 3,
                                text: "Significant"
                            }, {
                                value: 5,
                                score: 4,
                                text: "Major"
                            }
                            ],

                        },

                        {
                            type: "radiogroup",
                            name: "remd1",
                            "renderAs": "prettycheckbox",
                            // isRequired: true,
                            defaultValue: '1',
                            startWithNewLine: false,
                            title: "Remediation",
                            choices: [{
                                value: 1,
                                score: 0,
                                text: "No Impact"
                            }, {
                                value: 2,
                                score: 1,
                                text: "Minor"
                            }, {
                                value: 3,
                                score: 2,
                                text: "Moderate"
                            },

                            {
                                value: 4,
                                score: 3,
                                text: "Significant"
                            }, {
                                value: 5,
                                score: 4,
                                text: "Major"
                            }
                            ],
                        },
                        {
                            "type": "comment",
                            startWithNewLine: false,
                            "name": "com10",
                            "title": "Comments:"
                        },

                    ],
                }],
        },

        /******************************************** Second Question *******************************************/

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{
                isRequired: true,
                type: "panel",
                name: "panel8",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",
                "title": " How do you evaluate the potential impact on the system if an endpoint is intermittently unavailable for brief periods? ",
                "elements": [
                    {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "financ2",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },

                    {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "brand2",
                        defaultValue: '1',
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    }, {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "compet2",
                        defaultValue: '1',
                        // isRequired: true,
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],

                    },
                    {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "remd2",
                        defaultValue: '1',
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com11",
                        "title": " Comments:"
                    },

                ],
            }],


        },
        /******************** third question******************** */
        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                //isRequired: true,
                type: "panel",
                name: "panel9",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                "title": "How do you evaluate the potential impact on the system, if an endpoint is unavailable/unresponsive for a prolonged period of time? (*) ",

                "elements": [



                    {
                        type: "radiogroup",
                        name: "financ3",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },

                    {
                        type: "radiogroup",
                        name: "brand3",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    }, {
                        type: "radiogroup",
                        name: "compet3",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },

                    {
                        type: "radiogroup",
                        name: "remd3",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],

                    },

                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com12",
                        "title": "Comments:"
                    },

                ],
            }],

        },

        /******************************************* Forth Question******************************************************/

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                // isRequired: true,
                type: "panel",
                name: "panel10",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                "title": "How do you evaluate the impact if management and monitoring solutions were unavailable for more than the defined acceptable time? (*) ",

                "elements": [

                    {
                        type: "radiogroup",
                        name: "financ4",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },

                    {
                        type: "radiogroup",
                        name: "brand4",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    }, {
                        type: "radiogroup",
                        name: "compet4",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],

                    },

                    {
                        type: "radiogroup",
                        name: "remd4",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],

                    },

                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com13",
                        "title": "Comments:"
                    },

                ],
            }],


        },

        /*********************Health & safety (Availability)***************************************************************** */


        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{


                type: "panel",
                name: "panel11",
                // "title": "human-controlled endpoin ",
                "elements": [

                    {
                        type: "radiogroup",
                        name: "health",
                        isRequired: true,
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        startWithNewLine: false,
                        //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        title: "Given a human-controlled endpoint, what would be the impact of health & safety due to an unavailability/delay in the response time of an endpoint to commands from a physically present person?",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor accident"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Server accident with sick leave or medical treatment"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Permanent disability"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Death"
                        }
                        ],



                    },


                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com14",
                        "title": "Comments:"
                    },

                ],
            }],



        },

        /************************************Matrix INTEGRITY******************** */

        /******************************************* Integrity Question1************************************************/




        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                // isRequired: true,
                type: "panel",
                name: "panel12",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                "title": "What would be the impact if data was older than required? (*) ",
                "elements": [

                    {
                        type: "radiogroup",
                        name: "financ5",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },

                    {
                        type: "radiogroup",
                        name: "brand5",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    }, {
                        type: "radiogroup",
                        name: "compet5",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        type: "radiogroup",
                        name: "remd5",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com15",
                        "title": " Comments:"
                    },

                ],
            }],



        },

        /******************************************* Integrity Question2************************************************/



        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                //isRequired: true,
                type: "panel",
                name: "panel13",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                "title": "What would be the impact on the system if data was incorrect/erroneous? (*) ",
                "elements": [
                    {
                        type: "radiogroup",
                        name: "financ6",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },

                    {
                        type: "radiogroup",
                        name: "brand6",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    }, {
                        type: "radiogroup",
                        name: "compet6",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        type: "radiogroup",
                        name: "remd6",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com16",
                        "title": "Comments:"
                    },

                ],
            }],

        },

        /******************************************* Integrity Question3************************************************/



        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                //isRequired: true,
                type: "panel",
                name: "panel14",
                "title": "What would be the impact on the system, if physical integrity of the system is compromised? i.e a component of the system is stolen, faulty or replaced with a compromised component. (*)",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                "elements": [
                    {
                        type: "radiogroup",
                        name: "financ7",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },

                    {
                        type: "radiogroup",
                        name: "brand7",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    }, {
                        type: "radiogroup",
                        name: "compet7",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        type: "radiogroup",
                        name: "remd7",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },

                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com17",
                        "title": "Comments:"
                    },

                ],
            }],


        },

        /******************************************* Integrity Question4************************************************/

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                //isRequired: true,
                type: "panel",
                name: "panel15",
                "title": "What would be the impact linked to unauthorized alteration or injection of data or content ? (*) ",
                //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                "elements": [
                    {
                        type: "radiogroup",
                        name: "financ8",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },

                    {
                        type: "radiogroup",
                        name: "brand8",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    }, {
                        type: "radiogroup",
                        name: "compet8",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        type: "radiogroup",
                        name: "remd8",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },


                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com18",
                        "title": "Comments:"
                    },

                ],
            }],


        },


        /************************************************************************************** */






        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                //isRequired: true,
                type: "panel",
                name: "panel16",
                //"title": "human controlled integrety ",
                "elements": [



                    {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "endpoint",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        title: "In a situation where the endpoint/monitoring console gives information that leads to a human action; What is the impact on the human operator if this information is incorrect? (*)",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor Accident"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Server accident with sick leave or medical treatment"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Permanent disability"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Death"
                        }
                        ],



                    },


                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com19",
                        "title": "Comments:"
                    },

                ],
            }],



        },

        /************************************************************************************** */



        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                // isRequired: true,
                type: "panel",
                name: "panel17",
                //"title": "human controlled endpoin integret ",
                "elements": [

                    {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "physical",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                        title: "In a stiuation where a physical component of the endpoint/monitoring console is stolen,faulty, damaged or replaced with a compromised component, What is the potential impact on the human operator if this is  not detected? (*)",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor Accident"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Server accident with sick leave or medical treatment"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Permanent disability"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Death"
                        }
                        ],



                    },


                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com20",
                        "title": "Comments:"
                    },

                ],
            }],



        },

        /***********************************Confidentiality****************************************** */



        /******************************************* Confidentiality question1*********************************************************/



        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                // isRequired: true,
                type: "panel",
                name: "panel18",
                "title": "What would be the impact if endpoint generated data is read/accessed  by unauthorized persons? (*) ",
                //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",

                "elements": [

                    {
                        type: "radiogroup",
                        name: "financ9",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },

                    {
                        type: "radiogroup",
                        "renderAs": "prettycheckbox",
                        name: "brand9",
                        defaultValue: '1',
                        // isRequired: true,
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    }, {
                        type: "radiogroup",
                        name: "compet9",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        type: "radiogroup",
                        name: "remd9",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],



                    },


                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com21",
                        "title": "Comments:"
                    },

                ],
            }],


        },


        /******************************************* Confidentiality question2*********************************************************/

        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                //isRequired: true,
                type: "panel",
                name: "panel19",
                "title": "What would be the impact if the data on the  management & monitoring terminal is accessed by unauthorized persons? (*) ",
                // tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",
                "elements": [
                    {
                        type: "radiogroup",
                        name: "financ10",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        type: "radiogroup",
                        name: "brand10",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    }, {
                        type: "radiogroup",
                        name: "compet10",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        type: "radiogroup",
                        name: "remd10",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com22",
                        "title": "Comments:"
                    },
                ],
            }],
        },
        /******************************************* Confidentiality question3*********************************************************/
        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                //isRequired: true,
                type: "panel",
                name: "panel20",
                "title": "How do you evaluate the potential impact related to loss of authentication credentials (login/passwords, encryption keys, etc) on the endpoint devices or the monitoring terminal? (*) ",
                //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",
                "elements": [
                    {
                        type: "radiogroup",
                        name: "financ11",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        type: "radiogroup",
                        name: "brand11",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    }, {
                        type: "radiogroup",
                        name: "compet11",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        startWithNewLine: false,
                        defaultValue: '1',
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        type: "radiogroup",
                        name: "remd11",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com23",
                        "title": "Comments:"
                    },
                ],
            }],
        },
        /******************************************* Confidentiality question4*********************************************************/
        {
            title: "This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b>",
            elements: [{

                // isRequired: true,
                type: "panel",
                name: "panel21",
                //tooltip: "This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question This it a tooltip text for the first and the only question",
                "title": "What would be the impact to loss of confidentiality of technical data(Intellectual properties) ? (*) ",
                "elements": [
                    {
                        type: "radiogroup",
                        name: "financ12",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        defaultValue: '1',
                        title: "Financial",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],
                    },
                    {
                        type: "radiogroup",
                        name: "brand12",
                        "renderAs": "prettycheckbox",
                        // isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Brand Image",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],

                    }, {
                        type: "radiogroup",
                        name: "compet12",
                        defaultValue: '1',
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        startWithNewLine: false,
                        title: "Competitiveness",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],

                    },

                    {
                        type: "radiogroup",
                        name: "remd12",
                        "renderAs": "prettycheckbox",
                        //isRequired: true,
                        defaultValue: '1',
                        startWithNewLine: false,
                        title: "Remediation",
                        choices: [{
                            value: 1,
                            score: 0,
                            text: "No Impact"
                        }, {
                            value: 2,
                            score: 1,
                            text: "Minor"
                        }, {
                            value: 3,
                            score: 2,
                            text: "Moderate"
                        },

                        {
                            value: 4,
                            score: 3,
                            text: "Significant"
                        }, {
                            value: 5,
                            score: 4,
                            text: "Major"
                        }
                        ],

                    },

                    {
                        "type": "comment",
                        startWithNewLine: false,
                        "name": "com24",
                        "title": "Comments:"
                    },

                ],
            }],


        },



        /*********************************************************************************** */
        // ]
        // },
    ],

    "showQuestionNumbers": "off",
    completedHtml: "<p> Generating Results....</p> "
};

class BusinessQuestionnaire extends Component {

    constructor() {
        super();
        this.state = {
            modalShow: false,
            userInput: '',
            show: false,
            key1: "",
            items: [],
            currentTab: -1,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }


    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }

    //Text Markdown HTML
    onTextMarkdown(model, options) {
        var converter = new Showdown.Converter();
        //convert the mardown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
    }

    // tooltip
    onAfterRenderQuestion(model, options) {
        //Return if there is no description to show in popup
        if (!options.question.tooltip)
            return;
        var header = options
            .htmlElement
            .querySelector("h5");
        header.title = options.question.tooltip;
        var span = document.createElement("span");
        span.innerText = "?";
        span.className = "survey-tooltip";
        header.appendChild(span);
    }

    onAfterRenderPanel(model, options) {
        //Return if there is no description to show in popup
        if (!options.panel.tooltip)
            return;

        var header = options
            .htmlElement
            .querySelector("h4"); //for panel we have h4 
        if (!!header) {
            // title is element attribute and you have to use setAttribute function
            header.setAttribute('title', options.panel.tooltip)
            var span = document.createElement("span");
            span.innerText = "?";
            span.className = "survey-tooltip";
            //header.appendChild(span);
        }
    }

    // showNavigationButtons(model) {
    //   this.model.showNavigationButtons = false;
    // }
    showCompletedPage(model, options) {
        this.model.showCompletedPage = false;
    }

    // onComplete = (model) => {
    //     model.onComplete.add(function (sender, options) {
    //         //Show message about "Saving..." the results
    //         options.showDataSaving("saving responses..");//you may pass a text parameter to show your own text
    //         var xhr = new XMLHttpRequest();
    //         xhr.open("POST", "/api/surveyresult/result");
    //         //xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    //         xhr.onload = xhr.onerror = function () {
    //             if (xhr.status === 200) {
    //                 options.showDataSavingSuccess("success!"); // you may pass a text parameter to show your own text
    //                 // Or you may clear all messages:
    //                 // options.showDataSavingClear();
    //             } else {
    //                 //Error
    //                 options.showDataSavingError("Error when saving the survey on database"); // you may pass a text parameter to show your own text
    //             }
    //         };
    //         xhr.send(JSON.stringify(sender.data));
    //     });
    // }

    handleClick(currentTab) {
        this.setState({ currentTab });
    }

    onComplete(model) {
        // (this.model.add(function(model) {
        //this.add(function(model) {

        var isValueSet = (choicesValue, questionValue) => {
            if (Array.isArray(questionValue)) {
                return questionValue.indexOf(choicesValue) > -1;
            }
            return choicesValue === questionValue;
        }
        /************ Total score part declaration****************/
        var totalScore1 = 0;
        var totalScore2 = 0;
        var totalScore3 = 0;
        var totalScore4 = 0;
        var totalScore5 = 0;
        var totalScore6 = 0;
        var totalScore7 = 0;
        var totalScore8 = 0;
        var totalScore9 = 0;
        var totalScore10 = 0;
        var totalScore11 = 0;
        var totalScore12 = 0;
        var totalScore13 = 0;
        var totalScore14 = 0;
        var totalScore15 = 0;
        var totalScore16 = 0;
        var totalScore17 = 0;
        var totalScoreUser = 0;
        var totalScoreAttacker = 0;

        var data = model.data;
        /************************ Get question By Valuename part**********************************/
        // Object.keys(data).forEach(function(qName) {
        /******************************* Connectivity********************************/
        var question1 = model.getQuestionByValueName("question1");
        /****************************functionnality*************************************/
        var CIM0 = model.getQuestionByValueName("CIM0");
        var CIM1 = model.getQuestionByValueName("CIM1");
        var CIM2 = model.getQuestionByValueName("CIM2");
        var CIM3 = model.getQuestionByValueName("CIM3");
        /************************** user*************************************/
        var question2 = model.getQuestionByValueName("question2");
        var question3 = model.getQuestionByValueName("question3");
        var question4 = model.getQuestionByValueName("question4");
        var question5 = model.getQuestionByValueName("question5");
        var question6 = model.getQuestionByValueName("question6");
        var question7 = model.getQuestionByValueName("question7");
        var question8 = model.getQuestionByValueName("question8");
        var question9 = model.getQuestionByValueName("question9");
        var question10 = model.getQuestionByValueName("question10");
        var question11 = model.getQuestionByValueName("question11");
        var question12 = model.getQuestionByValueName("question12");

        /******************************Impact************************************/

        /*****financial***/

        var financ1 = model.getQuestionByValueName("financ1");
        var financ2 = model.getQuestionByValueName("financ2");
        var financ3 = model.getQuestionByValueName("financ3");
        var financ4 = model.getQuestionByValueName("financ4");
        var financ5 = model.getQuestionByValueName("financ5");
        var financ6 = model.getQuestionByValueName("financ6");
        var financ7 = model.getQuestionByValueName("financ7");
        var financ8 = model.getQuestionByValueName("financ8");
        var financ9 = model.getQuestionByValueName("financ9");
        var financ10 = model.getQuestionByValueName("financ10");
        var financ11 = model.getQuestionByValueName("financ11");
        var financ12 = model.getQuestionByValueName("financ12");

        /******** qValue********/
        var qValuefinanc1 = data["financ1"];
        var qValuefinanc2 = data["financ2"];
        var qValuefinanc3 = data["financ3"];
        var qValuefinanc4 = data["financ4"];
        var qValuefinanc5 = data["financ5"];
        var qValuefinanc6 = data["financ6"];
        var qValuefinanc7 = data["financ7"];
        var qValuefinanc8 = data["financ8"];
        var qValuefinanc9 = data["financ9"];
        var qValuefinanc10 = data["financ10"];
        var qValuefinanc11 = data["financ11"];
        var qValuefinanc12 = data["financ12"];



        /** brand image***/

        var brand1 = model.getQuestionByValueName("brand1");
        var brand2 = model.getQuestionByValueName("brand2");
        var brand3 = model.getQuestionByValueName("brand3");
        var brand4 = model.getQuestionByValueName("brand4");
        var brand5 = model.getQuestionByValueName("brand5");
        var brand6 = model.getQuestionByValueName("brand6");
        var brand7 = model.getQuestionByValueName("brand7");
        var brand8 = model.getQuestionByValueName("brand8");
        var brand9 = model.getQuestionByValueName("brand9");
        var brand10 = model.getQuestionByValueName("brand10");
        var brand11 = model.getQuestionByValueName("brand11");
        var brand12 = model.getQuestionByValueName("brand12");

        /******** qValue********/
        var qValuebrand1 = data["brand1"];
        var qValuebrand2 = data["brand2"];
        var qValuebrand3 = data["brand3"];
        var qValuebrand4 = data["brand4"];
        var qValuebrand5 = data["brand5"];
        var qValuebrand6 = data["brand6"];
        var qValuebrand7 = data["brand7"];
        var qValuebrand8 = data["brand8"];
        var qValuebrand9 = data["brand9"];
        var qValuebrand10 = data["brand10"];
        var qValuebrand11 = data["brand11"];
        var qValuebrand12 = data["brand12"];

        /*********competetivness**********/


        var compet1 = model.getQuestionByValueName("compet1");
        var compet2 = model.getQuestionByValueName("compet2");
        var compet3 = model.getQuestionByValueName("compet3");
        var compet4 = model.getQuestionByValueName("compet4");
        var compet5 = model.getQuestionByValueName("compet5");
        var compet6 = model.getQuestionByValueName("compet6");
        var compet7 = model.getQuestionByValueName("compet7");
        var compet8 = model.getQuestionByValueName("compet8");
        var compet9 = model.getQuestionByValueName("compet9");
        var compet10 = model.getQuestionByValueName("compet10");
        var compet11 = model.getQuestionByValueName("compet11");
        var compet12 = model.getQuestionByValueName("compet12");


        /******** qValue********/
        var qValuecompet1 = data["compet1"];
        var qValuecompet2 = data["compet2"];
        var qValuecompet3 = data["compet3"];
        var qValuecompet4 = data["compet4"];
        var qValuecompet5 = data["compet5"];
        var qValuecompet6 = data["compet6"];
        var qValuecompet7 = data["compet7"];
        var qValuecompet8 = data["compet8"];
        var qValuecompet9 = data["compet9"];
        var qValuecompet10 = data["compet10"];
        var qValuecompet11 = data["compet11"];
        var qValuecompet12 = data["compet12"];



        /*************remediation****************/

        var remd1 = model.getQuestionByValueName("remd1");
        var remd2 = model.getQuestionByValueName("remd2");
        var remd3 = model.getQuestionByValueName("remd3");
        var remd4 = model.getQuestionByValueName("remd4");
        var remd5 = model.getQuestionByValueName("remd5");
        var remd6 = model.getQuestionByValueName("remd6");
        var remd7 = model.getQuestionByValueName("remd7");
        var remd8 = model.getQuestionByValueName("remd8");
        var remd9 = model.getQuestionByValueName("remd9");
        var remd10 = model.getQuestionByValueName("remd10");
        var remd11 = model.getQuestionByValueName("remd11");
        var remd12 = model.getQuestionByValueName("remd12");

        /******** qValue********/
        var qValueremd1 = data["remd1"];
        var qValueremd2 = data["remd2"];
        var qValueremd3 = data["remd3"];
        var qValueremd4 = data["remd4"];
        var qValueremd5 = data["remd5"];
        var qValueremd6 = data["remd6"];
        var qValueremd7 = data["remd7"];
        var qValueremd8 = data["remd8"];
        var qValueremd9 = data["remd9"];
        var qValueremd10 = data["remd10"];
        var qValueremd11 = data["remd11"];
        var qValueremd12 = data["remd12"];




        /**************************** qValue part declaration**************************************/

        var qValue1 = data["question1"];

        var qValue2 = data["CIM0"];
        var qValue3 = data["CIM1"];
        var qValue4 = data["CIM2"];
        var qValue14 = data["CIM3"];

        var qValue5 = data["question2"];
        var qValue6 = data["question3"];
        var qValue7 = data["question4"];
        var qValue8 = data["question5"];
        var qValue9 = data["question6"];
        var qValue10 = data["question7"];
        var qValue11 = data["question8"];
        var qValue12 = data["question9"];
        var qValue13 = data["question10"];

        var qValue15 = data["question13"];
        var qValue16 = data["question14"];
        var qValue17 = data["question15"];
        var qValue18 = data["question16"];



        /**************health*********************/

        var health = model.getQuestionByValueName("health");
        var endpoint = model.getQuestionByValueName("endpoint");
        var physical = model.getQuestionByValueName("physical");
        var qValue19 = data["health"];
        var qValue20 = data["endpoint"];
        var qValue21 = data["physical"];






        /****************************************<< Question decalaration part >>*********************************************/

        /**********************************Connectivity**************************************/

        if (question1.choices) {
            question1.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue1)) {
                    totalScore1 = choice.score;
                }
            });
        } else {
            totalScore1 = question1.score;
        }


        /**********************************  Functionnality   *****************************************/



        if (CIM0.choices) {

            CIM0.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue2)) {
                    totalScore2 = choice.score;
                }
            });

        } else {


            if (CIM1.choices) {
                CIM1.choices.forEach(function (choice) {
                    if (isValueSet(choice.value, qValue3)) {
                        totalScore2 = choice.score;
                    }
                });

            } else {


                if (CIM2.choices) {
                    CIM2.choices.forEach(function (choice) {
                        if (isValueSet(choice.value, qValue4)) {
                            totalScore2 = choice.score;
                        }
                    });

                } else {

                    if (CIM3.choices) {
                        CIM3.choices.forEach(function (choice) {
                            if (isValueSet(choice.value, qValue14)) {
                                totalScore2 = choice.score;
                            }
                        });


                    }

                }



            }
        }
        // });

        /******** CIM0*******/
        if (CIM0.choices) {

            CIM0.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue2)) {
                    totalScore14 = choice.score;
                }
            });

        } else {
            totalScore14 = CIM0.score;
        }


        /********* CIM1************/

        if (CIM1.choices) {

            CIM1.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue3)) {
                    totalScore15 = choice.score;
                }
            });

        } else {
            totalScore15 = CIM1.score;
        }


        /********* CIM2************/

        if (CIM2.choices) {

            CIM2.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue4)) {
                    totalScore16 = choice.score;
                }
            });

        } else {
            totalScore16 = CIM2.score;
        }




        /********* CIM3************/

        if (CIM3.choices) {

            CIM3.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue14)) {
                    totalScore17 = choice.score;
                }
            });

        } else {
            totalScore17 = CIM3.score;
        }



        var totalFunctionnality = Math.max(totalScore14, totalScore15, totalScore16, totalScore17);

        /************************************* Exposure *************************************************/

        var totalExposure = 0;

        if (totalScore1 == 1 && totalFunctionnality == 1) {

            totalExposure = 1;

        } else {

            if ((totalScore1 == 1 && totalFunctionnality == 1) || (totalScore1 == 2 && totalFunctionnality == 1) || (totalScore1 == 2 && totalFunctionnality == 2) || (totalScore1 == 1 && totalFunctionnality == 2)) {

                totalExposure = 2;

            } else {

                if ((totalScore1 == 1 && totalFunctionnality == 3) || (totalScore1 == 2 && totalFunctionnality == 3) || (totalScore1 == 3 && totalFunctionnality == 2) || (totalScore1 == 3 && totalFunctionnality == 1)) {


                    totalExposure = 3;



                } else {


                    if ((totalScore1 == 3 && totalFunctionnality == 3) || (totalScore1 == 4)) {

                        totalExposure = 4;


                    } else {


                        totalExposure = 5;


                    }

                }

            }

        }



        /*********************************** User****************************************/


        /*************** question1 User  **************/
        if (question2.choices) {
            question2.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue5)) {
                    totalScore3 = choice.score;
                }
            });
        } else {
            totalScore3 = question2.score;
        }

        /***************** question2 User   ************/


        if (question3.choices) {
            question3.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue6)) {
                    totalScore4 = choice.score;
                }
            });
        } else {
            totalScore4 = question3.score;
        }

        /***************** question3 User   ************/


        if (question4.choices) {
            question4.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue7)) {
                    totalScore5 = choice.score;
                }
            });
        } else {
            totalScore5 = question4.score;
        }

        /***************** question4 User   ************/


        if (question5.choices) {
            question5.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue8)) {
                    totalScore6 = choice.score;
                }
            });
        } else {
            totalScore6 = question5.score;
        }


        /********************* total score user****************************/



        const grades = [totalScore4, totalScore5, totalScore6];

        function getAvg(grades) {
            const total = grades.reduce((acc, c) => acc + c, 0);
            return total / grades.length;
        }

        const average = getAvg(grades);


        totalScoreUser = totalScore5;

        /********************************Attackers*******************************************/


        /*************** question1 Attackers  **************/


        if (question6.choices) {
            question6.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue9)) {
                    totalScore7 += +choice.score;
                }
            });
        } else {
            totalScore7 += +question6.score;
        }


        /***************** question2 Attackers   ************/


        if (question7.choices) {
            question7.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue10)) {
                    totalScore8 = choice.score;
                }
            });
        } else {
            totalScore8 = question7.score;
        }

        /***************** question3 Attackers   ************/


        if (question8.choices) {
            question8.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue11)) {
                    totalScore9 = choice.score;
                }
            });
        } else {
            totalScore9 = question8.score;
        }

        /***************** question4 Attackers   ************/


        if (question9.choices) {
            question9.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue12)) {
                    totalScore10 = choice.score;
                }
            });
        } else {
            totalScore10 = question9.score;
        }

        /***************** question5 Attackers   ************/


        if (question10.choices) {
            question10.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue13)) {
                    totalScore11 = choice.score;
                }
            });
        } else {
            totalScore11 = question10.score;
        }

        /********************* total score Attacker****************/


        if (totalScore11 == 2) {

            var totalScoreAttacker = Math.max(totalScore7 + totalScore8, totalScore9, totalScore10);

        } else {

            var totalScoreAttacker = [Math.max(totalScore7 + totalScore8, totalScore9, totalScore10)] - 1;

        };


        /*this.setState({
          scores: this.totalScoreAttacker.scores,
        });*/


        /************************************Impact**************************************/


        /***************************************************************************Financial*********************************************/

        /****************** part Availability*************************/


        var financ1 = model.getQuestionByValueName("financ1");
        var qValuefinanc1 = data["financ1"];

        var totalfinanc1 = 0;

        if (financ1.choices) {
            financ1.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc1)) {
                    totalfinanc1 = choice.score;
                }
            });
        } else {
            totalfinanc1 = financ1.score;
        }


        var totalfinanc2 = 0;

        if (financ2.choices) {
            financ2.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc2)) {
                    totalfinanc2 = choice.score;
                }
            });
        } else {
            totalfinanc2 = financ2.score;
        }


        var totalfinanc3 = 0;

        if (financ3.choices) {
            financ3.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc3)) {
                    totalfinanc3 = choice.score;
                }
            });
        } else {
            totalfinanc3 = financ3.score;
        }

        var totalfinanc4 = 0;

        if (financ4.choices) {
            financ4.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc4)) {
                    totalfinanc4 = choice.score;
                }
            });
        } else {
            totalfinanc4 = financ4.score;
        }

        var totalFunctAvail = Math.max(totalfinanc1, totalfinanc2, totalfinanc3, totalfinanc4);


        /****************** part Integrity*************************/


        var totalfinanc5 = 0;

        if (financ5.choices) {
            financ5.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc5)) {
                    totalfinanc5 = choice.score;
                }
            });
        } else {
            totalfinanc5 = financ5.score;
        }


        var totalfinanc6 = 0;

        if (financ6.choices) {
            financ6.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc6)) {
                    totalfinanc6 = choice.score;
                }
            });
        } else {
            totalfinanc6 = financ6.score;
        }


        var totalfinanc7 = 0;

        if (financ7.choices) {
            financ7.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc7)) {
                    totalfinanc7 = choice.score;
                }
            });
        } else {
            totalfinanc7 = financ7.score;
        }

        var totalfinanc8 = 0;

        if (financ8.choices) {
            financ8.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc8)) {
                    totalfinanc8 = choice.score;
                }
            });
        } else {
            totalfinanc8 = financ8.score;
        }

        var totalFunctinteg = Math.max(totalfinanc5, totalfinanc6, totalfinanc7, totalfinanc8);

        /**************************************** part confidentiality   ******************************************************/

        var totalfinanc9 = 0;

        if (financ9.choices) {
            financ9.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc9)) {
                    totalfinanc9 = choice.score;
                }
            });
        } else {
            totalfinanc9 = financ9.score;
        }


        var totalfinanc10 = 0;

        if (financ10.choices) {
            financ10.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc10)) {
                    totalfinanc10 = choice.score;
                }
            });
        } else {
            totalfinanc10 = financ10.score;
        }


        var totalfinanc11 = 0;

        if (financ11.choices) {
            financ11.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc11)) {
                    totalfinanc11 = choice.score;
                }
            });
        } else {
            totalfinanc11 = financ11.score;
        }

        var totalfinanc12 = 0;

        if (financ12.choices) {
            financ12.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuefinanc12)) {
                    totalfinanc12 = choice.score;
                }
            });
        } else {
            totalfinanc12 = financ12.score;
        }

        var totalFunctconf = Math.max(totalfinanc9, totalfinanc10, totalfinanc11, totalfinanc12);

        /***************************************************************************Competetivness*********************************************/

        /****************** part Availability*************************/

        var totalcompet1 = 0;

        if (compet1.choices) {
            compet1.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet1)) {
                    totalcompet1 = choice.score;
                }
            });
        } else {
            totalcompet1 = compet1.score;
        }

        var totalcompet2 = 0;

        if (compet2.choices) {
            compet2.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet2)) {
                    totalcompet2 = choice.score;
                }
            });
        } else {
            totalcompet2 = compet2.score;
        }


        var totalcompet3 = 0;

        if (compet3.choices) {
            compet3.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet3)) {
                    totalcompet3 = choice.score;
                }
            });
        } else {
            totalcompet3 = compet3.score;
        }

        var totalcompet4 = 0;

        if (compet4.choices) {
            compet4.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet4)) {
                    totalcompet4 = choice.score;
                }
            });
        } else {
            totalcompet4 = compet4.score;
        }

        var totalcompetAvail = Math.max(totalcompet1, totalcompet2, totalcompet3, totalcompet4);


        /****************** part Integrity*************************/

        var totalcompet5 = 0;

        if (compet5.choices) {
            compet5.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet5)) {
                    totalcompet5 = choice.score;
                }
            });
        } else {
            totalcompet5 = compet5.score;
        }

        var totalcompet6 = 0;

        if (compet6.choices) {
            compet6.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet6)) {
                    totalcompet6 = choice.score;
                }
            });
        } else {
            totalcompet6 = compet6.score;
        }

        var totalcompet7 = 0;

        if (compet7.choices) {
            compet7.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet7)) {
                    totalcompet7 = choice.score;
                }
            });
        } else {
            totalcompet7 = compet7.score;
        }

        var totalcompet8 = 0;

        if (compet8.choices) {
            compet8.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet8)) {
                    totalcompet8 = choice.score;
                }
            });
        } else {
            totalcompet8 = compet8.score;
        }

        var totalcompetinteg = Math.max(totalcompet5, totalcompet6, totalcompet7, totalcompet8);


        /**************************************** part confidentiality   ******************************************************/

        var totalcompet9 = 0;

        if (compet9.choices) {
            compet9.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet9)) {
                    totalcompet9 = choice.score;
                }
            });
        } else {
            totalcompet9 = compet9.score;
        }

        var totalcompet10 = 0;

        if (compet10.choices) {
            compet10.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet10)) {
                    totalcompet10 = choice.score;
                }
            });
        } else {
            totalcompet10 = compet10.score;
        }

        var totalcompet11 = 0;

        if (compet11.choices) {
            compet11.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet11)) {
                    totalcompet11 = choice.score;
                }
            });
        } else {
            totalcompet11 = compet11.score;
        }

        var totalcompet12 = 0;

        if (compet12.choices) {
            compet12.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuecompet12)) {
                    totalcompet12 = choice.score;
                }
            });
        } else {
            totalcompet12 = compet12.score;
        }

        var totalcompetconf = Math.max(totalcompet9, totalcompet10, totalcompet11, totalcompet12);

        /***************************************************************************Brand Image*********************************************/

        /****************** part Availability*************************/

        var totalbrand1 = 0;

        if (brand1.choices) {
            brand1.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand1)) {
                    totalbrand1 = choice.score;
                }
            });
        } else {
            totalbrand1 = brand1.score;
        }

        var totalbrand2 = 0;

        if (brand2.choices) {
            brand2.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand2)) {
                    totalbrand2 = choice.score;
                }
            });
        } else {
            totalbrand2 = brand2.score;
        }

        var totalbrand3 = 0;

        if (brand3.choices) {
            brand3.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand3)) {
                    totalbrand3 = choice.score;
                }
            });
        } else {
            totalbrand3 = brand3.score;
        }

        var totalbrand4 = 0;

        if (brand4.choices) {
            brand4.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand4)) {
                    totalbrand4 = choice.score;
                }
            });
        } else {
            totalbrand4 = brand4.score;
        }

        var totalbrandAvail = Math.max(totalbrand1, totalbrand2, totalbrand3, totalbrand4);

        /****************** part Integrity*************************/

        var totalbrand5 = 0;

        if (brand5.choices) {
            brand5.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand5)) {
                    totalbrand5 = choice.score;
                }
            });
        } else {
            totalbrand5 = brand5.score;
        }

        var totalbrand6 = 0;

        if (brand6.choices) {
            brand6.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand6)) {
                    totalbrand6 = choice.score;
                }
            });
        } else {
            totalbrand6 = brand6.score;
        }

        var totalbrand7 = 0;

        if (brand7.choices) {
            brand7.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand7)) {
                    totalbrand7 = choice.score;
                }
            });
        } else {
            totalbrand7 = brand7.score;
        }

        var totalbrand8 = 0;

        if (brand8.choices) {
            brand8.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand8)) {
                    totalbrand8 = choice.score;
                }
            });
        } else {
            totalbrand8 = brand8.score;
        }

        var totalbrandinteg = Math.max(totalbrand5, totalbrand6, totalbrand7, totalbrand8);


        /**************************************** part confidentiality   ******************************************************/

        var totalbrand9 = 0;

        if (brand9.choices) {
            brand9.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand9)) {
                    totalbrand9 = choice.score;
                }
            });
        } else {
            totalbrand9 = brand9.score;
        }

        var totalbrand10 = 0;

        if (brand10.choices) {
            brand10.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand10)) {
                    totalbrand10 = choice.score;
                }
            });
        } else {
            totalbrand10 = brand10.score;
        }


        var totalbrand11 = 0;

        if (brand11.choices) {
            brand11.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand11)) {
                    totalbrand11 = choice.score;
                }
            });
        } else {
            totalbrand11 = brand11.score;
        }

        var totalbrand12 = 0;

        if (brand12.choices) {
            brand12.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValuebrand12)) {
                    totalbrand12 = choice.score;
                }
            });
        } else {
            totalbrand12 = brand12.score;
        }

        var totalbrandconf = Math.max(totalbrand9, totalbrand10, totalbrand11, totalbrand12);

        /***************************************************************************Remediation*********************************************/

        /****************** part Availability*************************/

        var totalremd1 = 0;

        if (remd1.choices) {
            remd1.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd1)) {
                    totalremd1 = choice.score;
                }
            });
        } else {
            totalremd1 = remd1.score;
        }


        var totalremd2 = 0;

        if (remd2.choices) {
            remd2.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd2)) {
                    totalremd2 = choice.score;
                }
            });
        } else {
            totalremd2 = remd2.score;
        }

        var totalremd3 = 0;

        if (remd3.choices) {
            remd3.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd3)) {
                    totalremd3 = choice.score;
                }
            });
        } else {
            totalremd3 = remd3.score;
        }

        var totalremd4 = 0;

        if (remd4.choices) {
            remd4.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd4)) {
                    totalremd4 = choice.score;
                }
            });
        } else {
            totalremd4 = remd4.score;
        }

        var totalremdAvail = Math.max(totalremd1, totalremd2, totalremd3, totalremd4);

        /****************** part Integrity*************************/

        var totalremd5 = 0;

        if (remd5.choices) {
            remd5.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd5)) {
                    totalremd5 = choice.score;
                }
            });
        } else {
            totalremd5 = remd5.score;
        }

        var totalremd6 = 0;

        if (remd6.choices) {
            remd6.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd6)) {
                    totalremd6 = choice.score;
                }
            });
        } else {
            totalremd6 = remd6.score;
        }

        var totalremd7 = 0;

        if (remd7.choices) {
            remd7.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd7)) {
                    totalremd7 = choice.score;
                }
            });
        } else {
            totalremd7 = remd7.score;
        }

        var totalremd8 = 0;

        if (remd8.choices) {
            remd8.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd8)) {
                    totalremd8 = choice.score;
                }
            });
        } else {
            totalremd8 = remd8.score;
        }

        var totalremdinteg = Math.max(totalremd5, totalremd6, totalremd7, totalremd8);

        /**************************************** part confidentiality   ******************************************************/
        var totalremd9 = 0;

        if (remd9.choices) {
            remd9.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd9)) {
                    totalremd9 = choice.score;
                }
            });
        } else {
            totalremd9 = remd9.score;
        }

        var totalremd10 = 0;

        if (remd10.choices) {
            remd10.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd10)) {
                    totalremd10 = choice.score;
                }
            });
        } else {
            totalremd10 = remd10.score;
        }

        var totalremd11 = 0;

        if (remd11.choices) {
            remd11.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd11)) {
                    totalremd11 = choice.score;
                }

            });
        } else {
            totalremd11 = remd11.score;
        }

        var totalremd12 = 0;

        if (remd12.choices) {
            remd12.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValueremd12)) {
                    totalremd12 = choice.score;
                }
            });
        } else {
            totalremd12 = remd12.score;
        }

        var totalremdconf = Math.max(totalremd9, totalremd10, totalremd11, totalremd12);

        /*****************************************  Health anf safety**************************************************/

        var totalhealth = 0;

        if (health.choices) {
            health.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue19)) {
                    totalhealth = choice.score;
                }
            });
        } else {
            totalhealth = health.score;
        }

        var totalendpoint = 0;

        if (endpoint.choices) {
            endpoint.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue20)) {
                    totalendpoint = choice.score;
                }
            });
        } else {
            totalendpoint = endpoint.score;
        }

        var totalphysical = 0;

        if (physical.choices) {
            physical.choices.forEach(function (choice) {
                if (isValueSet(choice.value, qValue21)) {
                    totalphysical = choice.score;
                }
            });
        } else {
            totalphysical = physical.score;
        }

        /*******************************************  MAX******************************************************************/

        var totalfinancial = Math.max(totalFunctAvail, totalFunctinteg, totalFunctconf);
        var totalbrandimage = Math.max(totalbrandAvail, totalbrandinteg, totalbrandconf);
        var totalcompetitiveness = Math.max(totalcompetAvail, totalcompetinteg, totalcompetconf);
        var totalremediation = Math.max(totalremdAvail, totalremdinteg, totalremdconf);
        var totalhealth = Math.max(totalhealth, totalendpoint, totalphysical);
        var MaxGlobal = Math.max(totalfinancial, totalbrandimage, totalcompetitiveness, totalremediation, totalhealth);

        /*********************************** Estimating Likelihood  *************************************************/

        var totalLikelihood = 0;
        totalLikelihood = totalExposure + [(totalScoreAttacker + totalScoreUser - 2) / 2];

        /**************************************** Classification calcul*********************************************/

        var total = totalLikelihood * MaxGlobal;

        /************************************Classification********************************************************/

        var classification = 0;

        if (total <= 3) {

            classification = 1;

        } else {

            if ((total > 3) && (total < 12)) {

                classification = 2;

            } else {

                if (total >= 12) {

                    classification = 3;
                } else {

                    classification = "No Classification";
                }

            }

        }

        /*************************** HTML part for display and Recuperate Score ***************************************************/
        model.showCompletedPage = false;
        /*document
           .querySelector('#surveyResult')
          .innerHTML =  " Class " + JSON.stringify(classification)*/
        // }))

        //})

    }
    render() {

        var model = new Survey.Model(json);

        return (
            <Aux>
                <Row>
                    <>
                        <Modal
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={this.state.show} onHide={this.handleClose}>

                            <Modal.Body>
                                <div style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "20px" }}>
                                    <i class="fa fa-check-circle   text-success fa-5x" aria-hidden="true"></i>
                                </div>
                                <h5 style={{ textAlign: "center" }}>  Great, we have done all the operations! </h5>
                                <h4 style={{ textAlign: "center", padding: "20px" }}> Do you want to continue? </h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                               </Button>
                                <Link to="/primary-asset">
                                    <Button variant="primary" >
                                        Next Step
                             </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal>

                        <Col >
                            <Card >

                                <Card.Body className='border-bottom'>
                                    <Survey.Survey
                                        model={model}
                                        id="survey"
                                        onAfterRenderQuestion={this.onAfterRenderQuestion}
                                        onAfterRenderPanel={this.onAfterRenderPanel}
                                        //showNavigationButtons={this.showNavigationButtons}
                                        // onComplete={(result)=> console.log(result.data)}
                                        onComplete={this.onComplete}
                                        onTextMarkdown={this.onTextMarkdown}
                                        //onComplete={sendDataToServer}
                                        onCurrentPageChanged={this.doOnCurrentPageChanged}
                                        sendResultOnPageNext={true}
                                        showCompletedPage={this.showCompletedPage}
                                        onPartialSend={this.onSurveyPartialSend}
                                    />

                                </Card.Body>
                            </Card >
                        </Col>
                    </>
                </Row>
                <br />
                <div className="mb-4 text-right" >
                    <Link to="/landing"> <button className="btn btn-secondary shadow-2 mb-4">Previous Step</button> </Link>
                    <button onClick={this.handleShow} className="btn btn-primary shadow-2 mb-4">Save Changes</button>
                </div>
            </Aux>
        )

    }
}
export default BusinessQuestionnaire;