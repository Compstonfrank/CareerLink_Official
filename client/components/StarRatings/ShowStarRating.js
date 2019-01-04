import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class App extends Component {
  render() {
    const { rating } = this.props;
    return (                
      <div>
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent
          name="stars" 
          editing={false}
          starCount={5}
          value={rating}
        />
      </div>
    );
  }
}
