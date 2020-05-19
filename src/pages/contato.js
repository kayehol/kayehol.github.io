import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import "typeface-vt323"

const Contato = styled.div`
  color: #fff;
  text-align: center;
  padding: 80px 0px;
  font-family: "vt323", sans-serif;
  font-size: 1.5em;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
      border: 2px solid #7d34db;
      width: 50%;
      margin: auto;
      padding: 10px 0;
  }
  h2 a:link {
    color: #fff;
  }
`

export default () => (
  <Layout>
    <Contato>
        <h2>(82) 99321 3377</h2>
        <h2>kaye.holanda@gmail.com</h2>
        <h2>
          <a href="instagram.com/xeeeeeeeeeeeex">Instagram</a>
        </h2>
    </Contato>
  </Layout>
)
