import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"
import "typeface-ubuntu"
import "typeface-vt323"
import "../styles/global.css"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    padding: 60px 40px;
    h2 {
        font-family: 'vt323';
    }
    h4 {
        font-family: 'vt323';
    }
    p {
        font-family: 'Ubuntu';
        color: #919191;
    }
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
`
const PostWrapper = styled.div`
    padding: 20px;
    border: 2px solid #7d34db;
    h2 {
      border-bottom: 2px solid #7d34db;
      padding-bottom: 20px;
    }
    h4 a:link {
      color: #fff;
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
        <Container>
            {
                data.allMarkdownRemark.edges.map(({node}) =>(
                    <Post node={node}></Post>
                ))
            }
        </Container>
    </Layout>

export const query = graphql`
query {
    allMarkdownRemark {
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
          }
        }
      }
    }
  }
  
`
