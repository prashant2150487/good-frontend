import React from "react";
import eid from "../../assets/eid.jpg"
import clothes from "../../assets/clothes.jpg";
import pechhan from "../../assets/pehchhan.jpg";
import flower from "../../assets/flowerPot.jpg";
import home from "../../assets/home.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft as LeftIcon, ChevronRight as RightIcon } from 'lucide-react'; 
 const bannerImages = [
  {
    src: eid,
    alt: "Eid",
  },
  {
    src: clothes,
    alt: "Clothes",
  },
  {
    src: flower,
    alt: "Flower Pot",
  },
  {
    src: home,
    alt: "Home",
  },
  {
    src: pechhan,
    alt: "Pechhan",
  },
 ]
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  p-2 rounded-full shadow"
    onClick={onClick}
  >
    <LeftIcon size={54} color="white" />
  </div>
);
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  p-2 rounded-full shadow"
    onClick={onClick}
  >
    <RightIcon size={54} color="white" />
  </div>
);
const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="w-full ">
      <Slider {...settings}>
        {bannerImages.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[530px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Banner;
