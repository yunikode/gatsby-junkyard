const path = require(`path`)
const _ = require(`lodash`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/blog-post.js')
  const projectTemplate = path.resolve('src/templates/project-page.js')
  const tagTemplate = path.resolve('src/templates/tags.js')

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({ node }) => {
        if (node.fields.slug.includes('/posts/')) {
          createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
              slug: node.fields.slug
            }
          })
        } else {
          createPage({
            path: node.fields.slug,
            component: projectTemplate,
            context: {
              slug: node.fields.slug
            }
          })
        }
      })
      let tags = []
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })

      tags = _.uniq(tags)

      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag
          }
        })
      })
    })
    resolve()
  })
}
