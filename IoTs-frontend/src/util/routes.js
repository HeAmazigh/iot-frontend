
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
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

// //connection interfaces 
// const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
// const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const DashboardDefault = React.lazy(() => import('../Demo/Dashboard/Default'));
const Landing = React.lazy(() => import('../Demo/LandingPage/Landing'));

const OtherSamplePage = React.lazy(() => import('../Demo/Other/SamplePage'));
// const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));
const BusinessQestionnaire = React.lazy(() => import('../Demo/BusinessQuestionnaire/BusinessQuestionnaire'));
const Synthesis = React.lazy(() => import('../Demo/BusinessQuestionnaire/Synthesis'));
const SecurityProfileQuestionnaire = React.lazy(() => import('../Demo/SecurityProfile/SecurityProfileQuestionnaire'));
const FinalSecurityProfile = React.lazy(() => import('../Demo/SecurityProfile/FinalSecurityProfile'));
const PrimaryAsset = React.lazy(() => import('../Demo/PrimaryAsset/PrimaryAsset'));
const Impact = React.lazy(() => import('../Demo/Impact/Impact'));
const Likelihood = React.lazy(() => import('../Demo/Likelihood/Likelihood'));
const RiskDecisiontest = React.lazy(() => import('../Demo/RiskDecision/RiskDecisiontest'));
const Evaluation = React.lazy(() => import('../Demo/Evaluation/Evaluation'));
const RiskDecisionNextt = React.lazy(() => import('../Demo/RiskDecision/RiskDecisionNextt'));
const HighLevel = React.lazy(() => import('../Demo/HighLevelLowlevelQuestionaire/HighLevelQuestionnaire'));
const LowLevel = React.lazy(() => import('../Demo/HighLevelLowlevelQuestionaire/LowLevelQuestionnaire'));
const SurveyComponent = React.lazy(() => import('../Demo/HighLevelLowlevelQuestionaire/test'));

const SignIn1 = React.lazy(() => import('../Demo/Authentication/SignIn/SignIn1'));

const routes = [

    //connection interfaces (coming soon....)
    // { path: '/auth/signin', exact: true, name: 'Signin 1', component: Signin1 },
    // { path: '/auth/signup', exact: true, name: 'Signup 1', component: SignUp1 },
    //connection interfaces 

    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/sample-page', exact: false, name: 'Sample Page', component: OtherSamplePage },
    // documents (coming soon)
    // { path: '/docs', exact: false, name: 'Documentation', component: OtherDocs },

    //synthesis Dashboard
    { path: '/test', exact: false, name: 'Business Questionnaire', component: SurveyComponent},
    { path: '/business-questionnaire', exact: false, name: 'Business Questionnaire', component: BusinessQestionnaire},
    { path: '/high-level-questionnaire', exact: false, name: 'High Level Questionnaire', component: HighLevel},
    { path: '/low-level-questionnaire', exact: false, name: 'Low Level Questionnaire', component: LowLevel},
    { path: '/synthesis-dashboard', exact: false, name: 'Synthesis', component: Synthesis },
    //Landing page
    { path: '/landing', exact: true, name: 'Landing', component: Landing },
    //Security Profile questionnaire page (Collect)
    { path: '/security-profile-questionnaire', exact: true, name: 'securityProfile', component: SecurityProfileQuestionnaire },
    //Primary asset page (Collect)
    { path: '/primary-asset', exact: true, name: 'primaryasset', component: PrimaryAsset },
    //Impact page (Define)
    { path: '/impact', exact: true, name: 'PageStart', component: Impact },
    //Likelihood page (Define)
    { path: '/likelihood', exact: true, name: 'PageStart', component: Likelihood },
   //Security goals list page (Define)
    { path: '/security-goals', exact: true, name: 'PageStart', component: RiskDecisiontest },
    //Risk Decidion page (Decide)
    { path: '/risk-decision', exact: true, name: 'PageStart', component: RiskDecisionNextt },
    //Final Security Profile page
    { path: '/final-security-profile', exact: true, name: 'securityprofile', component: FinalSecurityProfile },
    //Evaluation page (coming Soon..)
    { path: '/evaluation', exact: true, name: 'evaluation', component: Evaluation },
    

    { path: '/auth/signin', exact: true, name: 'Signin 1', component: SignIn1 },

];

export default routes;