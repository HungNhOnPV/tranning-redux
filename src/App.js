import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Carts from "./components/Carts";
import * as typeActions from "./actions";
import { useDispatch } from 'react-redux';
import "./scss/App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(typeActions.fetchListTaskRequest());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Carts />
    </div>
  );

};

export default App;
