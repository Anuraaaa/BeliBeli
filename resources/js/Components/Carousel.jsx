import React from 'react';
import slider1 from '/public/img/slider/slider1.webp';
import slider2 from '/public/img/slider/slider2.webp';
import slider3 from '/public/img/slider/slider3.webp';
import slider4 from '/public/img/slider/slider4.webp';

export default function Carousel() {
    return (
        <>
        <div className="carousel w-full h-64 rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={slider1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            <img src={slider2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src={slider3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            <img src={slider4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>
        </>
    )
}