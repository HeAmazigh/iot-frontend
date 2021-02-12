import React, {useEffect, useState} from 'react';
import Aux from "../../hoc/_Aux";
import axios from 'axios';
import { Row } from 'react-bootstrap';
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";




const SurveyDone = () => {
    const [survey, setSurvey] = useState([]);
   // const { user } = useAuth0();
    useEffect(() => {
        const survey = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/survey`);
                setSurvey(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        survey();
    });
    // const lineChart = (
    //     <Line
    //         data={{
    //             labels: survey.map(({ language }) => language),
    //             datasets: [
    //                 {
    //                     data: survey.map(({ rating }) => rating),
    //                     label: 'statistic',
    //                     borderColor: '#3333FF',
    //                     fill: true,
    //                 },
    //             ],
    //         }}
    //     />
    // );
    // const barChart = (
    //     <Bar
    //         data={{
    //             labels: survey.map(({ language }) => language),
    //             datasets: [
    //                 {
    //                     data: survey.map(({ rating }) => rating),
    //                 },
    //             ],
    //         }
    //     }
    //     width={100}
    //     height={50}
    //     options={{ maintainAspectRatio: true }}
    //     />
    // );
    if (!survey) {
        return (
            <h1>Nowthing !</h1>
        );
    }
    return (
        <Aux>
             <Breadcrumb />
        <Row>
        <div>
            test
            {survey.map((sur, index) => {
                return (
                    <ul key={index}>
                        <li> FirstName : {sur.DeviceFeaturesselection} </li>
                        <li> Language : {sur.sensor} </li>
                        <li> Rate : {sur.processed} </li>
                    </ul>
                )
            })}
        </div>
        <div style={{width: "50%"}} >
        {/* {lineChart}
        {barChart} */}
        {SecGoals}
        {Response}
        </div>
        </Row>
        </Aux>
    );
}
export default SurveyDone;





