import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">Logotype</div>
          <button
            className="wallet"
            onClick={() => {
              console.log("I do nothing");
            }}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
