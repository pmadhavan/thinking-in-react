import React from 'react';
import { Product } from './TableView';
export type ItemProps = {
  product: Product;
};
const ItemDetail = (props: ItemProps) => {
  let nameElement: JSX.Element;
  if (!props.product.stocked) {
    nameElement = <span style={{ color: 'red' }}> {props.product.name}</span>;
  } else {
    nameElement = <span>{props.product.name}</span>;
  }
  return (
    <tr>
      <td>{nameElement}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ItemDetail;
