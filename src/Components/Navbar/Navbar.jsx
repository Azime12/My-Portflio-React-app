import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
	<div className='n-wrapper'>
	  <div className="n-left">
		<div className="n-name">Azimeraw</div>
		<span className=''>toggle</span>
	  </div>
	  <div className="n-right">
		<div className="n-list">
			<ul>
				<li>Home</li>
				<li>Services</li>
				<li>Experiences</li>
				<li>Testimonials</li>

			</ul>
		</div>
		<button className='button n-button'>Contact Us</button>
	  </div>
	</div>
  )
}

export default Navbar
