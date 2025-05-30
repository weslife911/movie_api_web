import React from 'react'

function Header() {
  return (
    <header className="site-header">
				<div className="container">
					<a href="index.html" id="branding">
						<img src="images/logo.png" alt="" className="logo"/>
						<div className="logo-copy">
							<h1 className="site-title">Company Name</h1>
							<small className="site-description">Tagline goes here</small>
						</div>
					</a>

					<div className="main-navigation">
						<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
						<ul className="menu">
							<li className="menu-item"><a href="index.html">Home</a></li>
							<li className="menu-item"><a href="about.html">About</a></li>
						</ul>

						<form action="#" className="search-form">
							<input type="text" placeholder="Search..."/>
							<button><i className="fa fa-search"></i></button>
						</form>
					</div>

					<div className="mobile-navigation"></div>
				</div>
			</header>
  )
}

export default Header
