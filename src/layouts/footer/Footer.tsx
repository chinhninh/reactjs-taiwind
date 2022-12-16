import React from "react";
import logoFooter from "../../assets/img/logo-footer.svg";
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
import "./footer.scss";
import Strikethrough from "../../components/strikethrough/Strikethrough";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <Strikethrough />
      <div className=" px-4 pb-11 pt-16  flex-row flex relative footer-container">
        <div className="max-w-sm  md:max-w-full md:mx-0 md:w-1/2 lg:w-1/3">
          <div className="text-[22px] font-extrabold font-goldmanBold title-footer">Contact Us</div>
          <img src={logoFooter} alt="" className=" mb-7 mt-4" />
          <div className="flex items-center">
            <span className="text-sm font-inter mr-1">Investment:</span>
            <span
              className="text-base text-white font-inter cursor-pointer hover:opacity-80"
              onClick={() => window.open("mailto:hello@gemuni.io")}
            >
              hello@gemuni.io
            </span>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm font-inter mr-1">Marketing & Support:</span>
            <span
              className="text-base text-white font-inter cursor-pointer hover:opacity-80"
              onClick={() => window.open("mailto:support@gemuni.io")}
            >
              support@gemuni.io
            </span>
          </div>
          <div className="text-sm mt-8 font-inter">Copyright © 2022 GemUni.</div>
          <div className="text-sm mt-1 font-inter">All rights reserved.</div>
        </div>
        <div className="max-w-sm mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/5">
          <div className="text-[22px] font-extrabold mb-10 font-goldmanBold title-footer">Explore More</div>
          <div className="text-base text-white font-inter cursor-pointer hover:opacity-80">Home</div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">Play Games</div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">NFT Marketplace</div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">Whitepaper</div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">Pitch Deck</div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">News</div>
          <div className="text-base text-white mt-4 font-inter cursor-pointer hover:opacity-80">FAQs</div>
        </div>
        <div className="max-w-sm mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/4">
          <div className="text-[22px] font-extrabold mb-10 font-goldmanBold title-footer">Connect With Us</div>
          <div className="flex mb-8">
            <img src={iconTwitter} alt="" className="mr-4 cursor-pointer hover:opacity-80" />
            <img src={iconBatman} alt="" className="mr-4 cursor-pointer hover:opacity-80" />
            <img src={iconIntagam} alt="" className="mr-4 cursor-pointer hover:opacity-80" />
            <img src={iconPlay} alt="" className="cursor-pointer hover:opacity-80" />
          </div>
          <div className="flex mb-8">
            <img src={iconFacebook} alt="" className="mr-4 cursor-pointer hover:opacity-80" />
            <img src={iconM} alt="" className="mr-4 cursor-pointer hover:opacity-80" />
            <img src={iconTikTok} alt="" className="mr-4 cursor-pointer hover:opacity-80" />
            <img src={iconInternet} alt="" className="cursor-pointer hover:opacity-80" />
          </div>
          <div className="flex">
            <div className="flex items-center cursor-pointer hover:opacity-80">
              <img src={iconPlane} alt="" className="mr-2" />
              <div className="text-base text-white mr-4 font-inter">Official</div>
            </div>
            <div className="flex items-center cursor-pointer hover:opacity-80">
              <img src={iconPlane} alt="" className="mr-2" />
              <div className="text-base text-white font-inter">Global</div>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto md:max-w-full md:mx-0 md:w-1/2 lg:w-1/4">
          <div className="text-[22px] font-extrabold mb-10 font-goldmanBold title-footer">Join Newsletter</div>
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
            <img src={iconPlaneNotBorder} alt="" className="absolute right-4 top-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
