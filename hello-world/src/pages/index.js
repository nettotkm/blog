import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact">Contact</Link>
    <Link to="/about">About</Link>
    <Header headerText="Mario Tadakuma Neto" />

    <p>What a wonderful world.</p>
  </div>
)
