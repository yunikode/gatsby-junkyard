import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Switch from '@material-ui/core/Switch'

import Layout from '../components/layout'
import ItemCard from '../components/ItemCard'

class Blog extends React.Component {
  state = {
    personal: true
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <Helmet>
          <title>zee-german | blog</title>
        </Helmet>

        <Switch
          checked={this.state.personal}
          onChange={this.handleChange('personal')}
          value="personal"
        />

        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ItemCard context={node} key={node.id} />
        ))}
      </Layout>
    )
  }
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(posts)/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: " DD MMMM, YYYY")
            tags
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
