import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

function Home() {
  return (
    <Container id="container">
      <Row id="row">
        <Col id="col" xs={12} sm={6} md={4} lg={4}>
          <Link to={"/NewGame"}>Create New Game</Link>
        </Col>
      </Row>
      <Row id="row">
        <Col id="col" xs={12} sm={6} md={4} lg={4}>
          Join Game
        </Col>
      </Row>
      <Row id="row">
        <Col id="col" xs={12} sm={6} md={4} lg={4}>
          Rules
        </Col>
      </Row>
      <Row id="row">
        <Col id="col" xs={12} sm={6} md={4} lg={4}>
          View Cards
        </Col>
      </Row>
      <Row id="row">
        <Col id="col" xs={12} sm={6} md={4} lg={4}>
          Add New Card
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
