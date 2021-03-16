import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const FeatureCard = ({ post }) => {
  const url = post.frontmatter.path
  const feature_image =
    post.frontmatter.feature_image &&
    post.frontmatter.feature_image.childImageSharp.fluid

  const author_image = "images/gatsby-icon.png"
  return (
    <Link to={url} className="feature-card">
      <div className="feature-block">
        <header className="post-card-header">
          {feature_image && (
            <figure className="feature-card-image">
              <Img fluid={feature_image} />
            </figure>
          )}

          {/* {post.featured && <span>Featured</span>} */}
        </header>

        <footer className="feature-card-footer">
          {post.frontmatter.tags && (
            <div className="post-card-tags">{post.frontmatter.tags}</div>
          )}
          <h2 className="feature-card-title">{post.frontmatter.title}</h2>
          <section className="post-card-excerpt">{post.excerpt}</section>
          <div className="feature-author-block">
            <div className="post-card-footer-left">
              <div className="post-card-avatar">
                {post.frontmatter.author_image ? (
                  <img
                    className="author-profile-image"
                    src={post.frontmatter.author_image}
                    alt={post.frontmatter.author}
                  />
                ) : (
                  <img
                    className="default-avatar"
                    src="/images/default_avatar.svg"
                    alt={post.frontmatter.author}
                  />
                )}
              </div>
              <span>{post.frontmatter.author}</span>
            </div>
            {/* <div className="post-card-footer-right">
                            <div>{readingTime}</div>
                        </div> */}
          </div>
        </footer>
      </div>
    </Link>
  )
}

export default FeatureCard
