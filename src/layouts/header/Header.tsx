import logoFooter from "../../assets/img/logo-footer.svg";
import iconPankake from "../../assets/img/icon-pancakeswap.svg";
import iconConnetWallet from "../../assets/img/icon-connect-wallet.svg";
import "./styles.scss";

const Header = () => {
  const renderItemCrypto = (icon: string, name: string) => (
    <div className="flex items-center mr-4">
      <img src={icon} alt="" className="w-6 mr-2" />
      <span className=" text-xs text-white font-inter">{name}</span>
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
    const className = isPr ? "pr-4" : isPl ? "pl-4" : isPx ? "px-4" : "";
    const isActived = name === "Home" ? true : false;
    return (
      <div
        className={`text-sm font-bold border-bottom-tag-page pb-5 ${className} ${
          isActived ? "text-white border-bottom-tag-page-actived" : "opacity-50"
        }`}
      >
        {name}
      </div>
    );
  };

  return (
    <div className="flex relative px-7 pt-4 pt-2 w-full header-container">
      <div className="w-1/12">
        <img src={logoFooter} alt="" className="w-20" />
      </div>
      <div className="w-11/12">
        <div className="flex justify-end">
          {renderItemCrypto(iconPankake, "CERTIK")}
          {renderItemCrypto(iconPankake, "COINMARKETCAP")}
          {renderItemCrypto(iconPankake, "COINGECKO")}
          {renderItemCrypto(iconPankake, "PANCAKESWAP")}
          {renderItemCrypto(iconPankake, "KYBERSWAP")}
          {renderItemCrypto(iconPankake, "BSC")}
          <div className="flex px-6 py-3 items-center button-connect-wallet relative">
            <img src={iconConnetWallet} alt="" className="w-6 mr-2" />
            <span className="font-bold text-sm text-white font-inter">Connect Wallet</span>
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
      </div>
    </div>
  );
};

export default Header;
