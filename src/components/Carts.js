import React, { useState, useEffect } from "react";
import Product from "./product";
import "../scss/Carts.scss";

const addCarts = (products, paginate) => {
  const count1 = (paginate - 1) * 16;
  const count2 = paginate * 16;
  let result = null;
  result = products.slice(count1, count2);
  window.localStorage.setItem("carts", JSON.stringify(result));
};

const showData = () => {
  const carts = JSON.parse(window.localStorage.getItem("carts"));
  let result = null;
  result = carts.map((cart, i) => {
    return <Product key={i} cart={cart} />;
  });
  return result;
};

const showPaginate = (products, paginate, setPaginate) => {
  let result = [];
  let count =
    products.length % 16 === 0
      ? products.length / 16
      : products.length / 16 + 1;
  for (let i = 1; i <= count; i++) {
    i === paginate
      ? result.push(
          <a key={i} onClick={() => setPaginate(i)} className="active">
            {i}
          </a>
        )
      : result.push(
          <a key={i} onClick={() => setPaginate(i)}>
            {i}
          </a>
        );
  }
  return result;
};

const Carts = (props) => {
  const [products, setProducts] = useState(props.products);
  const [paginate, setPaginate] = useState(1);
  const [select, setSelect] = useState("fea");

  useEffect(() => {
    if (select === "asc") {
      setProducts(() => [...props.products].sort((a, b) => a.price - b.price));
    } else if (select === "desc") {
      setProducts(() => [...props.products].sort((a, b) => b.price - a.price));
    } else if (select === "fea") {
      setProducts(props.products);
    }
    if (props.text !== "" || props.star !== 0 || props.type !== "") {
      const result = [...props.products].filter((product) => {
        if (props.text !== "") {
          return (
            product.name.toLowerCase().indexOf(props.text.toLowerCase()) !== -1
          );
        } else if (props.type !== "") {
          return (
            product.type.toLowerCase().indexOf(props.type.toLowerCase()) !== -1
          );
        } else if (props.star !== 0) {
          return product.star === props.star;
        }
      });
      setProducts(() => [...result]);
    }
  }, [select, props.text, props.type, props.star, props.products]);

  addCarts(products, paginate);

  return (
    <div className="carts">
      <div className="carts__header">
        <p className="count__sort">{products.length} results found in 3ms</p>
        <div className="sort">
          <label for="sort">Sort by</label>
          <select
            id="sort"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="fea">Featured</option>
            <option value="asc">Price asc</option>
            <option value="desc">Price desc</option>
          </select>
        </div>
      </div>
      <div className="carts__main">{showData()}</div>
      <div className="carts__pagination">
        <a
          onClick={
            paginate === 1
              ? () => setPaginate(paginate)
              : () => setPaginate(paginate - 1)
          }
        >
          &laquo; Previous page
        </a>
        {showPaginate(products, paginate, setPaginate)}
        <a
          onClick={
            paginate ===
            (products.length % 16 === 0
              ? Math.ceil(products.length / 16)
              : Math.ceil(products.length / 16))
              ? () => setPaginate(paginate)
              : () => setPaginate(paginate + 1)
          }
        >
          Next page &raquo;
        </a>
      </div>
    </div>
  );
};

export default Carts;
