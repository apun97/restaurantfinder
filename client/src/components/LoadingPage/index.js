import React from 'react';
import './index.css';
import { Row, Col } from 'react-bootstrap';

const LoadingPage = ({ onSubmit, onChange }) => (
  <Row className="loading-row vertical-align">
    <Col xs={12} sm={12} md={12} lg={12} className="text-center">
      <div>
        <form onSubmit={onSubmit}>
          <div>Enter your location here:</div>
          <input
            type="text"
            onChange={onChange}
          />
        </form>
      </div>
    </Col>
  </Row>

);

export default LoadingPage;
