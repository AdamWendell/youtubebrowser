import React, { PropTypes } from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  const videoItems = props.videos.map((video, i) => (
    <VideoListItem
      video={video}
      onVideoSelect={props.onVideoSelect}
      key={video.etag } />
  ))
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;