import "../styles/styles.css";
import React, { useState } from "react";
import Slider from "react-slick";
import bananasplit from "../images/banana_split.jpg";
import croll from "../images/cinnamon_roll.jpg";
import cbrownie from "../images/cosmic_brownie.jpg";
import mcc from "../images/mint_chocolate_chip_whole.jpg";
import nutellapeanut from "../images/nutella_peanutbutter.jpg";
import smores from "../images/s'mores.jpg";
import twix from "../images/twix.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";

const images = [
  {
    id: "1",
    name: "S'mores",
    alt: "S'Mores Cookie",
    url: smores,
    description: "Fan favorite! Made with marshmallows & chocolate 😋",
  },
  {
    id: "2",
    name: "Cinnamon Roll",
    alt: "Cinnamon Roll Cookie",
    url: croll,
    description: "Made with vanilla icing & a cinnamon roll cookie base",
  },
  {
    id: "3",
    name: "Cosmic Brownie",
    alt: "Cosmic Brownie Cookie",
    url: cbrownie,
    description: "Made with chocolate fudge & sprinkles",
  },
  {
    id: "4",
    name: "Mint Chocolate Chip",
    alt: "Mint Chocolate Chip Cookie",
    url: mcc,
    description: "Made with chocolate chunks & a mint cookie base",
  },
  {
    id: "5",
    name: "Nutella Peanut Butter",
    alt: "Nutella Peanut Butter Cookie",
    url: nutellapeanut,
    description: "Made with nutella & peanut butter",
  },
  {
    id: "6",
    name: "Banana Split",
    alt: "Banana Split Cookie",
    url: bananasplit,
    description:
      "Made with chocolate chips, sprinkles & a delicious banana cookie base",
  },
  {
    id: "7",
    name: "Twix",
    alt: "Twix Cookie",
    url: twix,
    description: "Made with caramel & twix",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  pt: 3,
  px: 4,
  pb: 3,
};

//export default class MenuCarousel extends Component
export default function MenuCarousel() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleOpen = (event) => {
    setOpen(true);
    setName(event.target.name);
    setDescription(event.target.attributes.description.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
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
    <>
      <h1 className="pb-5 px-3">
        Click any image to see what cookie or brownie it is! 🍪
      </h1>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="wrapper" key="{image.id}">
              <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                disableScrollLock={true}
              >
                <Box
                  className="d-flex flex-column"
                  sx={{ ...style, width: 300 }}
                >
                  <h2 id="child-modal-title">{name}</h2>
                  <p id="child-modal-description">{description}</p>
                  <Button variant="outline-danger" onClick={handleClose}>
                    Close
                  </Button>
                </Box>
              </Modal>
              <img
                style={{ width: "60%" }}
                className="sliderImg img-fluid rounded"
                src={image.url}
                alt={image.alt}
                name={image.name}
                description={image.description}
                onClick={handleOpen}
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}
