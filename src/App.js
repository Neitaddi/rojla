import React from "react";
import ProductArray from "./Components/ProductData";
import ListProduct from "./Components/listProduct/ListProduct";
const App = () => {
  return (
    <div className="container">
      <ListProduct Products={ProductArray} />
    </div>
  );
};

export default App;
