import React from 'react'
import './portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from  '../../img/musicapp.png'
const Porfolio = () => {
  return (
	<div className="portfolio">
		<span>
			Recent Project
		</span>
		<span>Porrtfolio</span>
		<Swiper
		spaceBetween={30}
		slidesPerView={3}
		grapCursor={true}
		className='portfolio-slide'
		>
			<SwiperSlide>
				<img src={Sidebar} alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={Ecommerce} alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={MusicApp} alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={HOC} alt="" />
			</SwiperSlide>
		</Swiper>

	</div>
  )
}

export default Porfolio
