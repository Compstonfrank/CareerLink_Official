/* eslint-disable camelcase */
import React from 'react';
import { getVideoName } from '../util';

const YouTubePlayer = (props) => {
    return (
      <iframe width={props.width} height={props.height} src={`https://www.youtube.com/embed/${getVideoName(props.url)}`} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
    )
}

export default YouTubePlayer;
