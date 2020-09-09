import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ post }) => {
  const url = post.frontmatter.path
  const feature_image =
    post.frontmatter.feature_image &&
    post.frontmatter.feature_image.childImageSharp.fluid

  const author_image = "images/gatsby-icon.png"
  return (
    <Link to={url} className="post-card">
      <header className="post-card-header">
        {feature_image && (
          <Img className="post-card-image" fluid={feature_image} />
        )}
        {post.frontmatter.tags && (
          <div className="post-card-tags">{post.frontmatter.tags}</div>
        )}
        {/* {post.featured && <span>Featured</span>} */}
        <h2 className="post-card-title">{post.frontmatter.title}</h2>
      </header>
      <section className="post-card-excerpt">{post.excerpt}</section>
      <footer className="post-card-footer">
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
      </footer>
    </Link>
  )
}

export default PostCard
