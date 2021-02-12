import React, { Component } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";
// import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();
  }

  //Text Markdown HTML
 


  render() {
    const json = {
       
        showNavigationButtons: "both",
        showPageTitles: false,
        showQuestionNumbers: "off",
        showProgressBar: "top",
        progressBarType: "buttons"
      };
    const model = new Survey.Model(json);

    return (
      <Survey.Survey
        model={model}
        id="survey"
        onAfterRenderQuestion={this.onAfterRenderQuestion}
        onAfterRenderPanel={this.onAfterRenderPanel}
        //showNavigationButtons={this.showNavigationButtons}
        // onComplete={(result)=> console.log(result.data)}
        onComplete={this.onComplete}
        // onTextMarkdown={this.onTextMarkdown}
        //onComplete={sendDataToServer}
        onCurrentPageChanged={this.doOnCurrentPageChanged}
        sendResultOnPageNext={true}
        showCompletedPage={this.showCompletedPage}
        onPartialSend={this.onSurveyPartialSend}
      />
    );
  }
}

export default SurveyComponent;
