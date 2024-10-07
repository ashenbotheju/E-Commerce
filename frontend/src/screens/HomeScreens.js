import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import products from "../products";


function HomeScreens() {
  return (
    <div>
      <h1>Latest product</h1>
      <Row>
        {/* map takes the products array and returns a new array of JSX elements */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} sl={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreens;
