
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

import React, { useState, useCallback, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Upload, Tooltip } from 'antd';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { UploadOutlined } from '@ant-design/icons';
import Aux from "../../hoc/_Aux";

const RNDContext = createDndContext(HTML5Backend);

const type = 'DragableUploadList';

const DragableUploadListItem = ({ originNode, moveRow, file, fileList }) => {
    const ref = React.useRef();
    const index = fileList.indexOf(file);
    const [{ isOver, dropClassName }, drop] = useDrop({
        accept: type,
        collect: monitor => {
            const { index: dragIndex } = monitor.getItem() || {};
            if (dragIndex === index) {
                return {};
            }
            return {
                isOver: monitor.isOver(),
                dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
            };
        },
        drop: item => {
            moveRow(item.index, index);
        },
    });
    const [, drag] = useDrag({
        item: { type, index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drop(drag(ref));
    const errorNode = (
        <Tooltip title="Upload Error" getPopupContainer={() => document.body}>
            {originNode.props.children}
        </Tooltip>
    );
    return (
        <div
            ref={ref}
            className={`ant-upload-draggable-list-item ${isOver ? dropClassName : ''}`}
            style={{ cursor: 'move' }}
        >
            {file.status === 'error' ? errorNode : originNode}
        </div>
    );
};

// Attached File initialisation

function AttachedFile() {
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'eval-catalogue.pdf',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'Document.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-3',
            name: 'Gpp-V02.pdf',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-4',
            name: 'Important_file.docx',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-5',
            name: 'Results.xlsx',
            status: 'error',
        },
    ]);

    // Move attached File  
    const moveRow = useCallback(
        (dragIndex, hoverIndex) => {
            const dragRow = fileList[dragIndex];
            setFileList(
                update(fileList, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragRow],
                    ],
                }),
            );
        },
        [fileList],
    );
    
     // useRef 
    const manager = useRef(RNDContext);

  // Onchange file list
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    return (
        <Aux>

            <Card >
                <Card.Header>
                    <Card.Title as='h5'>
                        Attached Files
                    </Card.Title>
                </Card.Header>

                <Card.Body >
                    <DndProvider manager={manager.current.dragDropManager}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            fileList={fileList}
                            onChange={onChange}
                            itemRender={(originNode, file, currFileList) => (
                                <DragableUploadListItem
                                    originNode={originNode}
                                    file={file}
                                    fileList={currFileList}
                                    moveRow={moveRow}
                                />
                            )}
                        >
                            <Button variant="secondary">
                                <UploadOutlined /> Click to Upload
                            </Button>
                            <br />
                        </Upload>
                    </DndProvider>
                </Card.Body>
            </Card >

        </Aux>

    );
};

export default AttachedFile;








