import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"

const IndexPage = () => {
  const handleClickEvent = e => {
    e.preventDefault()
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "buttonClick",
      category: "Custom Button",
      action: "click",
      lable: "Google Analytics Custom Button",
    })
  }
  const handleSubmit = e => {
    axios
      .get("https://jsonplaceholder.typicode.com/user")
      .then(response => {
        console.log(response.data)
        handleClickEvent(e)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p>
      <button className="call-to-action" onClick={handleSubmit}>
        Click this button
      </button>
      {}
    </Layout>
  )
}

export default IndexPage
