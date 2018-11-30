import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'

import '../styles/fonts.css'
import '../styles/projects.css'

class BackImage1 extends React.Component {
  render() {
    return (
      <div className="pimg1">
        <div className="ptext">
          <span className="border">{this.props.children}</span>
        </div>
      </div>
    )
  }
}

class BackImage2 extends React.Component {
  render() {
    return (
      <div className="pimg2">
        <div className="ptext">
          <span className="border">{this.props.children}</span>
        </div>
      </div>
    )
  }
}

class BackImage3 extends React.Component {
  render() {
    return (
      <div className="pimg3">
        <div className="ptext">
          <span className="border">{this.props.children}</span>
        </div>
      </div>
    )
  }
}

class BackImage extends React.Component {
  render() {
    return (
      <div
        style={{
          position: 'relative',
          opacity: '0.7',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
          // backgroundImage: `url$({this.props.img})`
        }}
      >
        <div className="ptext">
          <span className="border">{this.props.children}</span>
        </div>
      </div>
    )
  }
}

class SectionLight extends React.Component {
  render() {
    return (
      <div className="section section-light">
        <div className="container">{this.props.children}</div>
        {/* <div className="container">{this.props.data}</div> */}
      </div>
    )
  }
}

class SectionDark extends React.Component {
  render() {
    return (
      <div className="section section-dark">
        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'back-image-1': BackImage1,
    'back-image-2': BackImage2,
    'back-image-3': BackImage3,
    'section-light': SectionLight,
    'section-dark': SectionDark,
    'back-image': BackImage
  }
}).Compiler

class Project extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div>
        <Helmet>
          <title>{post.frontmatter.title}</title>
        </Helmet>

        <div style={{ background: 'white' }}>{renderAst(post.htmlAst)}</div>
      </div>
    )
  }
}

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        tags
      }
    }
  }
`
