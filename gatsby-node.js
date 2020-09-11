/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Using graphql to query all the .mdx posts
  const mdxPosts = await graphql(
    `
      query {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  )

  if (mdxPosts.errors) {
    reporter.panicOnBuild("ERROR: In Querying Posts")
  }

  // Create blog post pages.
  const posts = mdxPosts.data.allMdx.edges

  // We'll call `createPage` for each mdxPosts

  posts.map(({ node }, index) => {
    createPage({
      // this is the path of post we will specify the path in posts frontmatter
      path: node.frontmatter.path,
      // This component/Layout for our MDX posts
      // change the path of layout according to your folder structure.
      component: path.resolve(`./src/pages/post.tsx`),
      // We will use the id (which is unique) to query our post data later onn.

      context: { id: node.id },
    })
  })

  //  create authors page

  // const authors = mdxPosts.data.allMdx.edges

  // authors.map(({ node }, index) => {
  //   createPage({
  //     // this is the path of post we will specify the path in posts frontmatter
  //     path: node.frontmatter.path,
  //     // This component/Layout for our MDX posts
  //     // change the path of layout according to your folder structure.
  //     component: path.resolve(`./src/pages/author.tsx`),
  //     // We will use the id (which is unique) to query our post data later onn.

  //     context: { id: node.id },
  //   })
  // })
}
