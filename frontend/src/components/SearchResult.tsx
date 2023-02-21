import React from "react";
import { SearchResultProtocol } from "../interfaces/SearchResultProtocol";

export class SearchResult extends React.Component<SearchResultProtocol> {
  render() {
    const { currency, handleSelect } = this.props;
    return (
      <React.Fragment>
        <li
          data-id={currency.id}
          onClick={handleSelect}
          className="currency-list-item"
        >
          <a href="#currency" className="currency">
            <span>{currency.name}</span>
            <span className="currency_symbol">{currency.currency_symbol}</span>
          </a>
        </li>
      </React.Fragment>
    );
  }
}
