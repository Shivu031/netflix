import React from 'react';
import './watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';

const Watch = () => {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      <video src="Zaroori Tha.mp4" className="video" autoPlay progress="true" controls></video>
    </div>
  )
}

export default Watch
