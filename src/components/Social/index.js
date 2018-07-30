import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome';
// import './css/font-awesome.css'
import './index.css'

class Header extends React.Component {
	render() {
		return (
			<div className="social-bar">
				<a href="https://github.com/upatfive" target="_blank">
					<FontAwesome
						name='github'
						/>
				</a>
				<a href="https://twitter.com/up_at_five" target="_blank">
					<FontAwesome
						name='twitter'
					/>
				</a>
				<a href="https://www.meetup.com/Good-Workshops-Toronto/" target="_blank">
					<FontAwesome
						name='meetup'
					/>
				</a>
			</div>
		)
	}
}

export default Header