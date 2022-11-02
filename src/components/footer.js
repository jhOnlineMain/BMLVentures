import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
    <footer>
        <div className="badge-wrap">
            <div className="ordinary-badge"> 
                <p className="badge-text">   
                    © {new Date().getFullYear()} &middot; Built by
                    {` `}
                </p>
                <a href="https://ordinaryagency.com.au">
                    <StaticImage 
                        width={150} 
                        height={50} 
                        id="ordinaryLogo" 
                        src="../images/ordinary-branding.png"
                        objectFit="scale-down"
                        alt="Ordinary agency logo"
                    />
                </a>
            </div>
        </div>
    </footer>
)

export default Footer