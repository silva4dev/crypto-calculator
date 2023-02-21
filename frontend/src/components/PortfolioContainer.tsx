import React from "react";
import axios from "../config/axios";
import { PortfolioContainerProtocol } from "../interfaces/PortfolioContainerProtocol";
import { Calculate } from "./Calculate";
import { Search } from "./Search";
import { Portfolio } from "./Portfolio";
import { PortfolioContainerStateProtocol } from "../interfaces/PortfolioContainerStateProtocol";

export class PortfolioContainer extends React.Component<
  PortfolioContainerStateProtocol,
  PortfolioContainerProtocol
> {
  constructor(props: PortfolioContainerStateProtocol) {
    super(props);
    this.state = {
      name: "",
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
  }

  handleChange(e: React.FormEvent): void {
    const el = e.target as HTMLInputElement;
    this.setState({ [el.name]: el.value });
    axios
      .post("/api/v1/search", {
        search: el.value,
      })
      .then((data) => {
        this.setState({ search_results: [...data.data.currencies] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSelect(e: React.MouseEvent): void {
    e.preventDefault();
    const el = e.target as HTMLElement;
    const id = +el.getAttribute("data-id")!;
    const active_currency = this.state.search_results.filter(
      (item: { id: number }) => +item.id === id
    );
    this.setState({
      active_currency: active_currency[0],
      search_results: [],
    });
  }

  handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    let currency = this.state.active_currency;
    let amount = this.state.amount;
    axios
      .post("/api/v1/calculate", {
        id: currency.id,
        amount: amount,
      })
      .then((data) => {
        this.setState({
          amount: "",
          active_currency: null,
          portfolio: [...this.state.portfolio, data.data],
          name: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleAmount(e: React.FormEvent) {
    const el = e.target as HTMLInputElement;
    this.setState({ [el.name]: el.value });
  }

  render() {
    const searchOrCalculate = this.state.active_currency ? (
      <Calculate
        handleChange={this.handleAmount}
        handleSubmit={this.handleSubmit}
        active_currency={this.state.active_currency}
        amount={this.state.amount}
      />
    ) : (
      <Search
        name={this.state.name}
        handleSelect={this.handleSelect}
        handleChange={this.handleChange}
        searchResults={this.state.search_results}
      />
    );
    return (
      <div className="grid">
        <div className="left">{searchOrCalculate}</div>
        <div className="right">
          <Portfolio portfolio={this.state.portfolio} />
        </div>
      </div>
    );
  }
}
