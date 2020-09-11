import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FeatureCard from "../components/FeatureCard"
import PostCard from "../components/PostCard"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  // console.log(data.allMdx.edges)
  const posts = data.allMdx.edges

  return (
    <Layout isHome>
      <SEO></SEO>
      <div className="container">
        <section>
          {posts.map(
            ({ node }, i) =>
              // The tag below includes the markup for each post - components/common/PostCard.js

              node.frontmatter.featured && (
                <FeatureCard key={node.id} post={node} />
              )
          )}
        </section>

        <section className="post-feed">
          {posts.map(
            ({ node }, i) =>
              // The tag below includes the markup for each post - components/common/PostCard.js

              !node.frontmatter.featured && (
                <PostCard key={node.id} post={node} />
              )
          )}
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query AllPostQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            title
            tags
            featured
            feature_image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author_image
          }
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`
