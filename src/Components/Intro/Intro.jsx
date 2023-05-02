import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import thumhup from '../../img/thumbup.png'
 import Crown from '../../img/crown.png'
 import GlassesImoji from '../../img/glassesimoji.png'
import FloatingDiv from './FloatingDiv';
const Intro = () => {
  return (
	<div className="intro">

		<div className="i-left">
		<div className="i-name">
		<span>Hy! I Am</span>
			<span>Azimeraw Taddese</span>
			<span>Full Stack Developer
				 with high level of 
				 experiance in web
				  designing and 
				  develelopemnt 
				  ,producing and developing ,producing the quality work</span>
		</div>
		<button className=" button i-button">Hire me</button>
		<div className="i-icons">
			<img src={Github} alt="" />
			<img src={Instagram} alt="" />
			<img src={LinkedIn} al t="" />
		</div>
		</div>
	   <div className="i-right"> 
	   
	   <img src={Vector1} alt="" />
	   <img src={Vector2} alt="" />
	   <img src={Boy} alt="" />
	   <img src={GlassesImoji} alt="" />
	   <div style={{top:'-4%',left:'68%'}}>
		<FloatingDiv image={Crown} txt1=' FullStack web' txt2='developer'/>
	   </div>
	   <div style={{top:'20rem',left:'0rem'}}>
		<FloatingDiv image={thumhup} txt1=' best Design' txt2=' with good expriance'/>
	   </div>
	   <div className="blur" style={{background:'rgb(238,210,255)'}}></div>
	   <div className="blur" style={{
		background:'#C1F5FF',
		top:'17rem',
		width:'23rem',
		height:'11rem',
		left:'-9rem'


	}}></div>
	   </div>
	</div>
  )
}

export default Intro
