import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default class YouTubePlayer extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

/*
HOW TO USE THIS COMPONENT
***Controlling the player***
You can access & control the player in a way similar to the official api:

The API component will pass an event object as the sole argument to each of those functions the event handler props. The event object has the following properties:

The event's target identifies the video player that corresponds to the event.
The event's data specifies a value relevant to the event. Note that the onReady event does not specify a data property.

*/