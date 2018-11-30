import React from 'react'
import PropTypes from 'prop-types'
import Segment from '../components/Segment'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

// Components
import { Link, graphql } from 'gatsby'

const styles = theme => ({
  linky: {
    textDecoration: 'none'
  }
})


const Tags = ({ pageContext, data, classes }) => {
  // const { classes } = props
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} ${
    totalCount === 1 ? 'entry' : 'entries'
  } tagged with "${tag}"`

  return (
    <Layout>
      <Helmet title={tag} />
      <Segment>
        <Typography variant="display1">{tagHeader}</Typography>
      </Segment>
      <Segment>
        <List>
          {edges.map(({ node }) => {
            const { title } = node.frontmatter
            const { slug } = node.fields
            let type = null
            if (slug.includes('/posts')) {
              type = 'blog entry'
            } else if (slug.includes('/projects')) {
              type = 'project'
            }

            return (
              <Link to={slug} key={slug} className={classes.linky}>
                <ListItem button>
                  <ListItemText primary={title} secondary={type} />

                </ListItem>
              </Link>
            )
          })}
          <Link to='/tags' className={classes.linky}>
            <ListItem button>
              <ListItemText>
                <Typography align='center'>
                  All tags
                </Typography>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      </Segment>
    </Layout>
  )
}

Tags.propTypes = {
  classes: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
}

// export default Tags
export default withStyles(styles)(Tags)

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
