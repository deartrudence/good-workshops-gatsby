import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Logo from '../../assets/up-at-five-logo.png'

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<a href="http://www.upatfive.ca" target="_blank"><img src={Logo} alt=""/></a>
				<div className="info-wrapper">
					<div className="info">
						<ul>
							<li><Link to="/">home</Link></li>
							<li><a href="http://www.codeshopify.com" target="_blank">code shopify tutorials</a></li>
						</ul>
					</div>
					<div className="info">
						<ul>
							<li><a href="mailto:hello@upatfive.ca?Subject=Hello" target="_blank">Hello@upatfive.ca</a></li>
						</ul>
					</div>
					<div className="info">
						<ul>
							<li>@ upatfive, 2018</li>
						</ul>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer