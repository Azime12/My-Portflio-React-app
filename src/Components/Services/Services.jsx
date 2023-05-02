import React from 'react'
import './Services.css'
import Heart from '../../img/heartemoji.png'
import Glass from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './JavascripBooke.pdf'

const Services = () => {
  return (
	<div className="services">
<div className="awesome">
	<span>My Awesome</span>
	<span>Services</span>
	<span>niti  ipsa eos nemo impedit nam la<br/> olore perferendis saepe quis eius eos maiores 
		itaque sunt omnis consequuntur provident <br/>necessitatibus aliquid? Eveniet ad placeat cumque!</span>

<a href={Resume} download>
<button className="button s-button">Download CV</button>
</a>
<div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
</div>
<div className="cards" ><div style={{left:'14rem'}} >
	<Card
	emoji={Heart}
	heading={'Design'}
	detail={'figma sketch,photoshop , adobe,adobe ex'}
	/>
</div>
<div style={{top:'12rem', left:'-4rem'}} >
	<Card
	emoji={Glass}
	heading={'Developer'}
	detail={'Html Css,PHP , BootStrap,SQL  NODEjs REACTJs EXPRESSjs'}
	/>
</div>
<div style={{top:'19rem',left:'12rem'}} >
	<Card
	emoji={Humble}
	heading={'UX/UI'}
	detail={'Lorem ipsum dolor , adipisicing elit. Cum, optio'}
	
	/>
	
</div>
<div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

</div>


	</div>
  )
}

export default Services
