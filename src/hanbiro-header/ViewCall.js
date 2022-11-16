import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopNav from './TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function TextButtons() {
  return (
    <>
        

        <Row>
            <Col xs={12} md={1}>
                1
            </Col>
            <Col xs={6} md={11}>
                <TopNav />
            </Col>
        </Row>
    </>
  );
}
