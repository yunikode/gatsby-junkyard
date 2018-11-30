import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
// import Segment from '../components/Segment'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import rehypeReact from 'rehype-react'

import '../styles/fonts.css'

export default ({ data }) => {
  const post = data.markdownRemark

  const renderAst = new rehypeReact({
    createElement: React.createElement
  }).Compiler

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <div>
        <Paper
          className={post.frontmatter.category}
          style={{ padding: `1em`, margin: `1em` }}
        >
          <Typography variant="h4">{post.frontmatter.title}</Typography>
          {post.frontmatter.tags &&
            post.frontmatter.tags.map(tag => (
              <Link
                to={`/tags/${kebabCase(tag)}`}
                key={tag}
                style={{ textDecoration: 'none' }}
              >
                <Button>{tag}</Button>
              </Link>
            ))}
        </Paper>

        <Paper style={{ padding: `1em`, margin: `1em` }}>
          <div>{renderAst(post.htmlAst)}</div>
        </Paper>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        tags
        category
      }
    }
  }
`
