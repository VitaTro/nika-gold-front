import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SliderContainer } from "./SliderWelcome.styled";
import Discount from "./discount.png";
import Hours from "./hours_of_work.png";
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  fade: true,
};
export const SliderWelcome = () => {
  return (
    <SliderContainer>
      <Slider {...sliderSettings}>
        <div>
          <img
            src={Discount}
            alt="discount"
            style={{ width: " 420px", height: "240px" }}
          />
        </div>
        <div>
          <img
            src={Hours}
            alt="hours of work"
            style={{ width: " 420px", height: "240px" }}
          />
        </div>
      </Slider>
    </SliderContainer>
  );
};
