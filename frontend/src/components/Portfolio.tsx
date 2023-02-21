import React from "react";
import { PortfolioProtocol } from "../interfaces/PortfolioProtocol";
import { PortfolioItem } from "./PortfolioItem";

export class Portfolio extends React.Component<PortfolioProtocol> {
  render() {
    const { portfolio } = this.props;
    const portfolioItems = portfolio.map((item, index) => (
      <PortfolioItem key={index} item={item} />
    ));
    const total = portfolio.reduce((total, curr) => total + curr.value, 0);
    const formatted_total = total
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");

    return (
      <React.Fragment>
        <div className="portfolio-value">
          <div className="portfolio-value--header">
            Your Total Portfolio Value Is:
          </div>
          <div className="portfolio-value--content">${formatted_total}</div>
        </div>
        <div className="portfolio-items">{portfolioItems}</div>
      </React.Fragment>
    );
  }
}
