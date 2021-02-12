
import React from "react";
import TreeMenu from "react-simple-tree-menu";
import { InputGroup, ListGroup, FormControl } from 'react-bootstrap';

//style declaration
const DEFAULT_PADDING = 16;
const ICON_SIZE = 8;
const LEVEL_SPACE = 16;
//toggle icon 
const ToggleIcon = ({ on }) => {
  if (on) return <i style={{ marginRight: "30px" }} class="fa fa-minus-square-o" />;
  else return <i style={{ marginRight: "30px" }} class="fa fa-plus-square  " />;
};

//call all list item
const callAll = (...fn) => (...args) => fn.forEach(f => f && f(...args));

//List item wrapped
const ListItemWrapped = ({
  level = 0,
  hasNodes,
  isOpen,
  label,
  searchTerm,
  openNodes,
  toggleNode,
  onClick,
  focused,
  ...props
}) => (
    <ListGroup.Item
      {...props}
      onClick={callAll(onClick, toggleNode)}
      button
      style={{
        paddingLeft: DEFAULT_PADDING + ICON_SIZE + level * LEVEL_SPACE,
        cursor: "pointer"
      }}
    >
      {hasNodes && <ToggleIcon on={isOpen} />}
      {label}
    </ListGroup.Item>
  );
// data treeMenu
const treeData = [
  {
    key: "collect",
    active: "true",
    label: "Collect",
    url: "https://www.google.com/search?q=mammal",
    nodes: [

      {
        key: "questionnaire",
        label: "Security Profile Questionnaire",
        url: "https://www.google.com/search?q=fox",
        nodes: []
      },

      {
        key: "asset",
        label: "Primary Asset",
        url: "https://www.google.com/search?q=dog",
        nodes: [],
        index: 1
      },

    ]
  },
  {
    key: "define",
    label: "Define",
    url: "https://www.google.com/search?q=mammal",
    nodes: [

      {
        key: "impact",
        label: "Impact",
        url: "https://www.google.com/search?q=dog",
        nodes: []
      },
      {
        key: "likelihood",
        label: "Likelihood",
        url: "https://www.google.com/search?q=fox",
        nodes: []
      },
      {
        key: "securitygoals",
        label: "SecurityGoals",
        url: "https://www.google.com/search?q=wolf",
        nodes: []
      },


    ]
  },
  {
    key: "decide",
    label: "Decide",
    url: "https://www.google.com/search?q=reptile",
    nodes: [

      {
        key: "riskdecision",
        label: "Risk Decision",
        url: "https://www.google.com/search?q=lizard"
      },
      

    ]
  }
];

// tree menu function
function Treemenu() {
  return (
    <div className="App">
      <TreeMenu
        data={treeData}
        initialActiveKey="define/impact"
        initialOpenNodes={[
          'define',
          'define/impact',
          'reptile/squamata/lizard'
        ]}
        debounceTime={125}
        onClickItem={console.log(`on click node`)}
      >
        {({ search, items }) => (
          <React.Fragment>

            <InputGroup className="mb-4">
              <FormControl
                onChange={e => search(e.target.value)}
                placeholder="Search Here"
                aria-label="Search Here"
                aria-describedby="basic-addon2"
              />

            </InputGroup>
            <ListGroup>
              {items.map(props => (
                <ListItemWrapped  {...props} />
              ))}
            </ListGroup>
          </React.Fragment>
        )}
      </TreeMenu>
    </div>
  );
}

export default Treemenu;