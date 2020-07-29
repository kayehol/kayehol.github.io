import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {Helmet} from "react-helmet"
import "typeface-ubuntu"
import "typeface-vt323"
import "./global.css"

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 650px;
  width: 300px;
  color: #fff;
  border: solid 4px #7d34db;
  margin: 0;
  h3 {
    font-family: "VT323", sans-serif;
    font-size: 2em;
    border-bottom: solid 2px #7d34db;
    padding: 10px 0 10px 20px;
    margin: 0;
  }
  h3 a:link {
    text-decoration: none;
    color: #fff;
  }
  h3 a:visited {
    text-decoration: none;
    color: #fff;
  }
  h3:hover {
    background-color: #7d34db;
  }
  h3 a:hover {
    text-decoration: underline;
  }
  h2 {
    font-family: "Ubuntu", sans-serif;
    font-size: 2.5em;
    background-color: #7d34db;
    padding: 60px 20px 60px 20px;
    margin: 0;
  }
  @media screen and (max-width: 480px) {
	width: auto;
	height: auto;
  }
`
const Conteudo = styled.div`
  margin: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  @media screen and (max-width: 480px) {
	flex-direction: column;
  }
`

export default function Layout({ children }) {
  return (
    <Container>
      <Helmet>
        <script>var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101269509);</script>
        <script async src="//static.getclicky.com/js"></script>
      </Helmet>
      <Menu>
        <h2>
          kayê<br></br>holanda
        </h2>
        <h3 id="projs">
          <Link to="/">projetos</Link>
        </h3>
        <h3 id="contato">
          <Link to="/contato/">contato</Link>
        </h3>
        <h3 id="blog">
          <Link to="/blog/">blog</Link>
        </h3>
      </Menu>
      <Conteudo>{children}</Conteudo>
    </Container>
  )
}
