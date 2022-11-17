import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftMenu from './LeftMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ViewCall() {
  return (
    <>
      <Row>
        <Col xs={12} md={12}>
          <LeftMenu />
        </Col>
      </Row>
    </>
  );
}
