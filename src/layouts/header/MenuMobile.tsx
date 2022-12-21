import React, { useEffect, useState } from "react";
import iconConnetWallet from "../../assets/img/icon-connect-wallet.svg";
import iConMenu from "../../assets/img/icon-menu.svg";
import "./styles.scss";

function MenuMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1014 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header min-[1016px]:hidden block">
      <div className="header__content">
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 1014 ? `${"isMenu"}` : ""} 
          }`}
        >
          <div className="absolute right-4 top-4 text-2xl cursor-pointer hover:opacity-70" onClick={menuToggleHandler}>
            x
          </div>
          <ul>
            <li>
              <div className="flex px-6 py-3 items-center button-connect-wallet relative">
                <img src={iconConnetWallet} alt="" className="w-6 mr-2" />
                <span className="font-bold text-sm text-white font-inter">Connect Wallet</span>
                <div className="absolute background-footer-button bottom-0" />
              </div>
            </li>
            <li className="cursor-pointer hover:opacity-70">Gaming Platform</li>
            <li  className="cursor-pointer hover:opacity-70">Marketplace</li>
            <li  className="cursor-pointer hover:opacity-70">Tournament</li>
            <li  className="cursor-pointer hover:opacity-70">Launchpad</li>
            <li  className="cursor-pointer hover:opacity-70">Social</li>
            <li  className="cursor-pointer hover:opacity-70">Defi</li>
            <li  className="cursor-pointer hover:opacity-70">Guild</li>
            <li  className="cursor-pointer hover:opacity-70">Dao</li>
            <li  className="cursor-pointer hover:opacity-70">Chain</li>
            <li  className="cursor-pointer hover:opacity-70">Wallet</li>
            <li  className="cursor-pointer hover:opacity-70">Swap</li>
            <li  className="cursor-pointer hover:opacity-70">Services</li>
          </ul>
        </nav>
        <div className="header__content__toggle">
          <img className="cursor-pointer hover:opacity-70" src={iConMenu} onClick={menuToggleHandler} alt="" />
        </div>
      </div>
    </header>
  );
}

export default MenuMobile;
