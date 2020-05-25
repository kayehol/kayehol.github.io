import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import "typeface-vt323"

const Contato = styled.div`
  color: #fff;
  text-align: center;
  padding: 0px;
  font-family: "vt323", sans-serif;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2 {
      border: 2px solid #7d34db;
      width: 100%;
      margin: auto;
      padding: 10px;
  }
  h2 a:link {
    color: #fff;
  }
  @media screen and (max-width: 480px) {
    padding: 80px 0;
    font-size: 1.2em;
  }
`

export default () => (
  <Layout>
    <Contato>
        <h2><a href="https://wa.me/5582003213377" target="_blank" rel="noopener noreferrer">(82) 99321 3377</a></h2>
        <h2><a href="mailto:@kaye.holanda@gmail.com" >kaye.holanda@gmail.com</a></h2>
        <h2>
          <a href="https://www.instagram.com/xeeeeeeeeeeeex/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </h2>
        <h2>
          <a href="https://github.com/kayehol/" target="_blank" rel="noopener noreferrer">github.com/kayehol</a>
        </h2>
    </Contato>
  </Layout>
)
