import React, { useState, ChangeEvent } from 'react';
import Filter from './Filter';
import TableView from './TableView';
import { products } from '../data/products';

type FilterProductsProps = {};
const FilterableProducts = () => {
  const [onlyShowStocks, setShowOnlyStocks] = useState(false);
  const [searchText, setsearchText] = useState('');

  const handleClick = () => setShowOnlyStocks(!onlyShowStocks);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setsearchText(e.target.value.toLowerCase());
  return (
    <div>
      <Filter handleClick={handleClick} handleChange={handleChange} />
      <TableView
        searchText={searchText}
        showStocks={onlyShowStocks}
        products={products}
      />
    </div>
  );
};
export default FilterableProducts;
