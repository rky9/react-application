import React, { Component, useState } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import '../../../node_modules/slick-carousel/slick/slick.css'

export default class AppSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:true,
      autoplaySpeed:3000,
      autoplay:true
    };
    return (
      <div style={{width:'500px', margineLeft:'auto'}}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
     
      </div>
    );
  }
}
