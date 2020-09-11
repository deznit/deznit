import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CodeTitle from "../components/CodeTitle"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const shortcodes = { CodeTitle }
  return (
    <Layout isHome={false}>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.excerpt}
        image={data.mdx.frontmatter.feature_image.childImageSharp.fixed.src}
      ></SEO>
      <div className="container">
        <article className="content">
          <h1 className="content-title">{data.mdx.frontmatter.title}</h1>
          <div className="post-author">
            {data.mdx.frontmatter.author}
            <span className="post-date">{data.mdx.frontmatter.date}</span>
          </div>

          {data.mdx.frontmatter.feature_image ? (
            <Img
              className="post-feature-image"
              fluid={data.mdx.frontmatter.feature_image.childImageSharp.fluid}
            />
          ) : null}
          <section className="post-full-content">
            {/* The main post content */}
            {/* <section
              className="content-body load-external-scripts"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            /> */}
            <section className="content-body load-external-scripts">
              <MDXProvider components={shortcodes}>
                <MDXRenderer className="content-body load-external-scripts">
                  {data.mdx.body}
                </MDXRenderer>
              </MDXProvider>
            </section>
          </section>
        </article>
      </div>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 250)
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
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        author_image
      }
    }
  }
`
