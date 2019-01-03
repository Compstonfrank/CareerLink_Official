/* eslint-disable camelcase */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import YouTubePlayer from '../YouTubePlayer';
import ShowStarRating from '../StarRatings/ShowStarRating';

export default class All_Employers extends Component {
  componentDidMount() {
    this.props.fetchEmployers();
  }

  render() {
    const { employers } = this.props;
    return (
      <div>
        <h1>ALL EMPLOYERS COMPONENT</h1>
        {employers.map(employer => {
          return (
            <div key={employer.id}>
              <Link to={`/employers/${employer.id}`}>
                <div>
                  <h3>{employer.name}</h3>
                  {/* the passed prop needs to be updated to the actual rating. The rating is placed on local state in Single_Employer */}
                  <ShowStarRating rating={3} />

                  <div id="youtube">
                  {employer.youtubeUrl
                      ? <YouTubePlayer width={560} height={340} url={employer.youtubeUrl} />
                      : <img src={employer.logoUrl} id="allemployerPics" />
                  }
                  </div>

                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
