import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
    <footer>
        <div className="credit-wrap">
            <div className="ordinary-badge"> 
            <p className="badge-text">   
                © {new Date().getFullYear()} &middot; Built by
                {` `}
            </p>
            <a href="https://ordinaryagency.com.au">
                <StaticImage width="150px" height="50px" id="ordinaryLogo" src="../images/ordinary-branding.png"/>
            </a>
            </div>
        </div>
    </footer>
)

export default Footer