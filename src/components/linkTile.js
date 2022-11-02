import { GatsbyImage } from "gatsby-plugin-image"
import {Link} from "gatsby"
import React, { Fragment } from "react"

const LinkTile = (props) => {
return (
<section 
    className="link-tiles"
    style={{
        display:'flex',
        flexFlow:'row',
        width:'100vw',
        height:'30vh',
        boxSizing:'content-box',
        justifyContent:'space-around',
        alignItems:'center'

    }}
>
    <Fragment>
      <div className="tile">
      <Link to={props.tileLink}>
        <GatsbyImage
          image={props.tileImage}
          alt={props.tileImageAlt}
          width={200}
          aspectRatio={1/1}
          />
        <Link to={props.tileLink}> <label> {props.tileLabel} </label></Link>
      </Link>
      </div>
    </Fragment>
  </section>
)
}
export default LinkTile