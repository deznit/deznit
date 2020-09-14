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
  const frontmatter = data.mdx.frontmatter
  return (
    <Layout isHome={false}>
      <SEO
        title={frontmatter.title}
        description={data.mdx.excerpt}
        image={frontmatter.feature_image.childImageSharp.resize}
      ></SEO>
      <div className="container">
        <article className="content">
          <h1 className="content-title">{frontmatter.title}</h1>
          <div className="post-author">
            {frontmatter.author}
            <span className="post-date">{frontmatter.date}</span>
          </div>
          <section className="tags-container">
            <div>
              {frontmatter.tags ? (
                <span className="btn btn-dark">#{frontmatter.tags}</span>
              ) : null}
            </div>
            <div className="tags-container-right">
              {frontmatter.repo ? (
                <a href={frontmatter.repo} target="_blank">
                  <span className="btn btn-primary">
                    <img src="/icons/github.svg" width="22px" height="22px" />
                    <span>Code</span>
                  </span>
                </a>
              ) : null}
            </div>
          </section>

          {frontmatter.feature_image ? (
            <Img
              className="post-feature-image"
              fluid={frontmatter.feature_image.childImageSharp.fluid}
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
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        author_image
        repo
      }
    }
  }
`
