import { products } from "./data";
import React from "react";
import { Link, useParams } from "react-router-dom";

import { grey } from "@material-ui/core/colors";
import { findProductById } from "./data";
// import PageTitleBar from "./page-title-bar";
// import Counter from './counter'

import { Icon, InlineIcon } from "@iconify/react";

import { Container, Col, Row } from "react-bootstrap";

function Product(props) {
  // const id = props.match.params.id

  // const [product] = useState(() => findProductById(id))
  const { id } = useParams();

  const prods = products.find((p) => id == Number(p.id));

  console.log(id);

  // if (!product)
  //     return <h1>No product found for id {id}</h1>

  return (
    <>
      <div>

  <strong></strong>    <h2>  Hospital detail page </h2>
        <div className="card shadow-sm">
          <Col sm={4} lg={12} style={{ flexDirection: "row", display: "flex" }}>
            <div>
              {" "}
              <img id="size" src={prods.image} />
            </div>

            <div className="card-body">
              <p className="card-text">
                <Col sm={8}></Col>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group w3-button w3-teal">
                  {/* <Link to={`/detail-page/${props.product.id}`} ></Link> */}
                  <strong style={{ color: "lightblue" }}>
                    {" "}
                    {prods.title}{" "}
                  </strong>

                  <p style={{ color: "lightgrey" }}>
                    <div>
                      distance:{" "}
                    <strong>  <span style={{ color: "black" }}>{prods.distance}</span> </strong>
                    </div>
                  </p>
                  <p style={{ color: "lightgrey" }}>
                    Address :{" "}
                    <strong>       <span style={{ color: "black" }}>{prods.Address}</span>{" "}  </strong>
                  </p>
                  <p style={{ color: "lightgrey" }}>
                    Phone :    <strong>   <span style={{ color: "black" }}>{prods.Phone}</span>{" "}  </strong>
                  </p>
                </div>

                <br />
              </div>
          <strong sryle={{fontsize:"3"  }}  >    <h7   >     Services Provided</h7>  </strong>
              
              
              
              
              <Row>
                <Col lg={4}>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "row",
                      marginLeft:"10"
                    }}
                  >
                    {" "}
                    <Icon
                      icon="akar-icons:wifi"
                      color="black"
                      width="20"
                      height="20"
                      hFlip={true}
                    />
                    <p style={{ color: "lightgrey" }}> wifi : </p>{" "}
                    <pre class="tab"> </pre>
                    <p style={{ color: "lightgrey" }}>
                      coffe :{" "}
                      <span style={{ color: "black" }}>
                        {" "}
                        {} <Icon icon="jam:coffee-cup-f" />{" "}
                      </span>
                    </p>
                    <pre class="tab"> </pre>
                    <p style={{ color: "lightgrey" }}>
                    curabetur est{" "}
                      <span style={{ color: "black" }}>
                        {" "}
                        {}{" "}
                        <Icon
                          icon="jam:world"
                          color="black"
                          width="25"
                          height="25"
                          rotate={2}
                          hFlip={true}
                          vFlip={true}
                        />{" "}
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>


              <Row>
                <Col lg={4}>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      flexDirection: "row",
                      display: "-webkit-inline-box"
                    }}
                  >
                    {" "}
                    <Icon
                        icon="mdi:alpha-p"
                        color="black"
                        width="25"
                        height="25"
                        rotate={2}
                        hFlip={true}
                        vFlip={true}
                      />
                    <p style={{ color: "lightgrey" }}> parking : </p>{" "}
                    <pre class="tab"> </pre>
                    <p style={{ color: "lightgrey" }}>
                    proin mollis :{" "}
                      <span style={{ color: "black" }}>
                        {" "}
                        {} <Icon
                        icon="icon-park-outline:medical-box"
                        color="black"
                        width="25"
                        height="25"
                        rotate={2}
                        hFlip={true}
                        vFlip={true}
                      />{" "}
                      </span>
                    </p>
                    <pre class="tab"> </pre>
                    <p style={{ color: "lightgrey" }}>
                      language service :{" "}
                      <span style={{ color: "black" }}>
                        {" "}
                        {}{" "}
                        <Icon
                        icon="bx:bx-handicap"
                        color="black"
                        width="25"
                        height="25"
                        rotate={2}
                        hFlip={true}
                        vFlip={true}
                      />{" "}
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>
















             
            </div>
          </Col>
        </div>
      </div>

      {/* -------------------------------detail page part  (product)----------------------------------------------------------           */}

      <hr />

      <p style={{ color: "lightgrey" }}>
        description :{" "}
        <span style={{ color: "lightgrey" }}> {prods.description}</span>
      </p>
    </>
  );
}
export default Product;
