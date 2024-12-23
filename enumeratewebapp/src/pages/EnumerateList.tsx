import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import { Row, Col, Container } from "react-bootstrap";

export default function EnumerateList() {
  return (
    <div>
      <NavbarMenu />
      <Container className="container-xxl flex-grow-1 container-p-y">
        <Row>
          <Col md={12}>
            <a href="/enumerateDetail">Detail</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
