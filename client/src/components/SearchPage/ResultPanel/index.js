import React from 'react';
import { Row, Image } from 'react-bootstrap';

import YelpPanel from './YelpPanel.js';

import './index.css';


const ResultPanel = ({ image_url, name, price, categories, rating, review_count, location, url}) => (
  <div>
    <Row>
      <YelpPanel
        image_url={image_url}
        name={name}
        price={price}
        categories={categories}
        rating={rating}
        review_count={review_count}
        location={location}
      />
      <a href={url}>
        <Image
          src={process.env.PUBLIC_URL+"/Yelp_logo.png"}
          alt={url}
          className="logo_size pull-right"
        />
      </a>
    </Row>




  </div>
);

export default ResultPanel;
