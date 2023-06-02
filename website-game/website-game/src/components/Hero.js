import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Slide1 from '../assets/slide1.jpg'
import Slide2 from '../assets/slide2.jpg'

const Hero = () =>{
    return(
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="HeroSweper">
                    <div className="text">
                        <div className="dates">
                            <p>USA</p>
                            <p>Jan 21, 2023</p>
                            <p>IMDB 9.0</p>
                        </div>
                        <h1>Ready <br /> For Player One</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ab neque animi magnam molestiae ea alias doloribus? Ullam aliquid voluptate quos dolor quod magni beatae, soluta nobis id pariatur ea?</p>
                    </div>
                    <div className="images">
                        <img src={Slide1} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="HeroSweper">
                    <div className="text">
                        <div className="dates">
                            <p>USA</p>
                            <p>Jan 21, 2023</p>
                            <p>IMDB 9.0</p>
                        </div>
                        <h1>Spiderman <br /> Comming Home</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ab neque animi magnam molestiae ea alias doloribus? Ullam aliquid voluptate quos dolor quod magni beatae, soluta nobis id pariatur ea?</p>
                    </div>
                    <div className="images">
                        <img src={Slide2} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero