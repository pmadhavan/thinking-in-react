import React, { ChangeEvent } from 'react';
type FilterProps = {
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Filter = (props: FilterProps) => {
  return (
    <div>
      <input type="text" onChange={props.handleChange} />
      <div>
        <input onClick={props.handleClick} type="checkbox" value="" />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
};
export default Filter;
