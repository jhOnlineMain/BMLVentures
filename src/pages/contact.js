import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from '../components/contactForm'

const Contact = () => (
  
  <Layout>
    <h1>Get in touch</h1>
    <ContactForm/>
  </Layout>
)

export const Head = () => <Seo title="Contact us" />

export default Contact
