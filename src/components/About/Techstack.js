import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import {
  SiFirebase,
  SiRedux
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
    </Row>
  );
}

export default Techstack;
