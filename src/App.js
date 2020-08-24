import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Carts from "./components/Carts";
import * as typeActions from "./actions";
import { useDispatch } from 'react-redux';
import "./scss/App.scss";

const App = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/products");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        setProducts(JSON.parse(xhr.responseText));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  }, []);

  dispatch(typeActions.fetchListTask(products));

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Carts />
    </div>
  );

};

export default App;
