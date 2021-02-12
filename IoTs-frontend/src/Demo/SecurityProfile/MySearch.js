import React from "react";
import {  Container, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import debounce from "./debounce";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import filterFactory from 'react-bootstrap-table2-filter';
import paginationFactory from "react-bootstrap-table2-paginator";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


const DEBOUNCE_WAIT = 150;

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from} to { to} of { size} Results
  </span>
);

const envsecuritygoals = [
  {
    secgoal: "Confidentiality of Data (DIU)",
    id: "EIA_SF.1",
    description: "use protocols and mechanisms able to represent and manage trust and trust relationships",

  },
  {
    secgoal: "Confidentiality of Data (DIU)",
    id: "EIA_SF.12",
    description: "Multi-Factor Authentication(Knowledge factor, possession factor, location factor, time factor, inheritance factor)",

  },
  {
    secgoal: "Confidentiality of Data (DIU)",
    id: "EIA_SF.5",
    description: "Installed Software SHALL be signed to ensure that its integrity can be verified before every execution attempt.",

  }, {
    secgoal: "Confidentiality of Data (DIU)",
    id: "EIA_SF.7",
    description: "The device SHALL be protected from source code reverse engineering using code obfuscation methods",
  },
]
const column = [
  {
    dataField: "secgoal",
    text: "Environmental Security Goal",
    searchable: true,
    headerStyle: {
      backgroundColor: '#748892',
      color: "white",
      textAlign: "center"
    }
  },
  {
    dataField: "id",
    text: "Security Requirement",
    search: true,
    headerStyle: {
      backgroundColor: '#748892',
      color: "white",
      textAlign: "center"
    }
  },
  {
    dataField: "description",
    text: "Description",
    search: true,
    headerStyle: {
      backgroundColor: '#748892',
      color: "white",
      textAlign: "center"
    }
  },

]
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
    text: 'All', value: envsecuritygoals.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};




class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      text: ""
    };




    this.debouncedSearch = debounce(event => {
      const {
        target: { value }
      } = event;
      props.onSearch(value);
    }, props.delay || DEBOUNCE_WAIT);
  }

  handleSearch = event => {
    event.persist();
    const text = event.target.value;
    this.setState({
      text
    });
    this.debouncedSearch(event);
  };

  handleClear = () => {
    const { onClear } = this.props;
    this.setState(
      {
        text: ""
      },
      () => {
        onClear();
      }
    );
  };

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    const { text } = this.state;
    const { placeholder = "Search..." } = this.props;
    return (
      <>

        <Modal
          {...this.props}
          dialogClassName="modal-80w"
          show={this.state.modalShow}
          onHide={modalClose}
          aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Environmental security goals
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <ToolkitProvider keyField="id" data={envsecuritygoals} columns={column} search>
                {props => (
                  <div>
                    <BootstrapTable
                      {...props.baseProps}
                      pagination={paginationFactory(options)}

                      filter={filterFactory()}

                    />
                    <br />
                  </div>
                )}
              </ToolkitProvider>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={modalClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <nav class="navbar  p-10">
          <ul class="nav">

            <li class="nav-item">
              <InputGroup className="">
                <FormControl
                  onChange={this.handleSearch}
                  value={text}
                  placeholder={placeholder}
                  aria-label="Search Here"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append className="text-center">
                  <button type="button" onClick={this.handleClear} class=" btn btn-secondary m-0" >
                    Clear
                                       </button>
                </InputGroup.Append>
              </InputGroup>
            </li>
          </ul>
          <ul class="nav">

            <li class="nav-item">

              <button type="button" onClick={() => this.setState({ modalShow: true })} class=" btn btn-secondary m-0" >
                Other Security Goals
                                           </button>
            </li>


          </ul>

        </nav>



        {/* <SearchBarContainer>
          <SearchIcon>
            <i className="pwc-icon-search" />
          </SearchIcon>
          <StyledSearchBarInput
            type="text"
            onChange={this.handleSearch}
            value={text}
            placeholder={placeholder}
          />
          <StyledClearButton type="button" onClick={this.handleClear}>
            CLEAR
        </StyledClearButton>
          <StyledClearButton1 type="button" onClick={() => this.setState({ modalShow: true })}>
            Other Security Goals
        </StyledClearButton1>
        </SearchBarContainer> */}



      </>
    );
  }
}

export default SearchBar;
