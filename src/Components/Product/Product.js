import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <tr>
        <td>
          <img src="https://images.uncyc.org/commons/thumb/6/6d/Iris_and_pupil_chris_hin_01.svg/424px-Iris_and_pupil_chris_hin_01.svg.png" />{" "}
        </td>
        <td>
          <img src={product.imgSrc} />
        </td>
        <td>
          <h4>{product.name}</h4>
        </td>
        <td>
          <h4>{product.price}</h4>
        </td>
      </tr>
    </>
  );
};

export default Product;
