import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import menu from '../../assets/Menu.svg'
import logo from '../../assets/up-at-five-logo.png'

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.state = {
			menu_classes: "hidden"
		}
	}


	openMenu = () => {
		console.log('open menu')
		this.setState({ menu_classes: "" })
	}
	closeMenu = () => {
		console.log('close menu')
		this.setState({ menu_classes: "hidden" })
	}

	render() {
		return (
			<div className=" header">
				<div className="">

					<svg onClick={this.openMenu} width="33px" height="25px" viewBox="0 0 33 25" version="1.1" xmlns="http://www.w3.org/2000/svg" >
						<title>Menu</title>
							<desc>Created with Sketch.</desc>
							<defs></defs>
							<g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<g id="About-Us" transform="translate(-54.000000, -51.000000)" fill="#1E46F4">
									<g id="Menu" transform="translate(54.000000, 46.000000)">
										<g transform="translate(0.000000, 5.000000)" id="Rectangle-2">
											<rect x="0" y="0" width="33" height="3.94736842"></rect>
											<rect className="line1" x="0" y="10.5263158" width="26.4" height="3.94736842"></rect>
											<rect className="line2"  x="0" y="21.0526316" width="19.8" height="3.94736842"></rect>
										</g>
									</g>
								</g>
							</g>
						</svg>	
					<div className={`${this.state.menu_classes} menu `}>
						<p className="close" onClick={this.closeMenu}>X</p>
						<ul>
							<li><Link onClick={this.closeMenu} to="/">home</Link></li>
							<li><a onClick={this.closeMenu} href="http://www.codeshopify.com/" target="_blank">code shopify tutorials</a></li>
							<li><Link onClick={this.closeMenu} to="#contact-area">contact us</Link></li>
						</ul>
						<a href="http://www.upatfive.ca" target="_blank"><img className="menu-logo" src={logo} alt="" /></a>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
