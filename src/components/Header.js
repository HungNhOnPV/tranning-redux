import React, { useState, useEffect } from "react";
import "../scss/Header.scss";
import logo from "../images/logo-is.png";

const Header = (props) => {
  const [text, setText] = useState("");

  const sendText = () => {
    props.passText(text);
  };

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
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <span className="btn" onClick={sendText()}>
          <a className="btn__search">
            <i className="fa fa-search"></i>
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
