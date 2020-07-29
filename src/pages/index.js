import React from "react"
import { graphql } from "gatsby"
import {Helmet} from "react-helmet"
import Layout from "../components/layout"
import styled from 'styled-components'
import Img from "gatsby-image"
import "typeface-ubuntu"
import "typeface-vt323"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 60px 20px;
    @media screen and (max-width: 720px) {
      flex-direction: column;
    }
`
const PostWrapper = styled.div`
    padding: 20px;
    border: 2px solid #7d34db;
    color: #fff;
    width: 100%;
    h2 {
      border-bottom: 2px solid #7d34db;
      padding-bottom: 20px;
      font-family: 'vt323', sans-serif;
    }
    h4 a:link {
      color: #fff;
    }
    h4 {
      font-family: 'vt323', sans-serif;
    }
    p {
      font-family: 'Ubuntu';
      color: #919191;
    }
    @media screen and (max-width: 720px) {
      width: auto;
    }
`

const Post = (props) => (
    <PostWrapper>
        <h2>{props.node.frontmatter.title}</h2>
        <Img fluid={props.node.frontmatter.featuredImage.childImageSharp.fluid} />
        <h4><a href={props.node.frontmatter.link}>{props.node.frontmatter.link}</a></h4>
        <p>{props.node.frontmatter.detalhes}</p>
    </PostWrapper>
)

export default ({data}) => 
    <Layout>
      <Helmet>
        <script>
          {`
          var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(101269509);
          `}
        </script>
        <script async src="//static.getclicky.com/js"></script>
      </Helmet>
        <Container>
            {
              data.allMarkdownRemark.edges.map(({node}) =>(
                  <Post node={node} key={node.id}></Post>
              ))
            }
        </Container>
      </Layout>
   

export const query = graphql`
query {
    allMarkdownRemark(sort: {fields:[frontmatter___date], order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            detalhes
            link
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
        }
      }
      distinct(field: frontmatter___date)
    }
  }
  
`
