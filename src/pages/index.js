import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Video from "../components/video"
import FeatureImage from "../components/featureImage"




const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  const IndexData = useStaticQuery(graphql`
    query IndexQuery {
        allWpPage {
            nodes {
                title
                id
                slug
                link
            }
        }
    }
    `)
console.log(IndexData)    
return (    
  <Layout>
  <Seo title="Home" />
  {/* <div className="video-wrap">
  <Video
    videoSrcURL="https://www.youtube.com/watch?v=1ME0hmW6SLM"
    videoTitle="Placeholder drone footage"
  />  
    </div> */}
  {<FeatureImage/>}
  {/* <section className="introduction">
    {IndexData.allWpPage.nodes.title['Home-intro-hook']}
    
    </section>   */}
  </Layout>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
