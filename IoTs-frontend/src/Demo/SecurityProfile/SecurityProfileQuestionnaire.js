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
import Treemenu from './TreeMenu'

import "antd/dist/antd.css";
//import "survey-react/survey.css";
import "survey-react/modern.css";

//Survey.StylesManager.applyTheme("modern");
Survey.StylesManager.applyTheme("modern");


class SecurityProfileQuestionnaire extends Component {

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
    // this.surveyPrev = React.createRef()
    // this.surveyNext = React.createRef()
    // this.surveyComplete = React.createRef()
    //this.surveyProgress = React.createRef()
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

  // New add
  //Custom Navigation
  // doOnCurrentPageChanged(model) {
  //   setTimeout(function () {
  //     this.surveyPrev.style.display = !this.isFirstPage ? 'inline' : 'none';
  //     this.surveyNext.style.display = !this.isLastPage ? 'inline' : 'none';
  //     this.surveyComplete.style.display = this.isLastPage ? 'inline' : 'none';
  //   }, 0);
  // }

  // setupPageSelector = model => {
  //   var selector = document.getElementById('pageSelector');
  //   for (var i = 0; i < model.pages.length; i++) {
  //     var option = document.createElement('option');
  //     option.value = i;
  //     option.text = 'Page ' + (i + 1);
  //     selector.add(option);
  //   }
  // }
  // componentDidMount = () => {
  //   this.doOnCurrentPageChanged(this.model);
  //   // this.currentPage(this.model)
  // }
  // prevPage = () => {
  //   this.model.prevPage();
  //   // this.setActiveStep(this.model.prevPage()- 1);
  // };
  // nextPage = () => {
  //   this.model.nextPage();
  // };
  // completeLastPage = () => {
  //   this.model.completeLastPage();
  // };
  // showNavigationButtons(model) {
  //   this.model.showNavigationButtons = false;
  // }
  showCompletedPage(model, options) {
    this.model.showCompletedPage = false;
  }
  // onComplete=()=>{ 
  //   axios.post('/api/survey')
  //       .then(res => {
  //           const secgoals = res.data;
  //           this.setState({ secgoals });
  //       })
  //     }
  //  onComplete = (survey, options) => {
  //   console.log(`Resultados do survey : ${survey.data}`);
  //  }
  //   onComplete = (result) => {
  //     let output_data;
  //     console.log(JSON.stringify(output_data));
  //   output_data.forEach((result_item) => {
  //     var resultOutput = JSON.stringify(result_item)
  //     var request = new XMLHttpRequest();
  //     request.open('POST', '/api/surveyresult/result', true);
  //     request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  //     request.send(resultOutput);
  //   })
  // }
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

  // onComplete(model, options) {
  //   axios.post(
  //     {
  //       method: 'post',
  //       url: '/api/surveyresult/result',
  //       data: model.data

  //     });
  //   console.log(model.data)
  //   console.log("survey results :" + JSON.stringify(model.data))
  //   //       .then(res => {
  //   //           const secgoals = res.data;
  //   //           this.setState({ secgoals });
  //   //       })
  //   //     }
  // }

  handleClick(currentTab) {
    this.setState({ currentTab });
  }

  render() {
    const json = {
      //clearInvisibleValues: "onHidden",
      //showProgressBar: "top",
      showProgressBar: "top",
      progressBarType: "buttons",
      pages: [
    
        /******************************************************* Collect ********************************************** */
        {
          title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
          name: "page1",
          elements: [
    
            {
              // "title": "Device Features selection",
              isRequired: true,
              type: "panel",
              name: "panel1",
    
              questions: [
                {
                  type: "imagepicker",
                  name: "Device Features selection",
                  // hasSelectAll: true,
                  "imageHeight": 50,
                  "imageWidth": 50,
                  // hasNone: true,
                  showLabel: true,
                  colCount: 4,
                  //defaultValue:'Sensor',
                  // defaultValue: ['sensor'],
    
                  //readOnly:"true",
                  /* noneText: "None of the above",
                     validators: [{
                       type: "answercount",
                       text: "You should select 0 or 4 images",
                       minCount: 0,
                       maxCount: 8
                     }],*/
    
                  choices: [
                    {
                      value: "multipurpose",
                      text: "Multipurpose ",
                      //  score: 1,
                      imageLink: `${multipurpose}`
                    }, {
                      value: "display",
                      text: "Display",
                      // score: 1, 
                      imageLink: `${cpu}`
                    }, {
                      value: "cpu",
                      text: "CPU",
                      // score: 1,
                      imageLink: `${cpu}`
                    }, {
                      value: "discrete",
                      text: "Discrete Components",
                      // score: 1,
                      imageLink: `${discrete}`
                    }, {
                      value: "network",
                      text: "Network",
                      // score: 1,
                      imageLink: `${network}`
                    }, {
                      value: "bootprocess",
                      text: "Boot Process ",
                      // score: 1,
                      imageLink: `${boot}`
                    }, {
                      value: "divers",
                      text: "Drivers",
                      // score: 1,
                      imageLink: `${drivers}`
                    }, {
                      value: "actuator",
                      text: "Actuator",
                      // score: 1,
                      imageLink: `${actuator}`
                    }, {
                      value: "programmingconsole",
                      text: "Programming Console",
                      // score: 1,
                      imageLink: `${programmeconsole}`
                    },
                    {
                      value: "appsfirmware",
                      text: "Apps Firmware ",
                      // score: 1,
                      imageLink: `${firmware}`
                    }, {
                      value: "buzzer",
                      text: "Buzzer",
                      // score: 1,
                      imageLink: `${buzzer}`
                    }, {
                      value: "physical",
                      text: "Physical Ports & Interfaces",
                      // score: 1,
                      imageLink: `${physical}`
                    }, {
                      value: "logfiles",
                      text: "Logs Files",
    
                      //  score: 1,
                      imageLink: `${logfil}`
                    }, /*{
                          value: "configurationdata",
                          text:"Configuration Data",
                          //score: 1,
                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/configurationdata.png`  
                        },*/ {
                      value: "usercredentials",
                      text: "User Credentials",
                      //  score: 1,
                      imageLink: `${usercredential}`
                    }, /*{
                          value: "authentication",
                          text:"Authentication Data",
                          // score: 1,
                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/authenticationdata.png`  
                        }, {
                          value: "transactiondata",
                          text:"Transaction Data(commands, requests)",
                          // score: 1,
                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/transaction.png`  
                        }, {
                          value: "accesscontrol",
                          text:"Access Control Data",
                          // score: 1,
                          imageLink: `${process.env.PUBLIC_URL}/assets/img/icon/accesscontrol.png`  
                        }, */{
                      value: "sensor",
                      text: "Sensor",
                      // score: 1,
                      imageLink: `${sensor}`
                    },
                  ],
                  multiSelect: true
                },
                {
                  type: "dropdown",
                  name: "sensor",
                  width: "200px",
                  //"description": "(You can select multiple options here, related to your complaint body part selected )",
                  //"descriptionLocation": "underTitle",
                  defaultValue: '0',
                  startWithNewLine: "false",
                  title: "Sensor",
                  choices: [
    
                    { value: 0, text: "Temperature" },
                    { value: 1, text: "Machine vision" },
                    { value: 2, text: "Acceleration/Tilt" },
                    { value: 3, text: "Electric/Magnetic" },
                    { value: 4, text: "Leaks/Levels" },
                    { value: 5, text: "Force/Pressure/Strain/Tourque" },
                    { value: 6, text: "Flow" },
                    { value: 7, text: "Chemical" },
                    { value: 8, text: "Acoustic/Sound/Vibration" },
                    { value: 9, text: "Humidity/Moisture" },
                    { value: 10, text: "Motion/Velosity" },
                    { value: 11, text: "Position/Presence/Proximity" },
                    { value: 12, text: "Gas" },
    
                  ]
                }],
            }]
        },
    
        /******************** First question of primary assets************* */
    
        {
    
          title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
          name: "page2",
          elements: [{
            // "title": "Device Features selection",
            isRequired: true,
            type: "panel",
            name: "panel1",
            elements: [{
              type: "checkbox",
              name: "processed",
              "renderAs": "prettycheckbox",
              title: "What kind of data is your IoT Device/Product processing?",
              isRequired: true,
              hasNone: true,
              defaultValue: ['none'],
              //"startWithNewLine": false,
              //"isRequired": true,
              //colCount: 1,
              // "choicesOrder": "asc",
              choices: [
    
                {
                  value: "0",
                  text: "Move/Impact"
                },
                {
                  value: "1",
                  text: "Location",
                },
                {
                  value: "2",
                  text: "Luminosity",
                },
                {
                  value: "3",
                  text: "Temperature",
                },
                {
                  value: "4",
                  text: "Weight",
                },
                {
                  value: "5",
                  text: "Depth",
                },
    
                {
                  value: "6",
                  text: "Pressure",
                },
                {
                  value: "7",
                  text: "Personal Data",
                },
                {
                  value: "8",
                  text: "Banking/Financial Data/Security Keys",
                },
                {
                  value: "9",
                  text: "Configuration Data",
                },
                {
                  value: "others",
                  text: "Others",
                },
    
              ]
            },
    
            {
              type: "comment",
              name: "otherwise",
              visibleIf: " {processed} contains ['others'] ",
              title: "Please specify",
            },
            ]
          }
          ]
        },
    
        /********************* Second question ************************* */
        {
    
          title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
          name: "page3",
    
          elements: [{
    
            isRequired: true,
            type: "panel",
            name: "panel2",
    
    
            elements: [{
    
              type: "checkbox",
              name: "store",
              defaultValue: ['none'],
              "renderAs": "prettycheckbox",
              //"renderAs": "checkbox",
              title: "What kind of data is your IoT Device/Product storing?",
              isRequired: true,
              "visibleIf": "{otherwise} notempty or {processed} notempty  ",
              "colCount": 1,
              "hasNone": true,
              choices: [
    
                {
                  "value": "otherwise",
                  "visibleIf": "{otherwise} notempty",
                  "text": "Others: {otherwise}"
                },
    
                {
                  value: "21",
                  text: "Move/Impact"
                },
                {
                  value: "22",
                  text: "Location",
                },
                {
                  value: "23",
                  text: "Luminosity",
                },
                {
                  value: "24",
                  text: "Temperature",
                },
                {
                  value: "25",
                  text: "Weight",
                },
                {
                  value: "26",
                  text: "Depth",
                },
    
                {
                  value: "27",
                  text: "Pressure",
                },
                {
                  value: "28",
                  text: "Personal Data",
                },
                {
                  value: "29",
                  text: "Banking/Financial Data/Security Keys",
                },
                {
                  value: "30",
                  text: "Configuration Data",
                },
                {
                  value: "others1",
                  text: "Others",
                },
    
              ]
            },
            {
              type: "comment",
              name: "stored",
              visibleIf: " {store} contains['others1'] ",
              title: "Please specify",
    
            },
    
    
    
            ]
          }
          ]
        },
    
    
        /********************************************* third question transported ******************************************** */
    
    
        {
          title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
          name: "page4",
          elements: [{
            isRequired: true,
            type: "panel",
            name: "panel3",
            elements: [{
              type: "checkbox",
              //"renderAs": "checkbox",
              "renderAs": "prettycheckbox",
              name: "transport",
              defaultValue: ['none'],
              title: "What kind of data is your IoT Device/Product storing?",
              isRequired: true,
              "visibleIf": "{stored} notempty or {store} notempty or {otherwise} notempty or {processed} notempty ",
              "colCount": 1,
              "hasNone": true,
              choices: [
                {
                  "value": "otherwise",
                  "visibleIf": "{otherwise} notempty",
                  "text": "Others: {otherwise}"
                },
                {
                  "value": "stored",
                  "visibleIf": "{stored} notempty",
                  "text": "Others: {stored}"
                },
    
                {
                  value: "10",
                  text: "Move/Impact"
                },
                {
                  value: "11",
                  text: "Location",
                },
                {
                  value: "12",
                  text: "Luminosity",
                },
                {
                  value: "13",
                  text: "Temperature",
                },
                {
                  value: "14",
                  text: "Weight",
                },
                {
                  value: "15",
                  text: "Depth",
                },
    
                {
                  value: "16",
                  text: "Pressure",
                },
                {
                  value: "17",
                  text: "Personal Data",
                },
                {
                  value: "18",
                  text: "Banking/Financial Data/Security Keys",
                },
                {
                  value: "19",
                  text: "Configuration Data",
                },
                {
                  value: "others2",
                  text: "Others",
                },
              ]
            },
            {
              type: "comment",
              name: "transported",
              visibleIf: " {transport} contains 'others2' ",
              title: "Please specify"
            }
            ]
          }
          ]
        },
    
        /******************************************** forth Question**************************************** */
    
        {
          title: "<span class='v' style=' align:center ;text-align:center !important'>This is the page <b style='font-size:15px ;color:#9e1a16'>{pageno}</b> of <b style='font-size:15px ; color:#9e1a16'>{pagecount}</b> </span>",
          name: "page5",
          elements: [{
    
            isRequired: true,
            type: "panel",
            name: "panel4",
            elements: [{
              type: "checkbox",
              name: "active",
              defaultValue: ['none'],
              "renderAs": "prettycheckbox",
              title: "What kind of data is exchanged during device activation?",
              isRequired: true,
              "colCount": 1,
              "hasNone": true,
              choices: [
                {
                  value: "30",
                  text: "Personal Data",
                },
                {
                  value: "31",
                  text: "Banking/Financial Data",
                },
                {
                  value: "32",
                  text: "Configuration Data/ Security Keys",
                },
                {
                  value: "33",
                  text: "I don't know",
                },
                {
                  value: "others3",
                  text: "Others",
                },
              ]
            },
            {
              type: "comment",
              name: "actived",
              visibleIf: "{active} contains'others3' ",
              title: "Please specify",
            },
            ]
          }
          ]
        },
        /********************************************* End of json *********************************** */
      ],
      "showQuestionNumbers": "off",
      // completedHtml: "<p><h4>Thank you for completing the Questionnaire...</h4></p>"
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
                <Link to="/primary-asset"><Button variant="primary" >
                  Next Step
            </Button> </Link>
              </Modal.Footer>
            </Modal>
            <Col xl={2}>
              <Card>
                <Card.Body>
                  <Treemenu />
                </Card.Body>
              </Card>

            </Col>
            <Col xl={10}>
              <Card >

                <Card.Body >
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
                  {/* <Button  id="surveyPrev" size="middle" shape="round" size="middle" shape="round" disabled={this.activeStep === 0} onClick={() => { this.prevPage() }} type="primary">
                  Prev page
                            </Button>
                <Button  id="surveyNext" size="middle" shape="round" onClick={() => { this.nextPage(); }} type="primary">
                  Next page
                            </Button>
                // <Link to="/redalertlabs-primaryasset"> <Button  id="surveyComplete" size="middle" shape="round" onClick={() => {/* message.success('Processing complete!'); this.completeLastPage(); this.next() }} type="primary">
                  {/* Next step
                            </Button>
                            </Link> */}
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
export default SecurityProfileQuestionnaire;