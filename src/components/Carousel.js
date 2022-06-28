import "../styles/styles.css";
import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/cookie1.jpg";
import img2 from "../images/cookie2.jpg";
import img3 from "../images/cookie3.jpg";
import img4 from "../images/cookie4.jpg";
import img5 from "../images/cookie5.jpg";
import img6 from "../images/cookie6.jpg";
import img7 from "../images/cookie7.jpg";
import img8 from "../images/cookie8.jpg";
import img9 from "../images/cookie9.jpg";
import img10 from "../images/cookie10.jpg";
import img11 from "../images/cookie11.jpg";
import img12 from "../images/cookie12.jpg";
import img13 from "../images/cookie13.jpg";
import img14 from "../images/cookie14.jpg";

const images = [
  {
    id: "1",
    name: "Cookie 1",
    alt: "Cookie",
    url: img1,
  },
  {
    id: "2",
    name: "Cookie 2",
    alt: "",
    url: img2,
  },
  {
    id: "3",
    name: "Cookie 3",
    alt: "",
    url: img3,
  },
  {
    id: "4",
    name: "Cookie 4",
    alt: "",
    url: img4,
  },
  {
    id: "5",
    name: "Cookie 5",
    alt: "",
    url: img5,
  },
  {
    id: "6",
    name: "Cookie 6",
    alt: "",
    url: img6,
  },
  {
    id: "7",
    name: "Cookie 7",
    alt: "",
    url: img7,
  },
  {
    id: "8",
    name: "Cookie 8",
    alt: "",
    url: img8,
  },
  {
    id: "9",
    name: "Cookie 9",
    alt: "",
    url: img9,
  },
  {
    id: "10",
    name: "Cookie 10",
    alt: "",
    url: img10,
  },
  {
    id: "11",
    name: "Cookie 11",
    alt: "",
    url: img11,
  },
  {
    id: "12",
    name: "Cookie 12",
    alt: "",
    url: img12,
  },
  {
    id: "13",
    name: "Cookie 13",
    alt: "",
    url: img13,
  },
  {
    id: "14",
    name: "Cookie 14",
    alt: "",
    url: img14,
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 2,
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            swipeToSlide: true,
            slidesToShow: 2,
            dots: true,
            infinite: true,
            speed: 1500,
            centerPadding: "60px",
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="wrapper" key="{image.id}">
              <img
                className="sliderImg img-fluid rounded"
                src={image.url}
                alt={image.alt}
              />
            </div>
          );
        })}
      </Slider>
    );
  }
}
