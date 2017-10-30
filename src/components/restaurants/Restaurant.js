import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {

  handleOnClick = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
      // comes from Restaurants
    });
  }

  render() {

    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleOnClick}> delete </button>
          <ReviewInput
            store={this.props.store}
            restaurantId={this.props.restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
