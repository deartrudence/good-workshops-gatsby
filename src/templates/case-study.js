import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Social from '../components/Social'
import { Parallax } from 'react-scroll-parallax'


class CaseStudyTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className="flex-wrapper">
          <Parallax
            className="box-outer_case_horizontal_1"
            offsetYMax={"490px"}
            offsetYMin={"0px"}
            slowerScrollRate
            tag="figure"
          >
            <div className="blue-box_case_horizontal_1"></div>
          </Parallax>
          <Parallax
            className="box-outer_case_vertical_1"
            offsetYMax={"0px"}
            offsetYMin={"-200px"}
            slowerScrollRate
            tag="figure"
          >
            <div className="blue-box_case_vertical_1"></div>
          </Parallax>
        </div>
        <div className="wrapper-grey">
          <a href="/"><h1 className="up-five-title">Good Workshops</h1></a>
          <a href={post.frontmatter.site} target="_blank"><h2 className="primary-title case-study">{post.frontmatter.client}</h2></a>
          <h2 className="case-study-title">{post.frontmatter.title}</h2>
          {/* <p>
            {post.frontmatter.date}
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Social />
        </div>
      </div>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query CaseStudyByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        client
        date(formatString: "MMMM DD, YYYY")
        site
      }
    }
  }
`
