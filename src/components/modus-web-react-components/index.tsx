import React from "react";
import { Tab, Row, Col, Nav } from "@trimbleinc/modus-react-bootstrap";
// import ModusWebReactAccordion from "./Accordion";

export default function ModusWebReactComponents() {
  return (
    <Tab.Container id="modus-web-react-components" defaultActiveKey="accordion">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="accordion">Accordion</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="alert">Alert</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        {/* <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="accordion">
              <ModusWebReactAccordion />
            </Tab.Pane>
            <Tab.Pane eventKey="alert">
              <ModusWebReactAccordion />
            </Tab.Pane>
          </Tab.Content>
        </Col> */}
      </Row>
    </Tab.Container>
  );
}
