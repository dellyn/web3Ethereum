import React from "react";

import "./styles.scss";
const currency = "$";

const GroupBoardItem = ({ data }) => {
  const dollarsFromCents = data.usdPriceInCents / 100;
  const isPositiveNumber = data.percentageChange >= 0;

  return (
    <div className="item">
      <div className="item-info">
        <p className="name">{data.name}</p>
        <p>{data.ethPriceInWei}</p>
        <p>{data.usdCapitalization}</p>

        <div className="price-block">
          <p className="dolars">
            <span>{currency}</span>
            {dollarsFromCents}
          </p>
          <p className={`percentage ${isPositiveNumber ? "pos" : "neg"}`}>
            {data.percentageChange}
            <span>%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupBoardItem;
