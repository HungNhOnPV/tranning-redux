import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as typeActions from "../actions";
import "../scss/Header.scss";
import logo from "../images/logo-is.png";

const Header = () => {
  const text = useSelector((state) => state.products.text);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <a href="index.html" className="logo">
        <img src={logo} alt="logo" />
        <span>amazing</span>
      </a>
      <div className="input">
        <div className="input__search">
          <input
            type="text"
            className="input__search__box"
            placeholder="Search a product"
            value={text}
            name={text}
            onChange={(e) => dispatch(typeActions.searchText(e.target.value))}
          />
        </div>
        <span className="btn">
          <a className="btn__search">
            <i className="fa fa-search"></i>
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
