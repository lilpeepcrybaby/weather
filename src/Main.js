import _ from 'lodash';
import React from 'react';
import "bootstrap";
import $ from 'jquery';
import Swiper from 'swiper/swiper-bundle.js';
require('!style-loader!css-loader!swiper/swiper-bundle.css');
$(function () {
    console.log("hello,jquery");
})
export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    city: "Sydney",
                    img: "./img/Resources/refresh.png",
                    isDelete: true
                },
                {
                    city: "Brisbane",
                    img: "./img/Resources/thunderStorm.png",
                    temp: "25°",
                    temp1: "18°",
                    temp2: "29°",
                    weather: "Thundershowers",
                    isDelete: false
                },
                {
                    city: "Brisbane",
                    img: "./img/Resources/refresh.png",
                    isDelete: true
                },
                {
                    city: "Melbourne",
                    img: "./img/Resources/sunny.png",
                    temp: "14°",
                    temp1: "7°",
                    temp2: "19°",
                    weather: "Sunny",
                    isDelete: false
                },
                {
                    city: "Melbourne",
                    img: "./img/Resources/refresh.png",
                    isDelete: true
                },
                {
                    city: "Sydney",
                    img: "./img/Resources/rain.png",
                    temp: "19°",
                    temp1: "16°",
                    temp2: "22°",
                    weather: "Light Rain",
                    isDelete: false
                },
            ]
        }
        console.log(this.state);
    };
    componentDidMount() {
        let myNum;
        let mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true, // 循环模式选项
            autoplay: false,//自动播放

            //   spaceBetween: 10,
            //   slidesPerView: 1.75,
            //   centeredSlides: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: false,
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.weather-left',
                prevEl: '.weather-right',
            },
        });
    }
    render() {
        return (
            <div className="weather col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.data && this.state.data.map((value, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <h1 className="city">{value.city}</h1>
                                        <img src={value.img} />
                                        <h2 className="city temp">{value.temp}</h2>
                                        <span className="temp2">{value.temp1}</span>
                                        <span className="temp2">{value.temp2}</span>
                                        <h2 className="city">{value.weather}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* 分页器 */}
                    {/* <div className="swiper-pagination"></div> */}
                    {/* 导航按钮 */}
                    <div className="weather-left"></div>
                    <div className="weather-right"></div>
                </div>
            </div>
        )
    }
}