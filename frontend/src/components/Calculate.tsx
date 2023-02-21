import React from "react";
import { CalculateProtocol } from "../interfaces/CalculateProtocol";

export class Calculate extends React.Component<CalculateProtocol> {
  render() {
    const { handleChange, amount, active_currency, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <h1 className="search--header">
          How much {active_currency.name} do you own?
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="search--label" htmlFor="amount">
              Enter Amount Owned:
            </label>
            <br />
            <input
              onChange={handleChange}
              className="field"
              type="text"
              name="amount"
              id="amount"
              autoComplete="off"
              placeholder="How much do you own?"
              value={amount}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="calculate-btn"
              value="Caclulate My Total"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}
