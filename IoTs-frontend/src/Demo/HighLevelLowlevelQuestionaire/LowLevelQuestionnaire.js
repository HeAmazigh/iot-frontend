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



import "antd/dist/antd.css";
//import "survey-react/survey.css";
import "survey-react/modern.css";

//Survey.StylesManager.applyTheme("modern");
Survey.StylesManager.applyTheme("modern");


class LowLevel extends Component {

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

    onComplete = (model) => {
        model.onComplete.add(function (sender, options) {
            //Show message about "Saving..." the results
            options.showDataSaving("saving responses..");//you may pass a text parameter to show your own text
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/surveyresult/result");
            //xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            xhr.onload = xhr.onerror = function () {
                if (xhr.status === 200) {
                    options.showDataSavingSuccess("success!"); // you may pass a text parameter to show your own text
                    // Or you may clear all messages:
                    // options.showDataSavingClear();
                } else {
                    //Error
                    options.showDataSavingError("Error when saving the survey on database"); // you may pass a text parameter to show your own text
                }
            };
            xhr.send(JSON.stringify(sender.data));
        });
    }

    handleClick(currentTab) {
        this.setState({ currentTab });
    }

    render() {
       
  const json = {
    showProgressBar: "top",
    progressBarType: "buttons",
        // showProgressBar: "top",
       pages: [
   
         /************************************* Page1 Solution Iformation********************************************** */
      
      { 
       title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
      
      
       "name": "page1",
       //title:"Contact Information",
       elements:[{
   
           type:"panel",
           name:"panel",
       "elements": [
           {
               "name": "network1",
               "title":"What network is your solution/product using?",
              // hasOther: true,
              startWithNewLine: "false",
               "renderAs": "prettycheckbox",
               "colCount":1,
               defaultValue: ['1'],
               otherText:"Others, describe",
               "type": "radiogroup",
               "choices":[
                   {
                       "value":"1",
                       "text": "Wifi"
                   },
                   {
                       "value":"2",
                       "text": "GSM"
                   },
                   {
                     value:"others",
                     text:"Others",
                   }
               ],
               
               
                   },
                   {
                    "name": "comment1",
                    "title": "Comments:",
                    "type": "comment",
                    
                    //"isRequired": true,
                    startWithNewLine: "false",
                   
                },
                   {
                     type:"comment",
                     name:"network",
                     visibleIf: " {network1} contains ['others'] ",
                     title:"Please specify",
                     
                      },
   
                   
   
   
                   {
                       "name": "physically",
                       "colCount":2,
                       defaultValue: ['1'],
                       
                      // hasOther: true,
                       "title":"Does your solution/product physically protects itself?",
                       otherText:"Others, describe",
                       "renderAs": "prettycheckbox",
                       "type": "radiogroup",
                       "choices":[
                          {
                              "value":"1",
                              "text": "None"
                          },
                       {
                           "value":"2",
                          "text": "Tamper-Evident"
                       },
                      {
                          "value":"3",
                          "text": "Tamper-Resistant"
                           },
                           {
                             value:"others",
                             text:"Others",
                           }
                        
                          
                       ],
                       
                       
                           },
                           {
                            "name": "comment2",
                            "title": "Comments:",
                            "type": "comment",
                            //"isRequired": true,
                            startWithNewLine: "false",
                           
                        },
                           {
                             type:"comment",
                             name:"network",
                             visibleIf: " {physically} contains ['others'] ",
                             title:"Please specify",
                             
                              },
                           
                          
            
       ]
       }],
   },
   
   /*********************************  Page2 General Considerations part1   *************************************** */
   
   { 
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
       "name": "page2",
      // title:"General Considerations",
      
   
       elements:[{
   
           type:"panel",
           name:"panel2",
       "elements": [
           
           {
               "name": "team",
               "title":"How many people are on your development team?",
              
               "colCount":1,
               "renderAs": "prettycheckbox",
               defaultValue: ['1'],
               "type": "radiogroup",
               "choices":[
   
                   {
                       "value":"1",
                       "text": "(<=5)",
                        },
                        {
                           "value":"2",
                           "text": "(<=10)",
                            },
                            {
                               "value":"3",
                               "text":"(>=10)",
                                },
                  
                  
               ],
               
               
                   },
   
                   {
                       "name": "comment3",
                       "title": "Comments:",
                       "type": "comment",
                       //"isRequired": true,
                       "startWithNewLine": false,
                      
                   },
   
   
                   {
                       "name": "securityfeatures",
                       "colCount":1,
                       "title":"How many people are involved with development of the security features of your solution/product?",
                       "renderAs": "prettycheckbox",
                       defaultValue: ['1'],
                       "type": "radiogroup",
                       "choices":[
   
                           {
                               "value":"1",
                               "text": "(<=2)",
                                },
                                {
                                   "value":"2",
                                   "text": "(<=5)",
                                    },
                                    {
                                       "value":"3",
                                       "text":"(>=5)",
                                        },
                          
                          
                       ],
                       
                       
                           },{
                               "name": "securityfeatures",
                               "title": "Comments:",
                               "type": "comment4",
                               //"isRequired": true,
                               "startWithNewLine": false,
                              
                           },
                           {
                             defaultValue:'false',
                               "name": "release",
                               "title": "Is the development of the release that you want to evaluate already completed",
                               "label": "Is the development of the release that you want to evaluate already completed",
                               "type": "boolean",
                               //"isRequired": true,
                               
                              
                           },
                           {
                               "name": "text1",
                               "title": "Comments:",
                               "type": "text",
                               //"isRequired": true,
                               "startWithNewLine": false,
                              
                           }
            
       ]
       }],
   },
   
   
   
   
   
   
   
   
   
             /******************** page3 General consideration part2************* */
   
             {
               title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
               "name": "page3",
              // title:"General Consideration",
               elements:[{
   
               type:"panel",
               name:"panel3",
   
               elements:[{
              type: "checkbox",
              "renderAs": "prettycheckbox",
               name: "solutiontype",
               title: "What is your solution type?",
              // isRequired: true,
              // hasOther: true,
               defaultValue: ['softos'],
               otherText:"Others",
                colCount: 1,
               // "choicesOrder": "asc",
             choices: [
               {
                 "value": "softos",
                 "text": "Software Application and OS embedded on a Security Certified Hardware(e.g.IC)"
             }, {
                 "value": "roe",
                 "text": "Software Application on a Security Certified ROE(e.g. SE, TEE)"
             }, {
                 "value": "noncertified",
                 "text": "Software Application on a non-Certified ROE(e.g. SE, TEE,) "
             },
             {
               "value": "microprocessor",
               "text": "Software Application Embedded on a multi-purpose Micro-Processor"
           },
           {
               "value": "os",
               "text": "Software Application and Embedded OS on a multi-purpose Micro-Processor"
           },
           {
             "value": "others",
             "text": "Others"
   
           }
          
           
           ]
         },
         {
           type:"comment",
           name:"network",
           visibleIf: " {solutiontype} contains ['others'] ",
           title:"Please specify",
           
            },
   
         {
           "name": "comment5",
           "title": "Comments:",
           "type": "comment",
           //"isRequired": true,
          //"startWithNewLine": false,
           //"visibleIf": "{choices.value} = \"depth\""
       },
       
   ]},
   
       ] },
   
   
   
             /******************** page4 General consideration part2************* */
   
             {
               title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
               "name": "page4",
              // title:"General Consideration",
               elements:[{
   
                   type:"panel",
                   name:"panel4",
   
               elements:[{
               type: "radiogroup",
               "renderAs": "prettycheckbox",
               name: "solutionsize",
               defaultValue: ['1'],
               title: "What is your solution size(lines of code)",
              // isRequired: true,
               
                colCount: 1,
               // "choicesOrder": "asc",
             choices: [
               {
                 "value": "1",
                 "text": "Small (<10 000)"
             }, {
                 "value": "2",
                 "text": "Small to medium (< 100 000)"
             }, {
                 "value": "3",
                 "text": "Medium (< 1000 000) "
             },
             {
               "value": "4",
               "text": "Medium to large (< 10 000 000)"
           },
           {
               "value": "5",
               "text": "Large (> 10 000 000)"
           },
          
           
           ]
         },
   
         {
           "name": "comment7",
           "title": "Comments:",
           "type": "comment",
           //"isRequired": true,
          "startWithNewLine": false,
           //"visibleIf": "{choices.value} = \"depth\""
       },
         {
           defaultValue:'false',
           "name": "cryptoself",
                               "title": "Crypto based:Is the cryptographic implementation self-developed?",
                               "label": "Crypto based:Is the cryptographic implementation self-developed?",
                               "type": "boolean",
           //"isRequired": true,
          
          
       },
       {
           "name": "text2",
           "title": "Comments:",
           "type": "text",
           //"isRequired": true,
          "startWithNewLine": false,
           //"visibleIf": "{choices.value} = \"depth\""
       },
         {
           defaultValue:'false',
           "name": "cryptoguid",
                               "title": "Crypto based:In case of using a certified IC cryptographic library, does the developer follow all the IC security guidance?",
                               "label": "Crypto based:In case of using a certified IC cryptographic library, does the developer follow all the IC security guidance?",
                               "type": "boolean",
           //"isRequired": true,
           
          
       },
       {
           "name": "text3",
           "title": "Comments:",
           "type": "text",
           //"isRequired": true,
          "startWithNewLine": false,
           //"visibleIf": "{choices.value} = \"depth\""
       }
       
       
       
       ] 
               }],
   },
   
   
   
    /******************************* Page5 Evaluation Scope********************************* */
   
      
    {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page5",
    // title:"Scope & Evaluation Identification Questionnaire",
     elements:[
       {
   
         type:"panel",
         name:"panel5",
   
     elements:[
       
       {
         type: "multipletext",
         title:"Answer this questions",
         name: "evalandscope",
         
         colCount: 2,
         items: [
             {
                 name: "sol",
                 title: "What is the solution/product that you want to evaluate/certificate?"
             }, {
                 name: "scope",
               
                 title: "What is the scope of the evaluation/certification that you are aiming? "
   
             }
         ]
           
         },
   
   {
   "name": "comment6",
   "title": "Comments:",
   "type": "comment",
   //"isRequired": true,
   
   },
   
   ] 
     }],
   },
   
   
     
    /******************************* Page5 Evaluation Scope part2********************************* */
   
      
    {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page6",
     //title:"Scope & Evaluation Identification Questionnaire",
     elements:[
       {
   
         type:"panel",
         name:"panel6",
   
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:"Has a threat model been developed for the solution?",
         name: "yesno1",
         
       
           
         },
   
   {
   "name": "text4",
   "title": "Comments:",
   "type": "text",
   "startWithNewLine": false,
   //"isRequired": true,
   
   },
   
   {
     defaultValue:'false',
     type: "boolean",
     title:"Was the threat environment given consideration during development?",
     name: "yesno2",
     
   
       
    },
   
   {
   "name": "text5",
   "title": "Comments:",
   "type": "text",
   "startWithNewLine": false,
   //"isRequired": true,
   
   },
   
   {
     defaultValue:'false',
     type: "boolean",
     title:" Do you plan to put later releases of your solution under certificate/evaluation Maintenance?",
     name: "yesno3",
     
   
       
     },
   
   {
   "name": "text6",
   "title": "Comments:",
   "type": "text",
   "startWithNewLine": false,
   //"isRequired": true,
   
   },
   
   
   
   ] 
     }],
   },
   
   /******************************* design and  documentation  part1********************************* */
   
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page7",
    // title:"Design & Documentation",
     elements:[
       {
   
         type:"panel",
         name:"panel7",
         
     elements:[
       
       {
         type: "checkbox",
         "renderAs": "prettycheckbox",
         //hasOther:true,
         defaultValue: ['1'],
         title:"In general, what type of design documentation do you develop or maintain for your solution/product?",
         name: "general1",
         choices:[
          { 
            value:"1",
           text:"Feature-based documentation only; old design documentation is not updated"
          },
          { 
           value:"2",
          text:"Updates of old design documentation to reflect the updated implementation in a new release"
         },
         { 
           value:"3",
          text:"Mixed"
         },
         { 
           value:"4",
          text:"None"
         },
         { 
           value:"others",
          text:"Others"
         },
   
         ]
       
           
         },
         {
           type:"comment",
           name:"ge",
           visibleIf: " {general1} contains ['others'] ",
           title:"Please specify",
           
            },
   
   {
   "name": "commentdesigne",
   "title": "Comments:",
   "type": "comment",
   //"startWithNewLine": false,
   //"isRequired": true,
   
   },
   
   ] 
     }],
   },
   
   /******************************* design and  documentation  part2********************************* */
   
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page8",
    // title:"Design & Documentation",
     elements:[
       {
   
         type:"panel",
         name:"panel8",
         
     elements:[
       
       {
         type: "radiogroup",
        // hasOther: true,
         "renderAs": "prettycheckbox",
         //otherText:"Others",
         defaultValue: ['4'],
         title:" Are all interfaces that provide access to security functionality specified in a functional specification for the release that is going to be certified/evaluated?",
         name: "general",
         choices:[
          { 
            value:"1",
           text:"Yes, all are specified"
          },
          { 
           value:"2",
          text:"only some are specified"
         },
         { 
           value:"3",
          text:"Only those that are intended for customer use are specified"
         },
         { 
           value:"4",
          text:"None are specified"
         },
         { 
           value:"others",
          text:"Others"
         },
   
         ]
       
           
         },
         {
           type:"comment",
           name:"gener",
           visibleIf: " {general} contains ['others'] ",
           title:"Please specify",
           
            },
   
   {
   "name": "comment10",
   "title": "Comments:",
   "type": "comment",
   "startWithNewLine": false,
   //"isRequired": true,
   
   },
   
   ] 
     }],
   },
   
   
   /******************************* design and  documentation  part3********************************* */
   
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page9",
    // title:"Design & Documentation",
     elements:[
       {
   
         type:"panel",
         name:"panel9",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:" Do you have a high-level design document that describes the major structural units (subsystems) of the solution/product and the implementation of its security functionality for the release that is going to be certified/evaluated?",
         name: "highlevel1",
         
       },
       {
         "name": "text7",
         "title": "Comments:",
         "type": "text",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
       {
         defaultValue:'false',
         type: "boolean",
         title:"If you aim for a High level of Assurance, Do you have low-level designs for the implementation of your solution/product on a module-based level?",
         name: "highlevel",
         
       },
   
   {
   "name": "text8",
   "title": "Comments:",
   "type": "text",
   "startWithNewLine": false,
   //"isRequired": true,
   
   },
   
   ] 
     }],
   },
   
   
   /******************************* design and  documentation  part4********************************* */
   
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page10",
    // title:"Design & Documentation",
     elements:[
       {
   
         type:"panel",
         name:"panel10",
         
     elements:[
       
       {
         type: "checkbox",
        // hasOther: true,
         "renderAs": "prettycheckbox",
        // otherText:"Others",
         title:"Do you have any of these manuals?",
         defaultValue: ['1'],
         name: "manuals",
         choices:[
          { 
            value:"1",
           text:"Administration guide"
          },
          { 
           value:"2",
          text:"User guide"
         },
         { 
           value:"3",
          text:"Installation guide"
         },
         { 
           value:"4",
          text:"Error Reference/Troubleshooting"
         },
         { 
           value:"others",
          text:"Others"
         },
   
         ]
        },
        {
            "name": "comment11",
            "title": "Comments:",
            "type": "comment",
            "startWithNewLine": false,
            //"isRequired": true,
            
            },
        {
         type:"comment",
         name:"manual",
         visibleIf: " {manuals} contains ['others'] ",
         title:"Please specify",
         
          },
   
   
   {
     defaultValue:'false',
     type: "boolean",
     title:" Do you have a manual that provides guidance on secure configuration and operation of the solution/product? ",
     name: "guidance",
     
   },
   {
     "name": "text9",
     "title": "Comments:",
     "type": "text",
     "startWithNewLine": false,
     //"isRequired": true,
     
     },
   
   
   ] 
     }],
   },
   
   
   /******************************* Processus & procedures  part1********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page11",
    // title:"Processus & Procedures",
     elements:[
       {
   
         type:"panel",
         name:"panel11",
         
     elements:[
       
       {
         type: "checkbox",
        // hasOther: true,
         "renderAs": "prettycheckbox",
        // otherText:"Others",
         defaultValue: ['1'],
         title:"Which of the following items do you have under configuration management (version control, access control, release management)?",
         name: "config",
         choices:[
          { 
            value:"1",
           text:"Implementation representation (such as source code)"
          },
          { 
           value:"2",
          text:"Design documentation"
         },
         { 
           value:"3",
          text:"Test plans, test cases, and results"
         },
         { 
           value:"4",
          text:"User manuals"
         },
         { 
           value:"5",
          text:"Security-relevant defects"
         }, { 
           value:"6",
          text:"Common Criteria-specific evidence"
         },
         { 
           value:"others",
          text:"Others"
         },
   
         ]
        },
        {
         type:"comment",
         name:"conf",
         visibleIf: " {config} contains ['others'] ",
         title:"Please specify",
         
          },
   
   {
   "name": "comment12",
   "title": "Comments:",
   "type": "comment",
   "startWithNewLine": false,
   //"isRequired": true,
   
   },
   
   
   ] 
     }],
   },
   
   /******************************* Processus & procedures  part2********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page12",
    // title:"Processus & Procedures",
     elements:[
       {
   
         type:"panel",
         name:"panel12",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:" Do you own the complete source code for your solution/product? ",
         name: "compsourcecode",
         
       },
       {
         "name": "text10",
         "title": "Comments:",
         "type": "text",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           defaultValue:'false',
           type: "boolean",
           title:" Did any external organization contribute to the security functions of your solution/product? ",
           name: "organization",
           
         },
         {
           "name": "text11",
           "title": "Comments:",
           "type": "text",
           "startWithNewLine": false,
           //"isRequired": true,
           
           },
           {
             defaultValue:'false',
             type: "boolean",
             title:" Is the source or binary code of those externally developed parts maintained in your configuration management system?",
             name: "binarycode",
             
           },
           {
             "name": "text12",
             "title": "Comments:",
             "type": "text",
             "startWithNewLine": false,
             //"isRequired": true,
             
             },
   
   
   
   ] 
     }],
   },
   
   /******************************* Processus & procedures  part3********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page13",
     //title:"Processus & Procedures",
     elements:[
       {
   
         type:"panel",
         name:"panel13",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:" Does your solution/product contain any open source software? ",
         name: "opensourcesoftware",
         
       },
       {
         "name": "text13",
         "title": "Comments:",
         "type": "text",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           defaultValue:'false',
           type: "boolean",
           title:" Is the adopted open source code under configuration management control? ",
           name: "managementcont",
           
         },
         {
           "name": "text14",
           "title": "Comments:",
           "type": "text",
           "startWithNewLine": false,
           //"isRequired": true,
           
           },
           {
             type: "radiogroup",
             "renderAs": "prettycheckbox",
             hasOther:true,
             
             otherText:"Multiple locations. If yes please list the locations:",
             title:" Where is your solution/product developed and tested?",
             name: "tested",
             defaultValue: ['1'],
             choices:[
        {
         value:"1",
         text:"One location"
         }
   
             ]
             
           },
           {
             "name": "text15",
             "title": "Comments:",
             "type": "text",
             "startWithNewLine": false,
             //"isRequired": true,
             
             },
   
   
   
   ] 
     }],
   },
   
   /******************************* Processus & procedures  part4********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page14",
    // title:"Processus & Procedures",
     elements:[
       {
   
         type:"panel",
         name:"panel14",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:"Do all developements sites implement measures to physically and logically protect the development of the solution/product (for example, the source code and design documentation)?",
         name: "implement",
         
       },
       {
         "name": "text16",
         "title": "Comments:",
         "type": "text",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           type: "comment",
           title:" Please list the programming languages used to develop the solution/product: ",
           name: "managementcontrol",
           
         },
         {
           "name": "text17",
           "title": "Comments:",
           "type": "text1",
           "startWithNewLine": false,
           //"isRequired": true,
           
           },
          
   
   
   
   ] 
     }],
   },
   
     
   /******************************* Processus & procedures  part5********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page15",
     //title:"Processus & Procedures",
     elements:[
       {
   
         type:"panel",
         name:"panel15",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:"Are your release management processes and procedures documented?",
         name: "process",
         
       },
       {
         "name": "text18",
         "title": "Comments:",
         "type": "text",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           type: "checkbox",
           "renderAs": "prettycheckbox",
           title:"Please select the development activities for which you have documented processes: ",
           name: "docprocess",
           defaultValue: ['1'],
           //hasOther:"true",
           choices:[
   
             { 
               value:"1",
                text:"Configuration management"
           },
           { 
             value:"2",
              text:"Delivery and distribution"
         },
         { 
           value:"3",
            text:"Security flaw reporting"
       },
       { 
         value:"4",
          text:"Security flaw fix delivery"
     },
     { 
       value:"5",
        text:"Lifecycle"
   },
   { 
     value:"others",
      text:"Others"
   },
   
   
   
           ]
           
         },
         {
            "name": "comment15",
            "title": "Comments:",
            "type": "comment",
            "startWithNewLine": false,
            //"isRequired": true,
            
         },
   
         {
           type:"comment",
           name:"docproc",
           visibleIf: " {docprocess} contains ['others'] ",
           title:"Please specify",
           
            },
        
      
   ] 
     }],
   },
   
   /******************************* Processus & procedures  part6********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page16",
     //title:"Processus & Procedures",
     elements:[
       {
   
         type:"panel",
         name:"panel16",
         
     elements:[
       
       
   
         {
           type: "radiogroup",
           "renderAs": "prettycheckbox",
           defaultValue: ['3'],
           title:"Have the use and function of your development tools (such as programming languages, compilers, build scripts, test tools) been documented? ",
           name: "tools",
          
           choices:[
   
             { 
               value:"1",
                text:"Yes"
           },
           { 
             value:"2",
              text:"Partly"
         },
         { 
           value:"3",
            text:"No"
          },
       
    
   
           ]
           
         },
         {
           "name": "comment19",
           "title": "Comments:",
           "type": "comment",
           "startWithNewLine": false,
           //"isRequired": true,
           
        },
      
   ] 
     }],
   },
   
   
   /******************************* Testing & VA part1********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page17",
    // title:"Testing & vulnerability analysis",
     elements:[
       {
   
         type:"panel",
         name:"panel17",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:"Do you perform functional testing of your solution/product?",
         name: "functtesting",
         
       },
       {
         "name": "text20",
         "title": "Comments:",
         "type": "text",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           defaultValue:'false',
           type: "boolean",
           title:" Do you perform regression testing to make sure that security functionality implemented in earlier releases still works as expected?",
           name: "regression",
           
         },
         {
           "name": "text21",
           "title": "Comments:",
           "type": "text",
           "startWithNewLine": false,
           //"isRequired": true,
           
           }, 
      
   ] 
     }],
   },
   
   
   
   /******************************* Testing & VA part2********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page18",
    // title:"Testing & vulnerability analysis",
     elements:[
       {
   
         type:"panel",
         name:"panel18",
         
     elements:[
       
       
   
         {
           type: "checkbox", 
           "renderAs": "prettycheckbox",
          // hasOther:true,
           //otherText:"Others.Please specify",
           title:" Select the parts of your test procedures that are documented:",
           name: "testprocedur",
           defaultValue: ['1'],
           choices:[
             {
               value:"1",
               text:"Description of the test cases"
             },
             {
               value:"2",
               text:"Coverage of security functionality"
             },
             {
               value:"3",
               text:"Testing process"
             },
             {
               value:"4",
               text:"Test plan"
             },
             {
               value:"5",
               text:"Expected test results"
             },
             {
               value:"5",
               text:"Actual test results"
             },
             {
               value:"others",
               text:"Others"
             },
             
             
   
           ]
           
         },
         {
           type:"comment",
           name:"testproced",
           visibleIf: " {testprocedur} contains ['others'] ",
           title:"Please specify",
           
            },
         {
           "name": "comment22",
           "title": "Comments:",
           "type": "comment",
           "startWithNewLine": false,
           //"isRequired": true,
           
           }, 
      
   ] 
     }],
   },
   
   
   /******************************* Testing & VA part3********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page19",
    // title:"Testing & vulnerability analysis",
     elements:[
       {
   
         type:"panel",
         name:"panel19",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:"Do you perform a vulnerability analysis for the solution/product?",
         name: "perform",
         
       },
       {
         "name": "comment23",
         "title": "Comments:",
         "type": "comment",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           defaultValue:'false',
           type: "boolean",
           title:" Do you conduct code reviews before integrating externally developed code into the solution/product?",
           name: "regression",
           
         },
         {
           "name": "comment24",
           "title": "Comments:",
           "type": "comment",
           "startWithNewLine": false,
           //"isRequired": true,
           
           }, 
      
   ] 
     }],
   },
   
   
   /******************************* Testing & VA part3********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page20",
    // title:"Testing & vulnerability analysis",
     elements:[
       {
   
         type:"panel",
         name:"panel20",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:"Do you have programming guidelines that provide guidance to developers on how to avoid typical programming errors (such as buffer overflows)?",
         name: "program",
         
       },
       {
         "name": "comment25",
         "title": "Comments:",
         "type": "comment",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           defaultValue:'false',
           type: "boolean",
           title:" Do you monitor public sources that publish solution/product-related flaws and exploits to ensure that your solution/product is not affected?",
           name: "monitor",
           
         },
         {
           "name": "comment26",
           "title": "Comments:",
           "type": "comment",
           "startWithNewLine": false,
           //"isRequired": true,
           
           }, 
      
   ] 
     }],
   },
   
   
   /******************************* Testing & VA part4********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page21",
     //title:"Testing & vulnerability analysis",
     elements:[
       {
   
         type:"panel",
         name:"panel21",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:"Do you have procedures in place to ensure the timely fix of each security vulnerability that is identified in the solution/product?",
         name: "timely",
         
       },
       {
         "name": "comment27",
         "title": "Comments:",
         "type": "comment",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           defaultValue:'false',
           type: "boolean",
           title:"Does your solution/product implement probabilistic or permutational mechanisms (such as password-based authentication)?",
           name: "probab",
           
         },
         {
           "name": "comment28",
           "title": "Comments:",
           "type": "comment",
           "startWithNewLine": false,
           //"isRequired": true,
           
           }, 
      
   ] 
     }],
   },
   
   /******************************* Testing & VA part5********************************* */
    
      
   {
     title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
   
     "name": "page22",
     //title:"Testing & vulnerability analysis",
     elements:[
       {
   
         type:"panel",
         name:"panel22",
         
     elements:[
       
       {
         defaultValue:'false',
         type: "boolean",
         title:" Do you perform analysis of the user and administration manuals that are delivered with the solution/product to ensure that all security functionality is correctly described?",
         name: "administ",
         
       },
       {
         "name": "comment29",
         "title": "Comments:",
         "type": "comment",
         "startWithNewLine": false,
         //"isRequired": true,
         
         },
   
         {
           defaultValue:'false',
           type: "boolean",
           title:"Does your solution/product implement cryptographic mechanisms?",
           name: "cryptog",
           
         },
         {
           "name": "comment30",
           "title": "Comments:",
           "type": "comment",
           "startWithNewLine": false,
           //"isRequired": true,
           
           }, 
      
   ] 
     }],
   },
   
   
   
         /******************************* End of Json********************************** */
   
       ],
       "showQuestionNumbers": "off",
       completedHtml: "<p><h4>Please wait..</h4></p>"
     };
        const model = new Survey.Model(json);

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
                                        onComplete={this.onComplete}
                                        onTextMarkdown={this.onTextMarkdown}
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
export default LowLevel;