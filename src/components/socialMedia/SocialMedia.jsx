import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import TwitterAccountCircle from '@material-ui/icons/Twitter'
import FacebookAccountCircle from '@material-ui/icons/Facebook';
import LinkedInAccountCircle from '@material-ui/icons/LinkedIn';
import YouTubeAccountCircle from '@material-ui/icons/YouTube';

export const SocialMedia = () => {

    return (
        <div className="socialMediaContainer">

            <IconButton
                edge="end"
                aria-haspopup="true"
                href={'https://twitter.com'}
                color="inherit"
            >
                <TwitterAccountCircle />
            </IconButton>

            <IconButton
                edge="end"
                aria-haspopup="true"
                href={'https://www.reddit.com/user/soniasdev'}
                color="inherit"
            >
                <FacebookAccountCircle />
            </IconButton>

            <IconButton
                edge="end"
                aria-haspopup="true"
                href={"https://www.linkedin.com"}
                color="inherit"
            >
                <LinkedInAccountCircle />
            </IconButton>

            <IconButton
                edge="end"
                aria-haspopup="true"
                href={" https://www.youtube.com/channel/UCH6JAh8ugccQGOxRsbztSdA/"}
                color="inherit"
            >
                <YouTubeAccountCircle />
            </IconButton>
        </div>
    )
}