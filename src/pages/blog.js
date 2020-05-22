import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import "typeface-vt323"

const Blog = styled.div`
    text-align: center;
    color: #fff;
    padding-top: 50px;
    P {
        font-family: "VT323", sans-serif;
        font-size: 3em;
    }
`

export default () => (
    <Layout>
      <Blog>
        <p>nada ainda :(</p>
      </Blog>
    </Layout>
  )