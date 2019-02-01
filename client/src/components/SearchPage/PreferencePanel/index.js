import React from 'react';
import { Row, Col, ToggleButton, ToggleButtonGroup, ButtonGroup } from 'react-bootstrap';

import CategoryOptions from './CategoryOptions.js';

import './index.css';


const PreferencePanel = ({
  onPriceChange,
  onDistanceChange,
  onCategoryChange
}) => (

  <div>
    <Row>
      <Col md={12} lg={12}>
        <div>Price</div>
        <ButtonGroup>
          <ToggleButtonGroup
            type="checkbox"
            onChange={onPriceChange}
            className="btn-group"
          >
            <ToggleButton className="btn-standard" value={1}>$</ToggleButton>
            <ToggleButton className="btn-standard" value={2}>$$</ToggleButton>
            <ToggleButton className="btn-standard" value={3}>$$$</ToggleButton>
            <ToggleButton className="btn-standard" value={4}>$$$$</ToggleButton>
          </ToggleButtonGroup>
        </ButtonGroup>
      </Col>
    </Row>
    <br/>
    <br/>
    <Row>
      <Col md={12} lg={12}>
        <div>Distance</div>
        <ButtonGroup>
          <ToggleButtonGroup
            type="radio"
            name="options"
            onChange={onDistanceChange}
            defaultValue={1}
            className="btn-group"
          >
            <ToggleButton className="btn-standard" value={800}>0.5 mi</ToggleButton>
            <ToggleButton className="btn-standard" value={1600}>1 mi</ToggleButton>
            <ToggleButton className="btn-standard" value={3200}>2 mi</ToggleButton>
            <ToggleButton className="btn-standard" value={8000}>5 mi</ToggleButton>
          </ToggleButtonGroup>
        </ButtonGroup>
      </Col>
    </Row>
    <br/>
    <br/>
    <Row>
      <Col md={12} lg={12} className="btn-group">
        <div>Categories</div>
        <CategoryOptions
          className="btn-categories"
          onChange={onCategoryChange}
        />
      </Col>
    </Row>
  </div>
);

export default PreferencePanel;
