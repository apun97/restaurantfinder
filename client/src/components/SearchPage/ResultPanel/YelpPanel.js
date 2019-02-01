import React from 'react';
import { Col, Image } from 'react-bootstrap';

const YelpPanel = ({ image_url, name, price, categories, rating, review_count , location}) => (
  <div>
    <Col xs={4} sm={4} md={4} lg={4} >
      <Image src={image_url} thumbnail/>
    </Col>
    <Col xs={8} sm={8} md={8} lg={8}>
      <h2>{name}</h2>
      <div>{price} - {categories}</div>
      <div> <img src={process.env.PUBLIC_URL + '/' + rating.toString().replace('.', '_') + '.png'} alt="Food"/> - {review_count} reviews</div>
      <div>{location.display_address.join(' ')} </div>
    </Col>
  </div>
);

export default YelpPanel;
