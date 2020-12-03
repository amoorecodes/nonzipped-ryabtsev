import React from "react";
import styles from "./ProductList.css";

function ProductList({ category, products }) {
  return (
    <div className="products-list">
      {category !== "noCategory" && <h3 className="category">{category}</h3>}
      <ul>
        {products.map(({ price, name, inStock }) => (
          <li>
            <p className={!inStock && "out-of-stock"}>{name}</p>
            <p>{price}</p>
            <button>
              <a>View detail</a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
