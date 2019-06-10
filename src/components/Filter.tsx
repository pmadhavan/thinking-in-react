import React, { ChangeEvent } from 'react';
import './Filter.scss';
type FilterProps = {
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Filter = (props: FilterProps) => {
  return (
    <section className="filter-container">
      <div>
        <input type="text" onChange={props.handleChange} />
      </div>
      <div className="stocks-checkbox">
        <input
          id="showOnlyStocks"
          onClick={props.handleClick}
          type="checkbox"
          value=""
        />
        <label htmlFor="showOnlyStocks">Only show products in stock</label>
      </div>
    </section>
  );
};
export default Filter;
