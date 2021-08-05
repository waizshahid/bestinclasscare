import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
// npm install --save-dev @iconify/react @iconify-icons/oi
import { Icon, InlineIcon } from "@iconify/react";
import questionMark from "@iconify-icons/oi/question-mark";

import { Container, Col, Row } from "react-bootstrap";
import { grey } from "@material-ui/core/colors";

const Card = (props) => {
  // export default function Card({ product }) {
  return (
    <div className="colour">
      {/* <Row>
    <Col sm={8}>sm=8</Col>
    
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row> */}

      <div>
        <div className="card shadow-sm" style={{ flexDirection: "row" }}>
          <Col sm={4} lg={12}>
            <img className="card-img-top" src={props.product.image} />
          </Col>
          <div className="card-body">
            <p className="card-text">
              <Col sm={8}>
                <hr />

                {/* onClick={() => addToCart(props)}  */}
              </Col>
            </p>
            <Link to={`/detail/${props.product.id}`}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group w3-button w3-teal">
                  {/* <Link to={`/detail-page/${props.product.id}`} className="btn btn-primary w-50 text-uppercase fw-bold rounded-0"></Link> */}
                  <strong style={{ color: "lightblue" }}>
                    {" "}
                    {props.product.title}
                    <Icon
                      style={{ color: "white", backgroundColor: "black" }}
                      icon={questionMark}
                    />{" "}
                  </strong>

                  <p style={{ color: "lightgrey" }}>
                    <div>
                      distance:{" "}
                      <span style={{ color: "black" }}>
                        {props.product.distance}
                      </span>
                    </div>
                  </p>
                  <p style={{ color: "lightgrey" }}>
                    Address :{" "}
                    <span style={{ color: "black" }}>
                      {props.product.Address}
                    </span>{" "}
                  </p>
                  <p style={{ color: "lightgrey" }}>
                    Phone :
                    <span style={{ color: "black" }}>
                      {props.product.Phone}
                    </span>{" "}
                  </p>
                  <p style={{ color: "lightgrey" }}>
                    description :{" "}
                    <span style={{ color: "black"  }}>
                      {" "}
                      {props.product.description}
                    </span>
                  </p>
                </div>
                <hr />
                <br />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
