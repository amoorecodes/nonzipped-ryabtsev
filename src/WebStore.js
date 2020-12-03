import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import fetchProducts from "./data/mochApi";
import Search from "./Search";

function WebStore() {
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState({});

  useEffect(() => {
    fetchProducts()
      // .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        let formatedData = { noCategory: [] };
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (!item.category) formatedData.noCategory.push(item);

          const { category } = item;
          if (formatedData[category]) {
            formatedData[category].push(item);
          } else {
            formatedData[category] = [item];
          }
        }
        setCategorizedProducts(formatedData);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <Search
        products={products}
        setCategorizedProducts={setCategorizedProducts}
      />
      {Object.entries(categorizedProducts).map(([category, items]) => (
        <ProductList category={category} products={items} />
      ))}
    </div>
  );
}

export default WebStore;
