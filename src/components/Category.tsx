import React from 'react';
export type CategoryProps = {
  name: string;
};
const Category = (props: CategoryProps) => (
  <tr>
    <th style={{ letterSpacing: '2px' }}>{props.name}</th>
  </tr>
);

export default Category;
