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
};
const TableView = (props: TableProps) => {
  let lastCategory: string = '';
  const rows: JSX.Element[] = [];
  props.products.forEach((product: Product) => {
    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(<Category name={product.category} />);
    }
    rows.push(<ItemDetail product={product} />);
  });
  return (
    <table>
      <tr>
        <td> Name </td>
        <td> Price </td>
      </tr>

      {rows}
    </table>
  );
};

export default TableView;
