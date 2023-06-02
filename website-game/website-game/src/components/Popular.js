import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Film1 from '../assets/film1.jpg'
import Film2 from '../assets/film2.jpg'
import Film3 from '../assets/film3.jpg'
import Film4 from '../assets/film4.jpg'



const Popular = () =>{
    return(
        <div className="Popular">
            <div className="title">
                <h1>Popular Movies</h1>
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
                        <img src={Film1} alt="" />
                        <div className="teks">
                            <h3>Black Miror</h3>
                            <h4>2023, Action</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={Film2} alt="" />
                        <div className="teks">
                            <h3>Black Miror</h3>
                            <h4>2023, Action</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={Film3} alt="" />
                        <div className="teks">
                            <h3>Black Miror</h3>
                            <h4>2023, Action</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <img src={Film4} alt="" />
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

export default Popular