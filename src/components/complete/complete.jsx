import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import {
  AiOutlineCalendar,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";

const complete = ({ completed, deleteItems, changeStatus }) => {
  return (
    <Fragment>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>Task Completed</h5>
          </div>
          <div className="col-12 float-end col-md-6 col-lg-4 px-2">
            <div className="row">
              <div className="col-8">
                <input className="form-control w-100" />
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0">
          {completed.length > 0 ? (
            completed.map((complete, i) => (
              <div
                key={i.toString()}
                className="col-12 col-lg-4 col-sm-6 col-md-4  p-2"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="animated fadeInUp">{complete.title}</h6>
                    <p className="animated fadeInUp">{complete.description}</p>
                    <p className="m-0 animated fadeInUp p-0">
                      <AiOutlineCalendar /> {complete.createdDate}
                      <a
                        href={() => false}
                        onClick={() =>
                          changeStatus(complete._id, complete.status, complete)
                        }
                        className="icon-nav text-primary mx-1"
                      >
                        <AiOutlineEdit />
                      </a>
                      <a
                        href={() => false}
                        onClick={() => deleteItems(complete._id)}
                        className="icon-nav text-danger mx-1"
                      >
                        <AiOutlineDelete />
                      </a>
                      <a
                        href={() => false}
                        className="badge float-end bg-success"
                      >
                        {complete.status}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1>No Complete Tasks</h1>
            </div>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default complete;
