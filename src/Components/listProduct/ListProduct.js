import React from "react";
import Product from "../Product/Product";

const ListProduct = ({ Products }) => {
  return (
    <div className="container">
      <table>
        <tr>
          <th>Vue</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {/* liste des produits */}
        {Products.map((product, key) => (
          <Product product={product} key={key} />
        ))}
      </table>
    </div>
  );
};

export default ListProduct;
