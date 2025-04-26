import React from "react";
import eid from "../../assets/eid.jpg";
import clothes from "../../assets/clothes.jpg";
import pechhan from "../../assets/pehchhan.jpg";
import flower from "../../assets/flowerPot.jpg";
import home from "../../assets/home.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ChevronLeft as LeftIcon,
  ChevronRight as RightIcon,
} from "lucide-react";
import { ChevronRight } from "lucide-react";
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
];
const progroessData = [
  {
    title: "ENTERTAINING",
    descripiton: "Be My Guest: Style & Sentiment with Adil Ahmad",
  },
  {
    title: "Living",
    descripiton: "Summer Textiles: The Stories We Sleep In",
  },
  {
    title: "Living",
    descripiton: "The Story of our Home in Kolkata",
  },
  {
    title: "CRAFT",
    descripiton: "10 Years of Pehchaan: The Discerning Eye",
  },
];
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
    <div className="w-full relative">
      <Slider {...settings}>
        {bannerImages.map((image, index) => (
          <div key={index} className="h-full ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[580px] object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className=" mx-auto absolute bottom-18 left-1/2 transform -translate-x-1/2 z-10 ">
        <div className="flex items-stretch gap-9  justify-center ">
          {progroessData.map((item,index) => {
            return (
              <div
                key={index}
                className="w-[260px] flex flex-col  text-[#ffffff]"
              >
                <div className="loader bg-[#FFFFFF40] mb-4 border-2 rounded-l-md rounded-r-md">
                  <div className="bg-[#FFFFFF]"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-normal text-[#FFFFFF]">
                    {item.title}
                  </p>
                  <a
                    href="#"
                    className="font-[Lora] font-normal italic text-xl md:w-full text-[#FFFFFF]"
                  >
                    {item.descripiton}
                  </a>
                  <a
                    href="#"
                    className="group font-normal flex items-center gap-2 text-xs text-[#FFFFFF]"
                  >
                    <span className="border-b-[1px] border-b-transparent group-hover:border-b-white transition-all">
                      READ MORE
                    </span>
                    <ChevronRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Banner;
