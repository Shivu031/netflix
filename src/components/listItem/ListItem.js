import React, { useState } from 'react';
import './listItem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material';

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "Zaroori Tha.mp4";
  return (
    <div className='listItem' style={{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}>
      <img src="sidebar.jpg" alt="" />
      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop></video>
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow className='icon'/>
                <Add className='icon'/>
                <ThumbUpAltOutlined className='icon'/>
                <ThumbDownOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>2000</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad aut ipsa tempore, dignissimos tempora odio eveniet dicta voluptatem nulla minus itaque delectus. 
            </div>
            <div className="genre">Action</div>
        </div>
      </>
      )}
    </div>
  )
}

export default ListItem
