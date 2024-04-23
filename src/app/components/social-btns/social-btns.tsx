import { InstaIcon } from "../icons/insta-icon"
import { LinkedInIcon } from "../icons/linkedin-icon"
import { TwitterIcon } from "../icons/twitter-icon";
import { GitHubIcon } from './../icons/github-icon';
import "./social-btns.css"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/the__jao/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/joao-neumann/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/jaoNeumann">
                <GitHubIcon/>
            </a>
            <a href="twitter.com/">
                <TwitterIcon/>
            </a>
        </div> 
    )
}