import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import PreferencePanel from './PreferencePanel';
import ResultPanel from './ResultPanel';
import MapPanel from './ResultPanel/MapPanel.js'

import './index.css';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [1],
      distance: 800,
      categories: ["asianfusion"],
      origin: props.origin,
      businesses: [],
      _businessesLoaded: false,
      displayedBusiness: {},
      displayedBusinessIndex: 0,
      _displayedBusinessLoaded: false,
      displayedCategories: "",
      preferencesChanged: true
    };

    this.onPriceChange = this.onPriceChange.bind(this);
    this.onDistanceChange = this.onDistanceChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.setBusinesses = this.setBusinesses.bind(this);
    this.callYelpAPI = this.callYelpAPI.bind(this);
    this.setDisplayedBusiness = this.setDisplayedBusiness.bind(this);
  }

  // Fetches our GET route from the Express server.
  callYelpAPI = async () => {
    if(this.state.preferencesChanged){
      const {
        price,
        distance,
        categories,
        origin
      } = this.state
      const response = await fetch(`/yelp_request?origin=${origin}&price=${price}&distance=${distance}&categories=${categories}`);
      const body = await response.json();

      if (body.businesses.length < 1) {
        this.setState({
          _displayedBusinessLoaded: false,
          _businessesLoaded: false
         });
      }
      else if (response.status !== 200) {
        throw Error(body.message);
      }
      else {
        this.setBusinesses(body.businesses);
        this.setState({
          preferencesChanged: false,
        })
      }
    }
    else{
      if(this.state.businesses !== null){
        this.setDisplayedBusiness();
      }
    }
  };

  onPriceChange(event){
    this.setState({
      price: event,
      preferencesChanged: true
    });

  }

  onDistanceChange(event){
    this.setState({
      distance: event,
      preferencesChanged: true
    });
  }

  onCategoryChange(event){
    this.setState({
      categories: event,
      preferencesChanged: true
    });
  }

  setBusinesses(businesses){
    if(businesses !== null){
      this.setState({
        businesses,
      });
      this.setDisplayedBusiness();
    }
  }

  setDisplayedBusiness(){
    const { businesses } = this.state;
    const random_value = Math.floor(Math.random() * 10);

    this.setState({
      displayedBusiness: businesses[random_value],
      _displayedBusinessLoaded: true,
      _businessesLoaded: true
    });

    const categories = this.state.displayedBusiness.categories;
    const categoryNames = categories.map(category => category.title);
    const categoryNamesString = categoryNames.join(', ');
    this.setState({ displayedCategories: categoryNamesString });
  }

  render() {
    const {
      _businessesLoaded,
      displayedCategories,
      _displayedBusinessLoaded,
    } = this.state;

    const{
      image_url,
      name,
      price,
      review_count,
      rating,
      location,
      url,
      coordinates
    } = this.state.displayedBusiness;

    return (
      <div>
        <Row className="big-pane">
          <Col sm={12} md={6} lg={6} className="panel">
            <PreferencePanel
              onPriceChange={this.onPriceChange}
              onDistanceChange={this.onDistanceChange}
              onCategoryChange={this.onCategoryChange}
            ></PreferencePanel>
            <br/>
            <br/>
            <Button onClick={this.callYelpAPI}>GO</Button>
          </Col>
          <Col sm={12} md={6} lg={6} className="panel">
            { _businessesLoaded
              ?
              <ResultPanel
                image_url={image_url}
                name={name}
                price={price}
                categories={displayedCategories}
                rating={rating}
                review_count={review_count}
                location={location}
                url={url}
              />
              :
              <div>
                No businesses found.
              </div>
            }
            { _displayedBusinessLoaded
              ?
              <MapPanel
                coordinates={coordinates}
              />
              :
              <div>
                Try modifying your preferences.
              </div>
            }

            </Col>
        </Row>
      </div>
    );
  }
}

export default SearchPage;
