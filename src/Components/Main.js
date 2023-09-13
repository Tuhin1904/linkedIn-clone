import React from 'react'
import "./Main.css"
import {FaCommentDots,FaShareAlt,FaThumbsUp,FaUserAlt,FaPhotoVideo,FaVideo,FaCalendarAlt,FaPencilAlt,FaEllipsisH} from 'react-icons/fa'
import postIm from "../images/postImage.jpg"

function Main() {
  return (
    <div className='mainContainer'>
      <div className="insideMain commonClass">
        <div>
          <FaUserAlt size={50} color='grey'/>
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <FaPhotoVideo color='rgb(64, 185, 255)'/>
            <span>Photo</span>
          </button>
          <button>
            <FaVideo color='rgb(137, 0, 228)'/>
            <span>Video</span>
          </button>
          <button>
            <FaCalendarAlt color='rgb(26, 218, 112)'/>
            <span>Event</span>
          </button>
          <button>
            <FaPencilAlt color='rgb(223, 109, 3)'/>
            <span>Write Article</span>
          </button>
        </div>
      </div>
      <div className="article commonClass">
         <div className="sharedActor">
            <a>
              <FaUserAlt size={20} color='grey'/>
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <a><FaEllipsisH/></a>
            </button>
         </div>
         <div id="descriptionD">
              Description
         </div>
            <div className="sharedImage">
              <a>
                <img src={postIm} alt="" />
              </a>
            </div>
            <div className="counts">
              <li>
                <button>
                  <FaThumbsUp />
                </button>
                <span>100k</span>
              </li>
              <li>
                <a>50 comments</a>
              </li>
            </div>
            <hr style={{margin:"3px 0px"}}/>
            <div className="reactActions">
            <button>
              <FaThumbsUp color='rgb(58, 143, 255)'/>
              <span>Like</span>
            </button>
            <button>
            <FaCommentDots/>
              <span>Comment</span>
            </button>
            <button>
              <FaShareAlt color='rgb(58, 143, 255)' />
              <span>Share</span>
            </button>
            </div>
      </div>
    </div>
  )
}

export default Main