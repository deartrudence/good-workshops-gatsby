import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Social from '../components/Social'
import { Parallax } from 'react-scroll-parallax' 


class CaseStudies extends React.Component {
	render() {
		const siteTitle = "get(this, 'props.data.site.siteMetadata.title')"
		const posts = get(this, 'props.data.allMarkdownRemark.edges')
		console.log('posts', posts)
		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
				<div className="flex-wrapper">
					<Parallax
						className="box-outer_case_horizontal_1"
						offsetYMax={"200px"}
						offsetYMin={"0px"}
						slowerScrollRate
						tag="figure"
					>
						<div className="blue-box_case_horizontal_1"></div>
					</Parallax>
					<Parallax
						className="box-outer_case_vertical_1"
						offsetYMax={"200px"}
						offsetYMin={"0px"}
						slowerScrollRate
						tag="figure"
					>
						<div className="blue-box_case_vertical_1"></div>
					</Parallax>
				</div>
				<div className="wrapper-grey">
					<h1 className="up-five-title">Up At Five</h1>
					<h2 className="primary-title">case studies</h2>
					{posts.map(post => {
						let hero = post.node.frontmatter.hero
						if (post.node.path !== '/404/') {
							const title = get(post, 'node.frontmatter.title') || post.node.path
							return (
								<div className="case-study-card" key={post.node.frontmatter.path}>
									<Link to={post.node.frontmatter.path} >
										<img src={post.node.frontmatter.hero.childImageSharp.responsiveSizes.src} alt=""/>
										<h3>
												{post.node.frontmatter.title}
										</h3>
										<p>{post.node.frontmatter.client}</p>
									</Link>
									{/* <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /> */}
								</div>
							)
						}
					})}
					<Social/>
				</div>
			</div>
		)
	}
}

CaseStudies.propTypes = {
	route: React.PropTypes.object,
}


export default CaseStudies

export const pageQuery = graphql`
  query StudyQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
						title
						client
						hero {
							childImageSharp {
								responsiveSizes(maxWidth: 400) {
									src
									srcSet
									sizes
								}
							}
						}
          }
        }
      }
    }
  }
`

