import React from "react";
import goodEarth from "../../assets/discoverGoodEarth1.jpg";
import cover from "../../assets/discoverGoodEarth2.jpg";
import Dinning from "../../assets/discoverGoodEarth3.jpg";
import Food from "../../assets/featuredFood.jpg";
import lucknow from "../../assets/Lucknow.jpg";
import girl from "../../assets/girl.jpg";
import cutter from "../../assets/MateCutter.jpg";
import gift from "../../assets/girlGift.jpg";
import pots from "../../assets/pots.jpg";
import paint from "../../assets/paint.jpg";
import woman from "../../assets/woman.jpg";
import man from "../../assets/manPlaying.jpg";
import icecream from "../../assets/icecream.jpg";
import cup from "../../assets/cup.jpg";
import nature from "../../assets/nature.jpg";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";

import Banner from "./Banner";
const DiscoverGoodEarth = () => {
 
  const data = [
    {
      src: goodEarth,
      title: "Our Story",
      label: "ABOUT",
    },
    {
      src: cover,
      title: "Pehchaan",
      label: "DESIGN PHILOSOPHY",
    },
    {
      src: Dinning,
      title: "Our Boutiques",
      label: "GOOD EARTH EXPERIENCE",
    },
  ];
  const featuredCard = [
    {
      src: Food,
      budge: ["Culture"],
      title: "My Cup of Tea with Asaf Ali & Samina Zaidi",
      description:
        "Our series *My Cup of Tea* explores India’s tea traditions. First stop? Kashmir. We joined Asaf Ali and Samina Zaidi over a cup of kahwa, unpacking tales of a lifelong friendship, cherished traditions, and what makes their cup of tea so special.",
      date: "December 2024",
      height: 439,
    },
    {
      src: lucknow,
      budge: ["Community", "Living"],
      title: "In Lucknow We Meet: An Insider Guide into the City",
      description:
        "The best way to experience a city is through its people. Browse through personal recommendations from Lucknow’s food, history, and culture buffs, as they guide you through their hometown. ",
      date: "October 2024",
      height: 367,
    },
    {
      src: girl,
      budge: ["Community"],
      title: "Inside Out: Konkona Sen Sharma",
      description:
        "Vintage and mismatched, Konkona Sen Sharma’s workspaces at home show her deep-rooted connections to her family, her inspirations, and her hometown of Kolkata.",
      date: "June 2024",
      height: 399,
    },
    {
      src: cutter,
      budge: ["Craft", "Design"],
      title: "Building Blocks of Good Earth: Nishaat",
      description:
        "The serendipitous story of the creation of the block print design ‘Nishaat’, a Good Earth icon since 2012, is a testament to the enduring power of good design.",
      date: "July 2024",
      height: 203,
    },
    {
      src: gift,
      budge: ["Comunity", "Style"],
      title: "Art of Gifting with Sarah Todd",
      description:
        "This festive season, all roads lead to Good Earth. Discover the art of gifting with chef and restaurateur Sarah Todd.",
      date: "October 2024",
      height: 412,
    },
    {
      src: pots,
      budge: ["Craft"],
      title: "Material Culture",
      description:
        "Shaping an enduring language of design, while honouring the hallmarks of age-old materials and handcrafted traditions of ornamentation. ",
      date: "Auguest 2024",
      height: 339,
    },
    {
      src: paint,
      budge: ["Culture", "Design"],
      title: "Shabdmala",
      description:
        "A unique vocabulary of design, rooted in nature, Indian culture, and the Good Earth point of view.",
      date: "September 2021",
      height: 403,
    },
    {
      src: woman,
      budge: ["Community"],
      title: "Inside Out: Abha Narain Lambah",
      description:
        "Designed to be a cocoon, free from external stimulation or distraction, Abha’s study offers her the space to fully immerse in the unique landscapes and histories of her architectural sites.  ",
      date: "June 2024",
      height: 349,
    },
    {
      src: man,
      budge: ["Community", "Culture"],
      title: "Memory Keepers: Second Edition",
      description:
        "Collectors and custodians of our original designs, for whom each object is laced with emotion.  ",
      date: "April 2024",
      height: 439,
    },
    {
      src: icecream,
      budge: ["Entertaining", "Living"],
      title: "Many Ways To Love",
      description:
        "We design our products so they can be loved in many ways – creating a lasting presence in your hearts and homes.  ",
      date: "April 2021",
      height: 399,
    },
    {
      src: cup,
      budge: ["Craft", "Design"],
      title: "It Starts With A Dream…",
      description:
        "At the heart of Good Earth’s signature hand-decorated crockery is a fantasy — and the people who bring it to life. ",
      date: "June 2022",
      height: 476,
    },
    {
      src: nature,
      budge: ["Community"],
      title: "From the Garden: Unconventional Lessons in Leadership with Jessica Jayne",
      description:
        "Mindful consumption, sustainability and the well-being of the community who create her products are intertwined into the heart and soul of Pahadi Local. ",
      date: "July 2021",
      height: 322,
    },
  ];
  return (
    <>
      <div className=" mt-15 mx-auto max-w-[1200px]">
        <h3 className="font-[Lora] italic font-normal text-xl px-8 text-[#191919]">
          Discover Good Earth
        </h3>
        <div className="flex mx-aut o mt-4 px-8 gap-x-5 md:gap-x-6">
          {data.map((item, index) => {
            return (
              <a
                href="#"
                target="_blank"
                key={index}
                className="flex max-w-[350px] flex-col gap-y-2 bg-[#F9F8F5]"
              >
                <div>
                  <img src={item.src} className="max-h-[237px]" />
                </div>
                <div className="flex flex-col py-4 px-6">
                  <h4 className="font-[Montserrat] text-xs font-normal text-[#1C1C1C]">
                    {item.label}
                  </h4>
                  <div className="flex items-center justify-between">
                    <h3 className="font-[Lora] italic font-normal text-lg text-[#1C1C1C]">
                      {item.title}
                    </h3>
                    <ChevronRight />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="mt-8 mx-auto bg-[#F9F8F5]">
        <div className="mx-auto max-w-[1150px] py-6">
          <div className=" flex justify-between items-center">
            <h4 className="font-[Lora] italic text-xl text-[#191919]">Featured Stories</h4>
            <a className="flex item-center">
              <p className="text-xs border-b-[1px] border-b-transparent group-hover:border-b-[#aeaeae] text-[#191919]">VIEW ALL STORIES</p>
              <span>
                <ChevronRight />
              </span>
            </a>
          </div>
          <hr className="mt-10" />
          <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {featuredCard.map((item, index) => (
              <div
                key={index}
                className="bg-white break-inside-avoid rounded-md overflow-hidden"
              >
                <a href="#">
                  <img
                    src={item.src}
                    style={{
                      height: `${item.height}px`,
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="flex flex-col py-4 px-5 gap-3">
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(item.budge) ? (
                      item.budge.map((budgeItem, i) => (
                        <a
                          href="#"
                          key={i}
                          className="bg-[#E5E5E5] text-[#191919] leading-4 text-[9px] px-2 py-1 hover:bg-[#dce8e8] font-light hover:font-semibold transition-all"
                        >
                          {budgeItem}
                        </a>
                      ))
                    ) : (
                      <a
                        href="#"
                        className="bg-[#E5E5E5] text-[#191919] leading-4 text-[9px] px-2 py-1 hover:bg-[#dce8e8] font-light hover:font-semibold transition-all"
                      >
                        {item.budge}
                      </a>
                    )}
                  </div>
                  <a className="font-[Lora] italic font-normal text-lg text-[#191919]">
                    {item?.title}
                  </a>
                  <a className="font-light text-xs leading-5 text-[#191919]">
                    {item?.description}
                  </a>
                  <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center">
                      <span className="text-xs font-normal border-b-[1px] border-b-transparent group-hover:border-b-[#aeaeae] transition-all">
                        READ MORE
                      </span>
                      <ChevronRight />
                    </a>
                    <p className="text-[9px] font-light text-[#191919]">
                      {item?.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="mt-16"/>
        </div>
      </div>
    </>
  );
};
export default DiscoverGoodEarth;
