import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

const newComponent = ({ all, deleteItems, changeStatus }) => {
  return (
    <Fragment>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>Task New</h5>
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
          {all.length > 0 ? (
            all.map((alll, i) => (
              <div
                key={i.toString()}
                className="col-12 col-lg-4 col-sm-6 col-md-4  p-2"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="animated fadeInUp"> {alll.title}</h6>
                    <p className="animated fadeInUp">{alll.description}</p>
                    <p className="m-0 animated fadeInUp p-0">
                      <AiOutlineCalendar /> {alll.createdDate}
                      <a
                        href={() => false}
                        onClick={() =>
                          changeStatus(alll._id, alll.status, alll)
                        }
                        className="icon-nav text-primary mx-1"
                      >
                        <AiOutlineEdit />
                      </a>
                      <a
                        href={() => false}
                        onClick={() => deleteItems(alll._id)}
                        className="icon-nav text-danger mx-1"
                      >
                        <AiOutlineDelete />
                      </a>
                      <a href={() => false} className="badge float-end bg-info">
                        {" "}
                        {alll.status}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1>No New Tasks</h1>
            </div>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default newComponent;
