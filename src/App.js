import React, { Component } from 'react';
import { ConnectedRestaurantInput } from './components/RestaurantInput';
import { ConnectedRestaurants } from './components/Restaurants';
import { connect } from 'redux'
import { bindActionCreators } from 'redux'
import { addRestaurant } from './actions/restaurants'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRestaurantInput />
        <ConnectedRestaurants />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRestaurant: addRestaurant
  }, dispatch)
}

export default App;
