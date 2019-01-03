import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
//I NEED TO FIGURE OUT HOW TO PASS THE RATING ON THE LOCAL STATE BACK UP TO THE ALL STUDENTS COMPONENT SO IT CAN RENDER ON EACH STUDENT'S INFO. IT NEEDS TO BE PASSED TO THE <ShowStarRating /> COMPONENT AS THE RATING PROP BUT IT NEEDS TO BE DONE AS THE RATING PROP.


export default class EditStarRating extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    console.log(this.state.rating)
    const { rating } = this.state;
    
    return (                
      <div>
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent
          name="stars" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
