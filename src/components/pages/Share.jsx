import React from 'react'
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon} from 'react-share';

class Share extends React.Component{
  render(){
    return (
      <div>
        <FacebookShareButton
          url="http://localhost:3000"
        >

        <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url="http://localhost:3000"
        >

        <TwitterIcon size={32} round={true}/>
        </TwitterShareButton>

      </div>
    )
  }
}


export default Share
