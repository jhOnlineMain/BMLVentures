import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Video from "../components/video"
import ContactForm from "../components/contactForm"
import LinkTile from "../components/linkTile"
import LinkTileGrid from "../components/linkTileGrid"




const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
   query IndexQuery {
    wpPage(slug: {eq: "home"}) {
    home {
      introExplain
      introHook
      bannerImage {
        width
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    linkTileGrid {
      linkTile {
        label
        pagelink
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1, width: 200)
            }
          }
          altText
        }
      }
    }
  }
}
  `)

  const home = data.wpPage.home
  
return (    
  <Layout>
    {console.log(data.wpPage.linkTileGrid.linkTile)}
  <section className="banner-wrap">
    <GatsbyImage
      className="feature-image"  
      image={ getImage(home.bannerImage.localFile) }
      alt={home.bannerImage.altText}
      width={home.bannerImage.width}
    />
  </section>

  <section className="intro">
    <div className="hook">
      <h3>{data.wpPage.home.introHook}</h3>
    </div>
    <div className="explain">
      <p>{data.wpPage.home.introExplain}</p>
    </div>  
  </section>

  <section className="link-tiles">
    <LinkTileGrid
      tileGrid={data.wpPage.linkTileGrid.linkTile}
    />
  </section>

  {/* <ContactForm/> */}
  
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
