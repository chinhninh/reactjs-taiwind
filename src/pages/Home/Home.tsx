﻿import logo from "../../assets/img/logo/logo.svg";
import features from "../../assets/img/features-split-image-01.png";
import features2 from "../../assets/img/features-split-image-02.png";
import features3 from "../../assets/img/features-split-image-03.png";
import backgroundImage from "../../assets/img/cta-illustration.svg";
import './home.scss'

function Home() {
  return (
    <div className="container mx-auto relative px-4 pt-14 home-container">
      <div className="mt-3.5 flex">
        <div className="w-7/12">
          <div className="flex items-center">
            <div className="tag-background-sidelong font-poppins">Innovation</div>
            <div className="ml-4 text-base font-medium font-poppins">2 Hours ago</div>
          </div>
          <div className="mt-6 text-[62px] font-medium font-poppins">Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock</div>
        </div>
        <div className="w-5/12">

        </div>
      </div>
    </div>
  );
}

export default Home;