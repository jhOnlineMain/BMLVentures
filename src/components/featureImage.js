import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const FeatureImage = (imageSrcUrl) => {
return (
<StaticImage
    className="feature-image"
    style={{
        width:'100%',
        height:'40vh',
        objectFit:'cover',
        opacity:'0.9'
    }}
/>
)
}
export default FeatureImage