import React, { Component } from 'react';

import LoadingPage from '../LoadingPage/';
import SearchPage from '../SearchPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      hasLocation: false
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.sendLocation = this.sendLocation.bind(this);
  }

  onInputChange(event){
    this.setState({ location: event.target.value });
  }

  sendLocation(event){
    event.preventDefault();
    if(this.state.location === ''){
      alert("Please enter a location");
    }
    else{
      this.setState({
        hasLocation: true
      });
    }
  }

  render() {
    const { location, hasLocation } = this.state;

    return (
        <div>
          { hasLocation
          ?
          <SearchPage
            origin={location}
          />
          :
          <LoadingPage
            onSubmit={this.sendLocation}
            onChange={this.onInputChange}
          />
          }
        </div>

    );
  }
}

export default App;
