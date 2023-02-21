import React from "react";
import { PortfolioItemProtocol } from "../interfaces/PortfolioItemProtocol";

export class PortfolioItem extends React.Component<PortfolioItemProtocol> {
  render() {
    const { item } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <div className="header">Currency:</div>
            <div className="text">{item.currency.name}</div>
          </div>

          <div className="col">
            <div className="header">Current Price:</div>
            <div className="text">${item.current_price}</div>
          </div>

          <div className="col">
            <div className="header">Amount In Your Portfolio:</div>
            <div className="text">{item.amount}</div>
          </div>

          <div className="col">
            <div className="header">Current Value:</div>
            <div className="text">${item.value}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
