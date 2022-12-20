import logoFooter from "../../assets/img/logo/logo-footer.svg";
import iconConnetWallet from "../../assets/img/icon-connect-wallet.svg";
import iconUp from "../../assets/img/icon-up.svg";
import iconCertik from "../../assets/img/icon-certik.svg";
import iconCoinmarketcap from "../../assets/img/icon-coinmarketcap.svg";
import iconCoingecko from "../../assets/img/icon-coingecko.svg";
import iconPancake from "../../assets/img/icon-pancake.svg";
import iconKyber from "../../assets/img/icon-kyber.svg";
import iconBsc from "../../assets/img/icon-bsc.svg";
import "./styles.scss";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const renderItemCrypto = (icon: string, name: string) => (
    <div className="flex items-center min-[1080px]:mr-4 mr-2">
      <img src={icon} alt="" className="mr-2" />
      <span className=" text-xs text-white">{name}</span>
    </div>
  );

  const renderTagPage = ({
    name,
    isPr,
    isPl,
    isPx,
  }: {
    name: string;
    isPr?: boolean;
    isPl?: boolean;
    isPx?: boolean;
  }) => {
    const className = isPr
      ? "min-[1210px]:pr-4 pr-2"
      : isPl
      ? "min-[1210px]:pl-4 pl-2"
      : isPx
      ? "min-[1210px]:px-4 px-2"
      : "";
    const isActived = name === "Home" ? true : false;
    return (
      <div
        className={`text-sm font-bold border-bottom-tag-page pb-5 cursor-pointer hover:opacity-70 ${className} ${
          isActived ? "text-white border-bottom-tag-page-actived" : ""
        }`}
      >
        {name}
      </div>
    );
  };

  const renderButtonsFooter = (name: string, isNotMr?: boolean) => {
    const isActived = name === "Limit";
    const className = `cursor-pointer hover:opacity-70 text-sm text-white ${
      isActived ? "button-footer-container" : ""
    } ${isNotMr ? "" : "mr-8"}`;
    return <div className={className}>{name}</div>;
  };

  return (
    <div className="flex relative w-full header-container max-[1016px]:!pb-4">
      <div className="w-1/12 relative">
        <img src={logoFooter} alt="" className="w-20 min-[1016px]:mt-4" />
      </div>
      <div className="w-11/12 relative">
        <div className="min-[1016px]:block hidden">
          <div className="flex justify-end">
            {renderItemCrypto(iconCertik, "CERTIK")}
            {renderItemCrypto(iconCoinmarketcap, "COINMARKETCAP")}
            {renderItemCrypto(iconCoingecko, "COINGECKO")}
            {renderItemCrypto(iconPancake, "PANCAKESWAP")}
            {renderItemCrypto(iconKyber, "KYBERSWAP")}
            <img src={iconUp} alt="" className="min-[1080px]:mr-5 mr-3" />
            <div className="flex items-center min-[1080px]:mr-6 mr-3 button-bsc-container cursor-pointer hover:opacity-70">
              <img src={iconBsc} alt="" className=" mr-2" />
              <span className=" text-xs text-white font-inter">BSC</span>
            </div>
            <div className="flex px-6 py-3 items-center button-connect-wallet relative cursor-pointer hover:opacity-70">
              <img src={iconConnetWallet} alt="" className="w-6 mr-2" />
              <span className="font-bold text-sm text-white font-inter">
                Connect Wallet
              </span>
              <div className="absolute background-footer-button bottom-0" />
            </div>
          </div>
          <div className="flex justify-end mt-5 ">
            {renderTagPage({ name: "Home", isPr: true })}
            {renderTagPage({ name: "Gaming Platform", isPx: true })}
            {renderTagPage({ name: "Marketplace", isPx: true })}
            {renderTagPage({ name: "Tournament", isPx: true })}
            {renderTagPage({ name: "Launchpad", isPx: true })}
            {renderTagPage({ name: "Social", isPx: true })}
            {renderTagPage({ name: "Defi", isPx: true })}
            {renderTagPage({ name: "Guild", isPx: true })}
            {renderTagPage({ name: "Dao", isPx: true })}
            {renderTagPage({ name: "Chain", isPx: true })}
            {renderTagPage({ name: "Wallet", isPx: true })}
            {renderTagPage({ name: "Swap", isPx: true })}
            {renderTagPage({ name: "Services", isPl: true })}
          </div>
          <div className="flex justify-end my-4 ">
            {renderButtonsFooter("Swap")}
            {renderButtonsFooter("Limit")}
            {renderButtonsFooter("Liquidity")}
            {renderButtonsFooter("Pertual")}
            {renderButtonsFooter("Trading Competition")}
            {renderButtonsFooter("Swap")}
            {renderButtonsFooter("Swap", true)}
          </div>
        </div>
        <MenuMobile />
      </div>
    </div>
  );
};

export default Header;
