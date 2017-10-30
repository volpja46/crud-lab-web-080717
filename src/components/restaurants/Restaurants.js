
import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const { store } = this.props;
    const restaurants = store.getState().restaurants.map((rest, index) => {
      return <Restaurant key={index} restaurant={rest} store={store} />
    });

    return(
      <ul>
        { restaurants }
      </ul>
    );
  }
};

export default Restaurants;
