import React from 'react';
export type CategoryProps = {
  name: string;
};
const Category = (props: CategoryProps) => (
  <tr>
    <th>{props.name}</th>
  </tr>
);

export default Category;
