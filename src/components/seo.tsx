/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type ImageType = {
  src: string
  height: number
  width: number
}

type SeoProps = {
  description?: string
  lang?: string
  image?: ImageType
  title: string
}

const SEO = ({ description, lang = "en", image, title }: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  console.log(image)
  const metaTitle = title ? title : site.siteMetadata.title
  const metaDescription = description
    ? description
    : site.siteMetadata.description
  let metaImage: ImageType = image
    ? image
    : { src: site.siteMetadata.image, width: 1200, height: 670 }
  metaImage.src = `${site.siteMetadata.url}${metaImage.src}`
  console.log(metaImage)
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: metaImage.src,
        },
        {
          property: "og:image:width",
          content: metaImage.width,
        },
        {
          property: "og:image:height",
          content: metaImage.height,
        },
      ]}
    />
  )
}

export default SEO
