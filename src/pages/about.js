import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from "../components/googleMap"
const About = () => (
  <Layout>
    <h1>About us </h1>
    <Map/>
  </Layout>
)

export const Head = () => <Seo title="About us" />

export default About
