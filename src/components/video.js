import React from "react"
import DroneVideo from "../video/BMLV-placeholder-drone.mp4"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <video controls autoPlay>
      <source src={DroneVideo} type="video/mp4" />
    </video>
)
export default Video