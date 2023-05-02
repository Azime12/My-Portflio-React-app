import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'  
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
const Works = () => {
  return (
	<div className="works">
		<div className="awesome">
	<span>Works For All These</span>
	<span>Brands And Clients</span>
	<span>niti  ipsa eos nemo impedit nam la<br/> olore perferendis saepe quis eius eos maiores <br/>
		itaque sunt omni s consequuntur provident <br/>necessitatibus aliquid?<br/> Eveniet ad placeat cumque!</span>


<button className="button s-button">Hire Me</button>

<div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
</div>
{/* ritht side of the work */}
<div className="w-right">
	<div className="w-mainCircle">
		<div className="w-secCircle">
			<img src={Upwork} alt="" />
		</div>
		<div className="w-secCircle">
			<img src={Fiverr} alt="" />
		</div>
		<div className="w-secCircle">
			<img src={Amazon} alt="" />
		</div>
		<div className="w-secCircle">
			<img src={Shopify} alt="" />
		</div>
		<div className="w-secCircle">
			<img src={Facebook} alt="" />
		</div>
	</div>
	{/* background circle */}
	<div className="w-backCircle blueCircle">

	</div>
	<div className="w-backCircle yellowCircle">
		
	</div>

</div>
	</div>
  ) 
}

export default Works
