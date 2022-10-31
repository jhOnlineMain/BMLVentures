import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from "../components/googleMap"
const About = () => {
  const Qdata = useStaticQuery(graphql`
  query AboutQuery {
  wpPage(slug: {eq: "about"}) {
    about {
      title
      latitude
      longitude
      hook
    }
  }
  }

  `)
const data = Qdata.wpPage.about
return (
  <Layout>
    <h1>{data.title} </h1>
    <h3>{data.hook}</h3>
    <Map/>
  </Layout>
)

}

export const Head = () => <Seo title="About us" />

export default About
