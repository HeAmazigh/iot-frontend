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
import marked from 'marked';
//import axios from 'axios';
import Aux from "../../hoc/_Aux";
import * as Showdown from "showdown";
import "react-simple-tree-menu/dist/main.css";
import * as Survey from 'survey-react';
import "../LandingPage/app.css";



import "antd/dist/antd.css";
//import "survey-react/survey.css";
import "survey-react/modern.css";

//Survey.StylesManager.applyTheme("modern");
Survey.StylesManager.applyTheme("modern");


class HighLevel extends Component {

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


     onValueChanged(result) {
        console.log("value changed!" + JSON.stringify(result))
    }
    
    onComplete(result) {
        console.log("Complete!" + JSON.stringify(result.data))
    
    }






    render() {
        //Create showdown markdown converter

        const json = {
            requiredText: " (*)",
           // showNavigationButtons: "top",
            showPageTitles: false,
            showQuestionNumbers: "off",
            showProgressBar: "top",
            progressBarType: "buttons",
            pages: [
               
                /******************************************************* Page1 Solution Information ********************************************** */
                {
                    title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
                    "name": "page1",
                    elements: [{
                        type: "panel",
                        name: "panel1",
                        title: "Contact Information",
                        "elements": [
                            // {
                            //     "type": "radiogroup",
                            //     "hasOther": true,
                            //     "isRequired": true,
                            //     "name": "favoritePet",
                            //     "title": "What is your favorite pet ![A parrot](https://surveyjs.io/Content/Images/examples/markdown/image_16x16.svg '=2x2') ?",
                            //     "choices": [
                            //         {
                            //             "value": "dog",
                            //             "text": "Dog: ![A dog](https://surveyjs.io/Content/Images/examples/markdown/dog.svg '=14x14')"
                            //         }, {
                            //             "value": "cat",
                            //             "text": "Cat: ![A cat](https://surveyjs.io/Content/Images/examples/markdown/cat.svg '=14x14')"
                            //         }, {
                            //             "value": "parrot",
                            //             "text": "Parrot ![A parrot](https://surveyjs.io/Content/Images/examples/markdown/parrot.svg '=14x14')"
                            //         }
                            //     ]
                            // },
            
                            {
                                "name": "date",
                                "type": "text",
                                inputType: "date",
                                "title": " Date:",
                                placeHolder: "jj/mm/aaaa",
                                "isRequired": true,
                            },
                            {
                                "name": "company_name",
                                "isRequired": true,
                                "title": "Company Name",
                                placeHolder: "RedAlertLabs",
                                "type": "text",

                            },
                            {
                                "name": "name",
                                "isRequired": true,
                                "title": "Contact Name",
                                "type": "text",
                                placeHolder: "Roland Atoui",
                                "startWithNewLine": false,

                            },

                        ]
                    }]
                },

                {
                    title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",

                    "name": "page2",

                    elements: [{
                        title: "Contact Information",
                        type: "panel",
                        name: "panel2",
                        "elements": [
                            {
                                "name": "adress",
                                "isRequired": true,
                                "title": "Adress",
                                "type": "text",
                            },
                            {
                                type: "dropdown",
                                name: "region",
                                // "startWithNewLine": false,
                                "isRequired": true,
                                title: "Select the region...",
                                choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
                            }, {
                                type: "dropdown",
                                name: "country",
                                "startWithNewLine": false,
                                title: "Select the country...",
                                isRequired: true,
                                choicesByUrl: {
                                    url: "https://restcountries.eu/rest/v2/region/{region}",
                                    valueName: "alpha3Code",
                                    titleName: "name",
                                }
                            },

                            {
                                "type": "text",
                                inputType: "email",
                                "name": "email",
                                "title": " Your e-mail:",
                                placeHolder: "contact@redalertlabs.com",
                                "isRequired": true,
                                validators: [
                                    {
                                        type: "email"
                                    }
                                ]

                            }, {
                                "type": "text",
                                inputType: "tel",
                                placeHolder: "+33 9 53 55 54 11",
                                "name": "phone",
                                "title": "Phone:",
                                "startWithNewLine": false,
                                "isRequired": true
                            },

                        ]

                    }]
                },
                /******************** second part primary assets************* */
                {
                    title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",

                    "name": "page3",

                    "customCSSClasses": "panel-partner",
                    elements: [{
                        title: "Solution Information",
                        type: "panel",
                        name: "panel3",
                        elements: [
                            {
                                type: "checkbox",
                                name: "car",
                                defaultValue: ['MoveImpact'],
                                title: "What kind of data is your Solution/Product processing?",
                                isRequired: true,
                                //hasOther: true,
                                otherText: "Others",
                                colCount: 5,
                                "renderAs": "prettycheckbox",
                                // "choicesOrder": "asc",
                                choices: [
                                    {
                                        "value": "MoveImpact",
                                        "text": "Move/Impact "
                                    }, {
                                        "value": "location",
                                        "text": "Location"
                                    }, {
                                        "value": "luminosity",
                                        "text": "Luminosity "
                                    },
                                    {
                                        "value": "temperature",
                                        "text": "Temperature"
                                    },
                                    {
                                        "value": "weight",
                                        "text": "Weight"
                                    },
                                    {
                                        "value": "depth",
                                        "text": "Depth"
                                    },
                                    {
                                        "value": "Pressure",
                                        "text": "Pressure"
                                    },
                                    {
                                        "value": "personaldata",
                                        "text": "Personal Data"
                                    },
                                    {
                                        "value": "banking",
                                        "text": "Financial Data"
                                    },
                                    {
                                        "value": "others",
                                        "text": "Others"
                                    },

                                ]
                            },
                            {
                                type: "comment",
                                name: "otherwise",
                                visibleIf: " {car} contains ['others'] ",
                                title: "Please specify",
                            },
                            {
                                "name": "comment1",
                                "title": "Please comment:",
                                "type": "comment",
                                "customCSSClasses": "panel-comment",
                                //"isRequired": true,
                                // "startWithNewLine": false,
                                //"visibleIf": "{choices.value} = \"depth\""
                            }
                        ]
                    }]
                },

                {
                    title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
                    "name": "page4",
                    elements: [{
                        type: "panel",
                        name: "panel5",
                        title: "Please select these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select and move numbers in front of the impact text accordingly. (*)",
                        //title:"Please select these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select and move numbers in front of the impact text accordingly.",
                        "isRequired": true,
                        "elements": [
                            {
                                "type": "dropdown",
                                //"renderAs": "select2",

                                "name": "privacy",
                                //titleLocation: "hidden",
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p1noir.png'   width='30px'/>",
                                defaultValue: '1',
                                "choices": [

                                    {
                                        value: "1",
                                        text: "Privacy",

                                    },
                                    {
                                        value: "2",
                                        text: "Confidentiality",
                                    },
                                    {
                                        value: "3",
                                        text: "Integrity",
                                    },
                                    {
                                        value: "4",
                                        text: "Availability",
                                    },
                                    {
                                        value: "5",
                                        text: "Authenticity",
                                    },
                                ],

                            },
                            //   {
                            //     type: "html",
                            //     startWithNewLine: "false",
                            //     name: "info",
                            //     title:"infoooo",
                            //     html: "<table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p1noir.png'   width='20px'/></td></row></body></table>"
                            // },


                            {
                                "type": "dropdown",
                                //"renderAs": "select2",
                                "name": "priv2",
                                startWithNewLine: "false",
                                //startWithNewLine: false,
                                //titleLocation: "hidden",
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-rougep2.png' width='30px'/>",
                                defaultValue: '1',
                                "choices": [

                                    {
                                        value: "1",
                                        text: "Privacy",

                                    },
                                    {
                                        value: "2",
                                        text: "Confidentiality",
                                    },
                                    {
                                        value: "3",
                                        text: "Integrity",
                                    },
                                    {
                                        value: "4",
                                        text: "Availability",
                                    },
                                    {
                                        value: "5",
                                        text: "Authenticity",
                                    },
                                ],

                            },
                            //   {
                            //     type: "html",
                            //     startWithNewLine: "false",
                            //     name: "info",
                            //     title:"infoooo",
                            //     html: "<table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-rougep2.png' width='20px'/></td></row></body></table>"

                            //   },
                            {
                                "type": "dropdown",
                                //"renderAs": "select2",
                                "name": "priv3",

                                //titleLocation: "hidden",
                                defaultValue: '1',
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p3orange.png' width='30px'/>",
                                "choices": [

                                    {
                                        value: "1",
                                        text: "Privacy",

                                    },
                                    {
                                        value: "2",
                                        text: "Confidentiality",
                                    },
                                    {
                                        value: "3",
                                        text: "Integrity",
                                    },
                                    {
                                        value: "4",
                                        text: "Availability",
                                    },
                                    {
                                        value: "5",
                                        text: "Authenticity",
                                    },
                                ],

                            },
                            //   {
                            //   type: "html",
                            //   startWithNewLine: "false",
                            //   name: "info1",
                            //   title:"infoooo",
                            //   value:"2",
                            //   html: "<table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p3orange.png' width='20px'/></td></row></body></table>"
                            //   },

                            {
                                "type": "dropdown",
                                //"renderAs": "select2",
                                "name": "privacy2",
                                startWithNewLine: "false",
                                defaultValue: '1',
                                // startWithNewLine: false,
                                // titleLocation: "hidden",
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p4jaune.png' width='30px'/>",
                                "choices": [

                                    {
                                        value: "1",
                                        text: "Privacy",

                                    },
                                    {
                                        value: "2",
                                        text: "Confidentiality",
                                    },
                                    {
                                        value: "3",
                                        text: "Integrity",
                                    },
                                    {
                                        value: "4",
                                        text: "Availability",
                                    },
                                    {
                                        value: "5",
                                        text: "Authenticity",
                                    },
                                ],

                            },
                            //   {
                            //   type: "html",
                            //   startWithNewLine: "false",
                            //   name: "info1",
                            //   title:"infoooo",
                            //   value:"2",
                            //   html: "<table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p4jaune.png' width='20px'/></td></row></body></table>"
                            //   },

                            {
                                "type": "dropdown",
                                //"renderAs": "select2",
                                "name": "priv5",
                                defaultValue: '1',

                                //width:"210px",
                                //titleLocation: "hidden",
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p5vert.png' width='30px'/>",
                                "choices": [

                                    {
                                        value: "1",
                                        text: "Privacy",

                                    },
                                    {
                                        value: "2",
                                        text: "Confidentiality",
                                    },
                                    {
                                        value: "3",
                                        text: "Integrity",
                                    },
                                    {
                                        value: "4",
                                        text: "Availability",
                                    },
                                    {
                                        value: "5",
                                        text: "Authenticity",
                                    },
                                ],

                            },
                            //   {
                            //   type: "html",
                            //   startWithNewLine: "false",
                            //   name: "info1",
                            //   title:"infoooo",
                            //   value:"2",
                            //   html:"<table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-p5vert.png' width='20px'/></td></row></body></table>"
                            //   },
                        ]
                    },

                        //   {
                        //     type:"panel",
                        //     name:"panel2",


                        //    startWithNewLine: false,
                        //      elements:[{


                        //         type: "html",
                        //        startWithNewLine: false,
                        //         name: "info",
                        //         title:"infoooo",
                        //         html: " <table><body> <row> <b style='font-weight:bold; color:darkred'> For Example: </b></row> <br/><row> <td><img src='https://image.noelshack.com/fichiers/2020/03/2/1579013932-capture-fears1.png'   width='200px'/></td></row></body></table>"
                        //      }],

                        //   }


                    ]
                },


                /*
                {
                
                "name": "page4",
                elements:[{
                
                  type:"panel",
                  name:"panel4",
                
                "elements": [
                {
                "type": "matrixdropdown",
                "name":"question2",
                "title": "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",
                "columns": [
                  {
                    "cellType": "rating",
                   " name": "level",
                    "title": "Level",
                     
                    "minRateDescription": "most",
                    "maxRateDescription": "least"
                },
                    {
                      "name": "comments",
                      "title": "Comments/Precision",
                      "cellType": "text"
                      },
                ],
                
                //"cellType": "checkbox",
                "rows": [
                "Privacy",
                "Confidentiality",
                "Integrity",
                "Availability",
                "Authenticity",
                ]
                }
                ]
                }]
                },*/

                {
                    title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
                    "name": "page5",
                    elements: [{
                        type: "panel",
                        name: "panel5",
                        title: "Please select these impacts by fears. Where 1 is the impact your fear the most and 3 you fear the least. Please select and move numbers in front of the impact text accordingly.(*)",
                        //title:"Please select these impacts by fears. Where 1 is the impact your fear the most and 3 you fear the least. Please select and move numbers in front of the impact text accordingly.",
                        "isRequired": true,
                        "elements": [
                            {
                                "type": "dropdown",
                                //"renderAs": "select2",
                                defaultValue: '1',
                                startWithNewLine: false,
                                "name": "safety",
                                // titleLocation: "hidden",
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578827664-p1noir.png' width='20px'/>",
                                "choices": [

                                    {
                                        value: "1",
                                        text: "Safety",

                                    },
                                    {
                                        value: "2",
                                        text: "Reputation & Financial Loss",
                                    },
                                    {
                                        value: "3",
                                        text: "Threat Scale",
                                    },
                                ],

                            },
                            //   {
                            //     type: "html",
                            //     startWithNewLine: false,
                            //     name: "info",
                            //     title:"infoooo",
                            //     html: " <table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578827664-p1noir.png' width='50px'/></td></row></body></table>"
                            // },
                            {
                                "type": "dropdown",
                                //"renderAs": "select2",
                                "name": "reputation",
                                startWithNewLine: false,
                                defaultValue: '1',
                                // titleLocation: "hidden",
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-orangep2.png' width='20px'/>",
                                "choices": [
                                    {
                                        value: "1",
                                        text: "Safety",
                                    },
                                    {
                                        value: "2",
                                        text: "Reputation & Financial Loss",
                                    },
                                    {
                                        value: "3",
                                        text: "Threat Scale",
                                    },
                                ],

                            },
                            //   {
                            //     type: "html",
                            //     startWithNewLine: false,
                            //     name: "info",
                            //     title:"infoooo",
                            //     html: "<table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578834173-orangep2.png' width='50px'/></td></row></body></table>"

                            //   },
                            {
                                "type": "dropdown",
                                //"renderAs": "select2",
                                "name": "threat",
                                defaultValue: '1',
                                startWithNewLine: false,
                                //titleLocation: "hidden",
                                "title": "<img src='https://image.noelshack.com/fichiers/2020/02/7/1578834254-vertp3.png' width='20px'/>",
                                "choices": [

                                    {
                                        value: "1",
                                        text: "Safety",

                                    },
                                    {
                                        value: "2",
                                        text: "Reputation & Financial Loss",
                                    },
                                    {
                                        value: "3",
                                        text: "Threat Scale",
                                    },
                                ],

                            },
                            //   {
                            //   type: "html",
                            //   startWithNewLine: false,
                            //   name: "info1",
                            //   title:"infoooo",
                            //   value:"2",
                            //   html: " <table><body><row> <td><img src='https://image.noelshack.com/fichiers/2020/02/7/1578834254-vertp3.png' width='50px'/></td></row></body></table>"
                            //   },

                            /*  {
                              "type": "matrixdropdown",
                              "name":"question3",
                              "title": "Please rank these impacts by fears. Where 1 is the impact your fear the most and 3 you fear the least. Please select numbers in front of the impact text accordingly",
                              "columns": [
                                {
                                  "cellType": "rating",
                                 " name": "level",
                                  "title": "Level",
                                  defaultrateValue: ['value3'],
                                  "rateValues": [
                                    {
                                    "value": "value1",
                                    "text": "1",
                                    },
                                    {
                                    "value": "value2",
                                    "text": "2"
                                    },
                                    {
                                    "value": "value3",
                                    "text": "3"
                                    },           
                                  ] 
                              },
                                  {
                                    "name": "comments2",
                                    "title": "Comments/Precision",
                                    "cellType": "text"
                                    },
                              ],
                              
                              "rows": [
                              "Safety",
                              "Reputation & Financial Loss",
                              "Threat Scale",
                              
                              ]
                              }*/
                        ],
                    },
                    {
                        type: "panel",
                        name: "panel2",

                        //   startWithNewLine: false,
                        elements: [{
                            type: "html",
                            //   startWithNewLine: false,
                            name: "info",
                            title: "infoooo",
                            html: " <table><body> <row> <b style='font-weight:bold; color:darkred'> For Example: </b></row> <br/><br/><row> <td><img src='https://image.noelshack.com/fichiers/2020/03/2/1579013932-capture-fears2.png'   width='300px'/></td></row></body></table>"
                        }],
                    }
                    ],
                },
                {
                    title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
                    "name": "page6",
                    elements: [{
                        type: "panel",
                        name: "panel6",
                        "elements": [
                            {
                                type: "multipletext",
                                name: "pricelimit",
                                title: "From a market point of view: ",
                                "isRequired": true,
                                colCount: 2,
                                items: [
                                    {
                                        name: "region",
                                        title: "What regions are you willing to sell the solution/products to?"
                                    }, {
                                        name: "business",
                                        title: "What type of business are you willing to sell the solution/product to? "
                                    }
                                ]
                            },
                            {
                                "type": "comment",
                                "name": "comment2",
                                "title": "Comments",

                            }
                        ]
                    }]
                },
                {
                    title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",

                    "name": "page7",
                    title: "General Considerations",
                    elements: [{

                        type: "panel",
                        name: "panel7",

                        elements: [
                            {
                                type: "checkbox",
                                name: "car1",
                                "renderAs": "prettycheckbox",
                                title: "Why are considering an evaluation/certification of your Solution/Product?",
                                isRequired: true,
                                defaultValue: ['notsure'],
                                //hasOther: true,
                                otherText: "Others",
                                colCount: 4,
                                // "choicesOrder": "asc",
                                choices: [
                                    {
                                        "value": "government",
                                        "text": "Government bid "
                                    }, {
                                        "value": "customer",
                                        "text": "Customer requirement"
                                    }, {
                                        "value": "nice",
                                        "text": "Nice to have "
                                    },
                                    {
                                        "value": "temperature",
                                        "text": "Temperature"
                                    },
                                    {
                                        "value": "improve",
                                        "text": "Improve security"
                                    },
                                    {
                                        "value": "marketing",
                                        "text": "Marketing"
                                    },
                                    {
                                        "value": "notsure",
                                        "text": "I'm not sure"
                                    },
                                    {
                                        "value": "others",
                                        "text": "Others"
                                    },
                                ]
                            },
                            {
                                type: "comment",
                                name: "car1comment",
                                visibleIf: " {car1} contains ['others'] ",
                                title: "Please specify",

                            },
                            {
                                "name": "comment3",
                                "title": "Please comment:",
                                "type": "comment",
                                //"startWithNewLine": false,

                            }
                        ]
                    }]
                },

                /******************************* End of Likelihood ********************************** */
            ],
            "showQuestionNumbers": "off",
            // completedHtml: "<p><h4>Redirect....... !!</h4></p>"
        };

        const model = new Survey.Model(json);
        var converter = new Showdown.Converter();
        model
            .onTextMarkdown
            .add(function (model, options) {
                //convert the markdown text to html
                var str = converter.makeHtml(options.text);
                //remove root paragraphs <p></p>
                str = str.substring(3);
                str = str.substring(0, str.length - 4);
                //set html
                options.html = str;
            });

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

                        <Col>
                            <Card >

                                <Card.Body >
                                    <Survey.Survey
                                        model={model}
                                        id="survey"
                                        onAfterRenderQuestion={this.onAfterRenderQuestion}
                                        onAfterRenderPanel={this.onAfterRenderPanel}
                                        // onComplete={this.onComplete}
                                        onTextMarkdown={this.onTextMarkdown}
                                        onCurrentPageChanged={this.doOnCurrentPageChanged}
                                        sendResultOnPageNext={true}
                                        // showCompletedPage={this.showCompletedPage}
                                        onPartialSend={this.onSurveyPartialSend}
                                        onComplete={this.onComplete}
                                        onValueChanged={this.onValueChanged}

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
export default HighLevel;