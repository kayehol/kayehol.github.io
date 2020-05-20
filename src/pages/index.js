import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    margin: auto;
    padding: 60px 40px;
    h2 {
        font-family: 'vt323';
    }
    h4 {
        font-family: 'vt323';
    }
    p {
        font-family: 'Ubuntu';
    }
`
const PostWrapper = styled.div`
    padding: 20px;
`

const Post = (props) => (
    <PostWrapper>
        <h2>{props.node.frontmatter.title}</h2>
        <Img fluid={props.node.frontmatter.featuredImage.childImageSharp.fluid} />
        <h4>{props.node.frontmatter.link}</h4>
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
