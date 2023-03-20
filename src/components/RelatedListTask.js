import React, { useState, useEffect } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader
} from 'react-bs-datatable';
import inventoryApi from "../api/inventoryApi";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Confirm from './Confirm';
import TaskEdit from './TaskEdit';

const RelatedListTask = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [task, setTask] = React.useState('');
  const [modalShowTask, setModalShowTask] = React.useState(false);
  const navigate = useNavigate();
  // Create table headers consisting of 4 columns.

  const handleDelete = (row) => {
    setModalShow(true);
    setTask(row);
  }

  const [body, setBody] = useState([]);
  useEffect(() => {
    taskList();
  }, []);

  const labels = {
    beforeSelect: " "
  }

  const deleteTask = async () => {
    const result = await inventoryApi.deleteTask(task.id);
    if (result.success) {
      setTask('');
      setModalShow(false);
      taskList();
    }
  }

  const submit = () => {
    setModalShowTask(false);
    taskList();
  }

  const editLead = (row) => {
    setModalShowTask(true)
    setTask(row);
  }

  const taskList = () => {
    async function init() {
      const task = await inventoryApi.fetchTasks(props.parent.id);
      if (task)
        setBody(task);
    }
    init();
  }

  const header = [
    {
      title: 'Title', prop: 'title',
      cell: (row) => (
        <Link
          onClick={() => editLead({ row })}
          state={row}
        >
          {row.title}
        </Link>
      )
    },
    { title: 'Description', prop: 'description' },
    { title: 'Status', prop: 'status' },
    { title: 'Target Date', prop: 'targetdate', cell: (row) => (moment(row.targetdate).format('DD-MM-YYYY')) },
    { title: 'Created Date', prop: 'createddate', cell: (row) => (moment(row.createddate).format('DD-MM-YYYY')) },
    { title: 'Created By', prop: 'createdbyname' },
    {
      title: 'Actions', prop: 'id', cell: (row) => (
        <><Button className='btn-sm mx-2' onClick={() => editLead({ row })}><i className="fa-regular fa-pen-to-square"></i></Button>
          <Button className='btn-sm mx-2' variant='danger' onClick={() => handleDelete(row)}><i class="fa-regular fa-trash-can"></i></Button>
        </>
      )
    }
  ];


  return (
    <>
      {modalShow &&
      <Confirm
        show={modalShow}
        onHide={() => setModalShow(false)}
        deleteTask={deleteTask}
        title="Confirm delete?"
        message="You are going to delete the record. Are you sure?"
        table="task"
      />}
      {modalShowTask &&
        <TaskEdit
          show={modalShowTask}
          onHide={() => setModalShowTask(false)}
          parent={props.parent}
          task={task}
          table="lead"
          submit={submit}
        />
        }

      {body ?



        <DatatableWrapper body={body} headers={header} paginationOptionsProps={{
          initialState: {
            rowsPerPage: 5
          }
        }}>
          <Row className="mb-4">
            <Col
              xs={12}
              sm={6}
              lg={4}
              className="d-flex flex-col justify-content-start align-items-start"
            >


            </Col>
            <Col
              xs={12}
              sm={6}
              lg={4}
              className="d-flex flex-col justify-content-start align-items-start"
            >


            </Col>
            <Col
              xs={12}
              sm={6}
              lg={4}
              className="d-flex flex-col justify-content-end align-items-end"
            >
            </Col>
          </Row>
          <Table striped className="related-list-table">
            <TableHeader />
            <TableBody />
          </Table>
          <Pagination />
        </DatatableWrapper> : ''}
    </>
  )
}

export default RelatedListTask