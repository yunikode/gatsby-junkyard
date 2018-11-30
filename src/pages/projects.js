import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Parallax } from 'react-spring/dist/addons'
import Page from '../components/PortfolioPage'

import '../styles/index.css'

const Pages = ({ data, classes, totalpages }) =>
  data.allMarkdownRemark.edges.map(({ node }, index) => (
    <Page
      key={index}
      offset={index}
      total={totalpages}
      caption={node.frontmatter.title}
      first={node.excerpt}
      second={node.frontmatter.tags}
      link={node.fields.slug}
      gradient={node.frontmatter.tech}
    />
  ))

class Portfolio extends React.Component {
  scroll = to => this.DOMNode.scrollTo(to)
  getRef = node => {
    this.DOMNode = node
  }

  componentDidMount() {
    window.addEventListener('keyup', this.keyPresser, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyPresser, false)
  }

  keyPresser = event => {
    let { offset } = this.DOMNode
    let nextPage = offset + 1
    let prevPage = offset - 1

    if (event.key === 'ArrowRight') {
      if (nextPage === this.DOMNode.props.pages) {
        this.DOMNode.scrollTo(0)
      } else {
        this.DOMNode.scrollTo(nextPage)
      }
    }

    if (event.key === 'ArrowLeft') {
      if (prevPage === -1) {
        this.DOMNode.scrollTo(this.DOMNode.props.pages - 1)
      } else {
        this.DOMNode.scrollTo(prevPage)
      }
    }

    if (event.key === 'ArrowDown') {
      window.location.assign(
        this.DOMNode.props.children.props.data.allMarkdownRemark.edges[offset]
          .node.fields.slug
      )
    }
  }

  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <title>zee-german | portfolio</title>
        </Helmet>
        <Parallax
          className="para_container"
          ref={this.getRef}
          pages={data.allMarkdownRemark.totalCount}
          horizontal
          scrolling={false}
        >
          <Pages data={data} totalpages={data.allMarkdownRemark.totalCount} />
        </Parallax>
      </React.Fragment>
    )
  }
}

export default Portfolio

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/(projects)/" } } }
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
            tech
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
