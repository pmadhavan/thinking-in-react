import React from 'react';
import Category from './Category';
import ItemDetail from './ItemDetail';
export interface Product {
  category: string;
  stocked: boolean;
  name: string;
  price: string;
}
export type TableProps = {
  products: Product[];
  searchText: string;
  showStocks: boolean;
};
const TableView = (props: TableProps) => {
  let lastCategory: string = '';
  const rows: JSX.Element[] = [];
  props.products.forEach((product: Product) => {
    if (product.name.toLowerCase().indexOf(props.searchText) === -1) {
      return;
    }
    if (props.showStocks && product.stocked !== props.showStocks) {
      return;
    }
    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(<Category key={product.category} name={product.category} />);
    }
    rows.push(<ItemDetail product={product} key={product.name} />);
  });
  return (
    <table>
      <tbody>
        <tr>
          <td> Name </td>
          <td> Price </td>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};

export default TableView;
