import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Film5 from '../assets/film5.jpg'
import Film6 from '../assets/film6.jpg'
import Film7 from '../assets/film7.jpg'
import Film8 from '../assets/film8.jpg'




const Release = () =>{
    return(
        <div className="Popular">
        <div className="title">
            <h1>New Release</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div className="contentPopular">
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="card">
                    <img src={Film5} alt="" />
                    <div className="teks">
                        <h3>Black Miror</h3>
                        <h4>2023, Action</h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <img src={Film6} alt="" />
                    <div className="teks">
                        <h3>Black Miror</h3>
                        <h4>2023, Action</h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <img src={Film7} alt="" />
                    <div className="teks">
                        <h3>Black Miror</h3>
                        <h4>2023, Action</h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <img src={Film8} alt="" />
                    <div className="teks">
                        <h3>Black Miror</h3>
                        <h4>2023, Action</h4>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
    )
}

export default Release