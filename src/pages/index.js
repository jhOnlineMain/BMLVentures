import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Video from "../components/video"
import ContactForm from "../components/contactForm"




const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      wpPage {
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
      }
    }
  `)
  const home = data.wpPage.home
  const image = getImage(home.bannerImage.localFile)
  console.log(image)
return (    
  <Layout>
  <Seo title="Home" />
  <section className="banner-wrap">
    <GatsbyImage
      className="feature-image"  
      image={image}
      alt={home.bannerImage.altText}
      width={home.bannerImage.width}
      style={{
        width:'100%',
        height:'60vh',
        objectFit:'cover',
        opacity:'0.9'
      }}
    />
  </section>
  <section className="intro">
    <div className="hook"><h3>{data.wpPage.home.introHook}</h3></div>
    <div className="explain"></div><p>{data.wpPage.home.introExplain}</p>
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
