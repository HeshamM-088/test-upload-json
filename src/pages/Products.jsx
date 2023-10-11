import React from "react";

const Products = ({ products }) => {
  return (
    <div className="text-center">
      <h1>Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className="w-100 d-flex justify-content-evenly align-items-center bg-dark text-light rounded p-3 mb-3"
        >
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default Products;
