//Final Security Profile

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import '../LandingPage/app.css'
import MySearch from "./MySearch";
import Aux from "../../hoc/_Aux";
import Card from "../../pages/components/MainCard";

const headerSortingStyle = { backgroundColor: '#e1e9eb' };

const secondproductexpand = [
    {
        saa: <> <ul style={{ width: "20px", marginRight: "20px" }}>  <li>CA.DocumentationReview</li> <li>CA.SourceCodeReview </li> <li>

            CA.FunctionalSecurityTesting </li> <li>VA.NonIntrusivePentesting</li> <li>VA.IntrusivePentesting</li> </ul> </>,
    },
]
const secondcolumnexpand = [
    {
        dataField: "saa",
        text: "Security Assurance Activities",
        searchable: true,
        headerStyle: {
            backgroundColor: '#c2c4c4',
            color: "white",
            textAlign: "center"
        },
        formatter: (cell, row, rowIndex) => (
            <div>
                <span> {row.saa}</span>

            </div>)
    },
]

const productexpand = [
    {
        secgoal: "Confidentiality of Data (DIU)",
        id: "EIA_SF.1",
        description: "use protocols and mechanisms able to represent and manage trust and trust relationships",
        saa: <> <ul style={{ width: "20px", marginRight: "20px" }}>  <li>CA.DocumentationReview</li> <li>CA.SourceCodeReview </li> <li>

            CA.FunctionalSecurityTesting </li> <li>VA.NonIntrusivePentesting</li> <li>VA.IntrusivePentesting</li> </ul> </>,
    },
    {
        secgoal: "Confidentiality of Data (DIU)",
        id: "EIA_SF.12",
        description: "Multi-Factor Authentication(Knowledge factor, possession factor, location factor, time factor, inheritance factor)",
        saa: <> <ul style={{ width: "20px", marginRight: "20px" }}>  <li>CA.DocumentationReview</li> <li>CA.SourceCodeReview </li> <li>

            CA.FunctionalSecurityTesting </li> <li>VA.NonIntrusivePentesting</li>  </ul> </>,
    },
    {
        secgoal: "Confidentiality of Data (DIU)",
        id: "EIA_SF.5",
        description: "Installed Software SHALL be signed to ensure that its integrity can be verified before every execution attempt.",
        saa: <> <ul style={{ width: "20px", marginRight: "20px" }}>  <li>CA.DocumentationReview</li> <li>CA.SourceCodeReview </li> <li>

            CA.FunctionalSecurityTesting </li>  <li>VA.IntrusivePentesting</li> </ul> </>,
    }, {
        secgoal: "Confidentiality of Data (DIU)",
        id: "EIA_SF.7",
        description: "The device SHALL be protected from source code reverse engineering using code obfuscation methods",
        saa: <> <ul style={{ width: "20px", marginRight: "20px" }}>  <li>CA.DocumentationReview</li> <li>CA.SourceCodeReview </li>  <li>VA.NonIntrusivePentesting</li> <li>VA.IntrusivePentesting</li> </ul> </>,
    },
]

const columnexpand = [

    {
        dataField: "id",
        text: "Security Requirement",
        search: true,

    },
    {
        dataField: "description",
        text: "Description",
        search: true,

    },

]

const products = [
    {
        id: 'T07',
        threat: 'Compromise of personal data/sensitive info/ confidential info etc.(Processed)',
        asset: 'Configuration and monitoring Data',
        vul: <> <ul> <li>Inadequate classification of information </li> <li>Disposal of storage media without deleting data </li> <li>
            Lack of the use of cryptography </li> </ul> </>,
        impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2 f-14 f-w-400 ">Minor</label> </>,
        likelihood: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Unlikely</label> </>,
        sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

    },
    {
        id: 'T02',
        threat: 'Disclosure of Data (Transported)',
        asset: 'Transactional Data',
        vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
            Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
        likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
        sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

    },
    {
        id: 'T03',
        threat: 'Manipulation or Injection of Data',
        asset: 'Transactional Data',
        vul: <> <ul > <li>
            Lack of systems for identification and authentication </li> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
                Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
        likelihood: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Very Likely</label> </>,
        sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

    },
    {
        id: 'T02',
        threat: 'Disclosure of Data (Transported)',
        asset: 'Transactional Data',
        vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
            Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
        likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
        sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

    },
    {
        id: 'T01',
        threat: 'Replay of data(Transported)',
        asset: 'Transactional Data',
        vul: <> <ul > <li>
            Lack of systems for identification and authentication </li>  <li>
                Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2 f-14 f-w-400 ">Minor</label> </>,
        likelihood: <> <label style={{ background: "#fc3e28" }} className="label theme-bg2 text-white f-14 f-w-400 ">Almost Certain</label> </>,
        sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

    },
    {
        id: 'T07',
        threat: 'Compromise of personal data/sensitive info/ confidential info etc.(Processed)',
        asset: 'Security Data',
        vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
            Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Moderate</label> </>,
        likelihood: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Very Likely</label> </>,
        sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

    },
    {
        id: 'T02',
        threat: 'Disclosure of Data (Transported)',
        asset: 'Transactional Data',
        vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
            Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Minor</label> </>,
        likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
        sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

    },
    {
        id: 'T12',
        threat: 'Regulatory Sanctions(Processed)',
        asset: 'Security of Data',
        vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
            Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Low</label> </>,
        likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
        sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

    },
    {
        id: 'T02',
        threat: 'Disclosure of Data (Transported)',
        asset: 'Configuration and monitoring Data',
        vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
            Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Minor</label> </>,
        likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Unlikely</label> </>,
        sal: <> <label style={{ background: "#56c42f" }} className="label theme-bg2 text-white f-14 f-w-400 ">Basic</label> </>

    },
    {
        id: 'T04',
        threat: 'Deletion of data (Stored, Processed, Transported)',
        asset: 'Transactional Data',
        vul: <> <ul> <li>User rights are not reviewed regularly</li> <li>Uncontrolled copying of data </li> <li>
            Lack of the use of cryptography </li> <li>Disposal of storage media without deleting data </li> </ul> </>,
        impact: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Moderate</label> </>,
        likelihood: <> <label style={{ background: "#fcf760", color: "#2d2d2e" }} className="label theme-bg2  f-14 f-w-400 ">Likely</label> </>,
        sal: <> <label style={{ background: "#fac261" }} className="label theme-bg2 text-white f-14 f-w-400 ">Substantial</label> </>

    },
    {
        id: 'T05',
        threat: 'Vandalism or Theft of device, storage media, ect.',
        asset: '',
        vul: "Inadequate classification of information",
        impact: '',
        likelihood: "",
        sal: ""

    },
    {
        id: 'T06',
        threat: 'Loss of device, storage media, etc.',
        asset: '',
        vul: "Inadequate classification of information",
        impact: '',
        likelihood: "",
        sal: ""

    },
    {
        id: 'T08',
        threat: 'Unauthorized use or administration of devices & systems',
        asset: '',
        vul: "Inadequate classification of information",
        impact: '',
        likelihood: "",
        sal: ""

    },
    {
        id: 'T09',
        threat: 'Physical access to operation workstation/devices by malicious external actor',
        asset: '',
        vul: "Inadequate classification of information",
        impact: '',
        likelihood: "",
        sal: ""

    },
    {
        id: 'T10',
        threat: 'Lack of organizational policies & Procedures',
        asset: '',
        vul: "Inadequate classification of information",
        impact: '',
        likelihood: "",
        sal: ""

    },
    {
        id: 'T18',
        threat: 'Environmental disasters',
        asset: '',
        vul: "Inadequate classification of information",
        impact: '',
        likelihood: "",
        sal: ""

    },
    {
        id: 'T20',
        threat: 'Interfering radiation',
        asset: '',
        vul: "Inadequate classification of information",
        impact: '',
        likelihood: "",
        sal: ""

    },

];

// for (var i = 1; i < 50; i++) {
//     products.push({
//         id: "T0" + i,
//         name: "Product " + i,
//         price: i * 15
//     });
// }

//pagination
const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
        Showing { from} to { to} of { size} Results
    </span>
);
//   const pageButtonRenderer = ({
//     page,
//     active,
//     disable,
//     title,
//     onPageChange
//   }) => {
//     const handleClick = (e) => {
//       e.preventDefault();
//       onPageChange(page);
//     };
//     const activeStyle = {};
//     if (active) {
//       activeStyle.backgroundColor = 'black';
//       activeStyle.color = 'white';
//     } else {
//       activeStyle.backgroundColor = 'gray';
//       activeStyle.color = 'black';
//     }
//     if (typeof page === 'string') {
//       activeStyle.backgroundColor = 'white';
//       activeStyle.color = 'black';
//     }
//     return (
//       <Button className="">
//         <a href="#" onClick={ handleClick } style={ activeStyle }>{ page }</a>
//       </Button>
//     );
//   };

//
const options = {
    // pageButtonRenderer,
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: 'All', value: products.length
    }] // A numeric array is also available. the purpose of above example is custom the text
};

//pagination
const selectOptionsimpact = {
    0: 'Impact: Severe',
    1: 'Impact: Moderate',
    2: 'Impact: Minor',
    3: 'Impact: Low'
};
const selectOptionsliklihood = {
    0: 'Likelihood: Unlikely',
    1: 'Likelihod: Likely',
    2: 'Likelihood: Very Likely',
    3: 'Likelihood: Almost Certain'
};
const selectOptionsassurancelevel = {
    0: 'Assurance Level: Basic',
    1: 'Assurance Level: Substantial',
    2: 'Assurance Level: High',

};
//expand 
const SecondexpandRow = {
    renderer: row => (
        <div>
            <br />
            <ToolkitProvider keyField="id" data={secondproductexpand} columns={secondcolumnexpand} exportCSV search>
                {props => (
                    <div>

                        <BootstrapTable
                            {...props.baseProps}
                            headerClasses={styles.header}

                        />
                        <br />
                    </div>
                )}
            </ToolkitProvider>

        </div>
    ),
    headerStyle: {
        backgroundColor: '#748892',
        color: "white",
        textAlign: "center"
    },
    showExpandColumn: true,
    expandColumnPosition: 'right',
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
        if (isAnyExpands) {
            return <b style={{ color: 'dimgray', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
        }
        return <b style={{ color: 'dimgray', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
            return (
                <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
            );
        }
        return (
            <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
        );
    }
};
//expand
//expand 
const expandRow = {
    renderer: row => (
        <div>
            <br />
            <ToolkitProvider keyField="id" data={productexpand} columns={columnexpand} exportCSV search>
                {props => (
                    <div>
                        <h5 style={{ color: "darkred", fontWeight: "bold" }}> Security Goal : <b style={{ color: "gray", fontSize: "15px" }} > Confidentiality of Data (DIU) </b> </h5>
                        <br />
                        <BootstrapTable
                            {...props.baseProps}
                            expandRow={SecondexpandRow}
                            headerClasses={styles.header}
                        />
                        <h5 style={{ color: "darkred", fontWeight: "bold" }}> Security Goal : <b style={{ color: "gray", fontSize: "15px" }} > Identification and authentication </b> </h5>
                        <br />
                        <BootstrapTable
                            {...props.baseProps}
                            headerClasses={styles.header}
                            expandRow={SecondexpandRow}
                        />
                        <br />
                    </div>
                )}
            </ToolkitProvider>

        </div>
    ),
    showExpandColumn: true,
    expandColumnPosition: 'right',
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
        if (isAnyExpands) {
            return <b style={{ color: 'dimgray', fontWeight: 'bold', fontSize: "25px" }}>-</b>;
        }
        return <b style={{ color: 'dimgray', fontWeight: 'bold', fontSize: "25px" }}>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
            return (
                <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>-</b>
            );
        }
        return (
            <b style={{ color: 'darkred', fontWeight: 'bold', fontSize: "25px" }}>...</b>
        );
    }
};
//expand

const columns = [
    {
        dataField: "id",
        text: "Threat ID",
        searchable: true,
        headerAlign: 'center',
        sort: true,
        search: true,
        headerSortingStyle,
        style: {
            fontWeight: 'bold',
            fontSize: '15px',
            color: "darkred"
        }
    },
    {
        dataField: "threat",
        text: "Threat Description",
        headerAlign: 'center',
        search: true,
        sort: true,
        headerSortingStyle,
        style: {
            fontWeight: 'bold',
            fontSize: '15px',
            color: "darkred"
        }
    },
    {
        dataField: "asset",
        headerAlign: 'center',
        text: "Asset",
        search: true,
        // searchable: false
    },
    {
        dataField: "vul",
        headerAlign: 'center',
        text: "Vulnerability",
        search: true,
        // searchable: true,
        formatter: (cell, row, rowIndex) => (
            <div>
                <span> {row.vul}</span>
            </div>)
    },
    {
        dataField: "impact",
        // text: "Impact",
        align: 'center',
        search: true,
        // searchable: true,
        headerAlign: 'center',

        filter: selectFilter({
            options: selectOptionsimpact,
            placeholder: "impact",
            //withoutEmptyOption: true, hidd empty option(select impact)
            style: {
                backgroundColor: '#e9ecef'
            },
        }),
        formatter: (cell, row, rowIndex) => (
            <div>
                <span> {row.impact}</span>
            </div>)
        // headerAlign: 'center' // make it on center 



    },
    {
        dataField: "likelihood",
        //text: "Likelihood",
        align: 'center',
        // searchable: true,
        search: true,
        headerAlign: 'center',

        filter: selectFilter({
            options: selectOptionsliklihood,
            placeholder: "Likelihood",
            //   defaultValue: 2
            style: {
                backgroundColor: '#e9ecef'
            },
        }),
        formatter: (cell, row, rowIndex) => (
            <div>
                <span> {row.likelihood}</span>
            </div>)
    },
    {
        dataField: "sal",
        //text: "Security Assurance Level",
        headerAlign: 'center',
        // searchable: false,
        align: 'center',
        search: true,

        filter: selectFilter({
            options: selectOptionsassurancelevel,
            placeholder: "Assurance Level",
            style: {
                backgroundColor: '#e9ecef'
            },
        }),

        formatter: (cell, row, rowIndex) => (
            <div>
                <span> {row.sal}</span>
            </div>)
    }
];

// Export data CSV
const MyExportCSV = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <div style={{ textAlign: 'right' }}>
            <button className="btn btn-light" onClick={handleClick}>Export to CSV</button>
        </div>
    );
};

class SamplePage extends Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Final Security Profile' isOption>
                            <ToolkitProvider keyField="id" data={products} columns={columns} exportCSV search>
                                {props => (
                                    <div >
                                        <MyExportCSV  {...props.csvProps} />
                                        <MySearch {...props.searchProps} />
                                        <br />
                                        {/* <div style={{overflowX:"scroll"}}> */}
                                        <BootstrapTable
                                            {...props.baseProps}
                                            pagination={paginationFactory(options)}
                                            expandRow={expandRow}
                                            filter={filterFactory()}
                                            // filterPosition="bottom"
                                            headerClasses="header-class"
                                            hover
                                            noDataIndication={<h5 style={{ textAlign: "center", color: "#BAC9CB", padding: "50px" }}> <i style={{ textAlign: "center" }} className="fa fa-history fa-4x m-r-10 text-c-gray" /> <br />No Data  </h5>}
                                        />
                                        <br />
                                        {/* </div> */}
                                        <br />
                                    </div>
                                )}
                            </ToolkitProvider>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default SamplePage;
const styles = {
    header: {
        backgrounColor: "darkred"
    }
}