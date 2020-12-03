import React, { useState, useEffect } from "react";
import styles from "./Search.css";

function Search({ products, setCategorizedProducts }) {
  const [searchText, setSearchText] = useState("");
  function filterProducts(searchParams) {
    const filtered = products.map(({ name }) => name.includes(searchText));
    setCategorizedProducts(filtered);
  }

  return (
    <form>
      <label htmlFor="product-search">
        <input
          placeholder="Search Products"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            filterProducts(searchText);
          }}
        ></input>
      </label>
    </form>
  );
}

export default Search;
