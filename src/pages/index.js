import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Parallax } from 'react-scroll-parallax'
import Social from '../components/Social'
import ClientLogo from '../components/ClientLogo'
import Helmet from 'react-helmet'
import './index.css'
import borrowell from '../assets/logos/Borrowell-Logo.png'
import wwf from '../assets/logos/wwf_logo.svg'
import msf from '../assets/logos/msf_logo.png'
import diageo from '../assets/logos/diageo_logo.svg'
import grayes from '../assets/logos/grayes_logo.png'
import td from '../assets/logos/td_bank_logo.svg'
import clc from '../assets/logos/CLC-Logo.svg'
import shopify from '../assets/logos/shopify.svg'
import hackeryou from '../assets/logos/Stacked-HYCollege.png'
import gw_home_1 from '../assets/gw_1.png'
import gw_home_2 from '../assets/gw_2.png'
import gw_home_3 from '../assets/gw_3.png'
import gw_home_4 from '../assets/gw_4.png'


class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    console.log('posts', posts)
    const clients = [
      { name: "borrowell", logo: borrowell, link:"https://www.borrowell.com"}, 
      { name: "wwf", logo: wwf, link:"http://www.wwf.ca/"},
      { name: "msf", logo: msf, link:"http://www.msf.ca/" },
      { name: "diageo", logo: diageo, link:"https://www.diageo.com/" },
      { name: "grayes", logo: grayes, link:"https://grayes.com/"},
      { name: "td bank", logo: td, link:"https://www.td.com/" },
      { name: "Canada Learning Code", logo: clc, link:"https://www.canadalearningcode.ca/" },
      { name: "Shopify", logo: shopify, link:"https://www.shopify.com" },
      { name: "Hackeryou", logo: hackeryou, link:"http://hackeryou.com/" },

    ]
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <div className="wrapper-outer">
          <div className="flex-wrapper">
            <div className="left-side">
              <Parallax
                className="image-outer_home_1"
                offsetYMax={25}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_1" src={gw_home_3} alt=""/>
              </Parallax>
              <Parallax
                className="box1-outer"
                offsetYMax={"300px"}
                offsetYMin={"490px"}
                slowerScrollRate
                tag="figure"
              >
                <div className="blue-box1"></div>
              </Parallax>
              <Parallax
                className="image-outer_home_3"
                offsetYMax={90}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_3" src={gw_home_1} alt="" />
              </Parallax>
            </div>
            <div className="right-side">
              <Parallax
                className="image-outer_home_2"
                offsetYMax={0}
                offsetYMin={-50}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_2" src={gw_home_2} alt=""/>

              </Parallax>
              <Parallax
                className="image-outer_home_4"
                offsetYMax={"-100px"}
                offsetYMin={"0px"}
                slowerScrollRate
                tag="figure"
              >
                <img className="image_home_4" src={gw_home_4} alt=""/>

              </Parallax>
              <Parallax
                className="box2-outer"
                offsetYMax={"300"}
                offsetYMin={"0"}
                slowerScrollRate
                tag="figure"
              >
                <div className="blue-box2"></div>
              </Parallax>
              
            </div>
          </div>
          <div className="wrapper-grey">
            <a href="/"><h1 className="up-five-title">Good Workshops</h1></a>
            <p className="up-five-subtitle main-page">Good workshops is focused on delivering one thing...<br/>good workshops.</p>
            <div className="methodology">
              <h3 className="secondary-title">About</h3>
              <p>Building out your site or application starts with a conversation. We work with you to help distill your ideas and create a clear project vision. We talk about how you want to enter the market and potential directions for growth. We evaluate the continued engagement with and management of your platform and determine the best approach and technologies.</p>
            </div>
            <video width="100%" height="unset" controls>
              <source src="https://s3.amazonaws.com/upatfive/shopify_app_workshop_highlight_reel.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <h2 className="primary-title">Upcoming Workshops</h2>
            {posts.filter(post => Date.parse(post.node.frontmatter.date) > Date.now()).map(post => {
              let hero = post.node.frontmatter.hero
              if (post.node.path !== '/404/') {
                const title = get(post, 'node.frontmatter.title') || post.node.path
                return (
                  <div className="case-study-card" key={post.node.frontmatter.path}>
                    <Link to={post.node.frontmatter.path} >
                      <img src={post.node.frontmatter.hero.childImageSharp.responsiveSizes.src} alt="" />
                      <h3>
                        {post.node.frontmatter.title}
                      </h3>
                      <p>{post.node.frontmatter.client}</p>
                      <p>{post.node.frontmatter.date}</p>
                    </Link>
                    {/* <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} /> */}
                  </div>
                )
              }
            })}
            <Link className="button past-events-button" to="/past-events">past events</Link>
              <Social />
          </div>
        </div>
      </div>
    )
  }
}

SiteIndex.propTypes = {
  route: React.PropTypes.object,
}

export default SiteIndex

export const pageQuery = graphql`
  query WorkshopQuery {
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

