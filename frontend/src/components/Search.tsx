import React from "react";
import { SearchProtocol } from "../interfaces/SearchProtocol";
import { SearchResult } from "./SearchResult";

export class Search extends React.Component<SearchProtocol> {
  render() {
    const { name, handleChange, handleSelect, searchResults } = this.props;
    const results = searchResults.map((curr) => {
      return (
        <SearchResult
          key={curr.id}
          currency={curr}
          handleSelect={handleSelect}
        />
      );
    });
    return (
      <React.Fragment>
        <h1 className="search--header">Cryptocurrency Portfolio Calculator</h1>
        <form>
          <div className="form-group">
            <label className="search--label" htmlFor="name">
              Search for a Currency:
            </label>
            <br />
            <input
              onChange={handleChange}
              className="field"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Ex: Bitcoin, Litecoin, Ethereum..."
              value={name}
            />
          </div>
          <div className="currency-list">{results}</div>
        </form>
      </React.Fragment>
    );
  }
}
