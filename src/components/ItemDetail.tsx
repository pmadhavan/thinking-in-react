import React from 'react';
import { Product } from './TableView';
export type ItemProps = {
    product: Product
}
const ItemDetail = (props: ItemProps) => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
  </tr>
);

export default ItemDetail;
