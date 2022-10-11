import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Meals from "../components/sections/MealsSection"
import MainTitle from "../components/objects/MainTitle"
import DataBars from "../components/sections/DataBarSection"
import DataSection from "../components/sections/DataSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <MainTitle />
    <DataSection />
    <Meals />
  </Layout>
)

export default IndexPage
