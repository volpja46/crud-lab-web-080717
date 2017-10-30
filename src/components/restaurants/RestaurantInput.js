import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <label>Add a new restaurant</label><br/>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} /><br/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
