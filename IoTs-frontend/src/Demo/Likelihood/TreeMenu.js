
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

import React from "react";
import TreeMenu from "react-simple-tree-menu";
import { InputGroup, ListGroup, FormControl } from 'react-bootstrap';


//Initial declaration style
const DEFAULT_PADDING = 16;
const ICON_SIZE = 8;
const LEVEL_SPACE = 16;
//Toggle Icon 
const ToggleIcon = ({ on }) => {
  if (on) return <i style={{ marginRight: "30px" }} class="fa fa-minus-square-o" />;
  else return <i style={{ marginRight: "30px" }} class="fa fa-plus-square  " />;
};
//Call All items
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
// treeMenu Data
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

// function treeMenu
function Treemenu() {
  return (
    <div className="App">
      <TreeMenu
        data={treeData}
        initialActiveKey="define/likelihood"
        initialOpenNodes={[
          'define',
          'define/likelihood',
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