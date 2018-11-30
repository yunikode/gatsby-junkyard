import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Utilities
import kebabCase from 'lodash/kebabCase'

// Components
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Segment from '../components/Segment'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  },
  location
}) => (
  <Layout location={location}>
    <Helmet title={title} />
    <Segment>
      <Typography variant="display1" align="center">
        Tags
      </Typography>
    </Segment>
    <Segment>
      <Grid container spacing={16} justify="center" alignItems="center">
        {group.map(tag => (
          <Grid item key={tag.fieldValue}>
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              style={{ textDecoration: 'none' }}
            >
              <Button>
                <Typography>
                  {`${tag.fieldValue} (${tag.totalCount})`}
                </Typography>
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Segment>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
