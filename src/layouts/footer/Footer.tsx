import React from "react";
import logoFooter from "../../assets/img/logo/logo-footer.svg";
import iconTwitter from "../../assets/img/svg/icon-twitter.svg";
import iconBatman from "../../assets/img/svg/icon-batman.svg";
import iconIntagam from "../../assets/img/svg/icon-intagram.svg";
import iconPlay from "../../assets/img/svg/icon-play.svg";
import iconFacebook from "../../assets/img/svg/icon-facebook.svg";
import iconM from "../../assets/img/svg/icon-m.svg";
import iconTikTok from "../../assets/img/svg/icon-tiktok.svg";
import iconInternet from "../../assets/img/svg/icon-internet.svg";
import iconPlane from "../../assets/img/svg/icon-plane.svg";
import iconPlaneNotBorder from "../../assets/img/svg/icon-plane-not-border.svg";

import iconTwitterColor from "../../assets/img/svg/icon-twitter-color.svg";
import iconBatmanColor from "../../assets/img/svg/icon-batman-color.svg";
import iconFacebookColor from "../../assets/img/svg/icon-facebook-color.svg";

import iconYoutubeColor from "../../assets/img/svg/icon-youtube-color.svg";
import iconIntagamColor from "../../assets/img/svg/icon-intagam-color.svg";
import iconMColor from "../../assets/img/svg/icon-m-color.svg";

import iconTikTokColor from "../../assets/img/svg/icon-tiktok-color.svg";
import iconTelegamColor from "../../assets/img/svg/icon-telegram-color.svg";
import iconPlayColor from "../../assets/img/svg/icon-play-color.svg";

import "./footer.scss";
import Strikethrough from "../../components/strikethrough/Strikethrough";

const Footer = () => {
  const renderFooterPC = () => (
    <div className="hidden md:hidden lg:block ">
      <Strikethrough />
      <div className=" px-4 pb-11 pt-16  flex-row flex relative footer-container">
        <div className="max-w-sm  md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3">
          <div className="text-[22px] font-extrabold font-goldmanBold title-footer">
            Contact Us
          </div>
          <img src={logoFooter} alt="" className=" mb-7 mt-4" />
          <div className="flex items-center">
            <span className="text-sm font-inter mr-1 text-gray-500">Investment:</span>
            <span
              className="text-base text-white font-inter cursor-pointer hover:opacity-80"
              onClick={() => window.open("mailto:hello@gemuni.io")}
            >
              hello@gemuni.io
            </span>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm font-inter mr-1 text-gray-500">
              Marketing & Support:
            </span>
            <span
              className="text-base text-white font-inter cursor-pointer hover:opacity-80"
              onClick={() => window.open("mailto:support@gemuni.io")}
            >
              support@gemuni.io
            </span>
          </div>
          <div className="text-sm mt-8 font-inter">
            Copyright © 2022 GemUni.
          </div>
          <div className="text-sm mt-1 font-inter">All rights reserved.</div>
        </div>
        <div className="max-w-sm mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/5">
          <div className="text-[22px] font-extrabold mb-10 font-goldmanBold title-footer">
            Explore More
          </div>
          <div className="text-base text-white font-inter cursor-pointer hover:opacity-80">
            Home
          </div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">
            Play Games
          </div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">
            NFT Marketplace
          </div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">
            Whitepaper
          </div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">
            Pitch Deck
          </div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">
            News
          </div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">
            FAQs
          </div>
        </div>
        <div className="max-w-sm mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/4">
          <div className="text-[22px] font-extrabold mb-10 font-goldmanBold title-footer">
            Connect With Us
          </div>
          <div className="flex mb-8">
            <img
              src={iconTwitter}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconBatman}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconIntagam}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconPlay}
              alt=""
              className="cursor-pointer hover:opacity-80"
            />
          </div>
          <div className="flex mb-8">
            <img
              src={iconFacebook}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconM}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconTikTok}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconInternet}
              alt=""
              className="cursor-pointer hover:opacity-80"
            />
          </div>
          <div className="flex">
            <div className="flex items-center cursor-pointer hover:opacity-80">
              <img src={iconPlane} alt="" className="mr-2" />
              <div className="text-base text-white mr-4 font-inter">
                Official
              </div>
            </div>
            <div className="flex items-center cursor-pointer hover:opacity-80">
              <img src={iconPlane} alt="" className="mr-2" />
              <div className="text-base text-white font-inter">Global</div>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/4">
          <div className="text-[22px] font-extrabold mb-10 font-goldmanBold title-footer">
            Join Newsletter
          </div>
          <div className="text-base text-white mb-10 font-inter">
            Subscribe to get more latest news and special offers from GemUni
          </div>
          <div className="relative">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="given-name"
              className="w-full h-14 pl-4 input-email rounded-3xl"
              placeholder="Enter your email"
            />
            <img
              src={iconPlaneNotBorder}
              alt=""
              className="absolute right-4 top-3"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooterTablet = () => (
    <div className="hidden lg:hidden md:block">
      <Strikethrough />
      <div className="px-4 pb-11 pt-6  flex-row flex relative footer-container">
        <div className="max-w-sm  w-1/4">
          <img src={logoFooter} alt="" className=" mb-4" />
          <div className="text-[18px] font-semibold font-goldmanBold title-footer-tablet">
            Contact Us
          </div>
          <div className="flex mt-4">
            <span className="text-white font-inter mr-1">Email:</span>
            <span
              className="text-base text-white font-inter cursor-pointer hover:opacity-80"
              onClick={() => window.open("mailto:hello@gemuni.io")}
            >
              hello@gemuni.io
            </span>
          </div>
        </div>
        <div className="max-w-sm mx-auto pt-5 md:max-w-full md:mx-0 w-1/4">
          <div className="text-[18px] font-semibold mb-4 font-goldmanBold title-footer-tablet">
            Explore More
          </div>
          <div className="text-base text-white font-inter cursor-pointer hover:opacity-80">
            Home
          </div>
          <div className="text-base text-white mt-3 font-inter cursor-pointer hover:opacity-80">
            Play Games
          </div>
          <div className="text-base text-white mt-3 font-inter cursor-pointer hover:opacity-80">
            NFT Marketplace
          </div>
          <div className="text-base text-white mt-3 font-inter cursor-pointer hover:opacity-80">
            Whitepaper
          </div>
          <div className="text-base text-white mt-3 font-inter cursor-pointer hover:opacity-80">
            Pitch Deck
          </div>
          <div className="text-base text-white mt-3 font-inter cursor-pointer hover:opacity-80">
            FAQs
          </div>
        </div>
        <div className="max-w-sm mx-auto pt-5 w-1/2">
          <div className="text-[18px] font-semibold mb-4 font-goldmanBold title-footer-tablet">
            Community & Social Channels
          </div>
          <div className="flex mb-4">
            <img
              src={iconTwitterColor}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconBatmanColor}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconFacebookColor}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconYoutubeColor}
              alt=""
              className="cursor-pointer hover:opacity-80"
            />
            <img
              src={iconIntagamColor}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconMColor}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconTikTokColor}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
          </div>
          <div className="flex mb-4 items-center">
            <img
              src={iconTelegamColor}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <div className="text-[17px] font-semibold text-white underline underline-offset-1 cursor-pointer">
              Official Channel, Global Group
            </div>
          </div>
          <div className="text-[18px] font-semibold font-goldmanBold title-footer-tablet">
            Join Newsletter
          </div>
          <div
            className="text-[10px] font-semibold font-goldmanBold title-footer-tablet"
            style={{ color: "#008CF0" }}
          >
            Subscribe to get more latest news and special offers from GemUni.s
          </div>
          <div className="relative">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="given-name"
              className="w-full h-14 pl-4 input-email rounded-xl mt-4"
              placeholder="Enter your email"
              style={{ background: "#1F2026", border: "1.5px solid #31333A" }}
            />
            <img
              src={iconPlayColor}
              alt=""
              className="absolute right-2 top-7"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooterMobile = () => (
    <div className="md:hidden sm:block">
      <Strikethrough />
      <div className="text-center justify-center px-4 pb-11 pt-8  flex-row flex relative footer-container">
        <div className="max-w-sm  md:max-w-full">
          <img src={logoFooter} alt="" className="m-auto" />
          <div className="text-[16px] text-white font-semibold mt-7">Team</div>
          <div className="text-[14px] font-medium link-footer-mobile mt-5 cursor-pointer hover:opacity-80">
            Project Landing Page
          </div>
          <div className="text-[14px] font-medium link-footer-mobile mt-4 cursor-pointer hover:opacity-80">
            Contact Us
          </div>
          <div className="text-[16px] text-white font-semibold mt-7">
            Support
          </div>
          <div className="text-[14px] font-medium link-footer-mobile mt-5 cursor-pointer">
            FAQ
          </div>
          <div className="text-[14px] font-medium link-footer-mobile mt-4 cursor-pointer hover:opacity-80">
            Terms & Conditions
          </div>
          <div className="text-[14px] font-medium link-footer-mobile mt-4 cursor-pointer hover:opacity-80">
            Privacy
          </div>
          <div className="flex mt-10">
            <img
              src={iconTwitter}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconBatman}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={iconIntagam}
              alt=""
              className="mr-4 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto">
      {renderFooterPC()}
      {renderFooterTablet()}
      {renderFooterMobile()}
    </div>
  );
};

export default Footer;
