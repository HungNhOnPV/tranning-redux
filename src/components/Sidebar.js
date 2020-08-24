import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as typeActions from "../actions";
import "../scss/Sidebar.scss";

const Sidebar = (props) => {
  const listProducts = useSelector(state => state.products.listProducts);
  const [products, setProducts] = useState(listProducts);
  const [types, setTypes] = useState([]);
  const type = useSelector(state => state.products.type);
  const [stars, setStars] = useState([]);
  const star = useSelector(state => state.products.star);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(listProducts);
  }, [listProducts]);

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/types");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        setTypes(JSON.parse(xhr.responseText));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  }, []);

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/stars");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        setStars(JSON.parse(xhr.responseText));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  }, []);

  const showType = (types) => {
    let result = [];
    types.forEach((type, i) => {
      result.push(
        <a
          key={i}
          className="sidebar__category__link"
          onClick={() => dispatch(typeActions.searchType(type.type))}
        >
          <i className="fas fa-angle-right"></i>
          <span>{type.type}</span>
        </a>
      );
    });
    return result;
  };

  const showStarRating = (stars) => {
    let result = [];
    stars.forEach((star, i) => {
      result.push(
        <div key={i} className="star_rating" onClick={() => dispatch(typeActions.searchStar(star.star))}>
          {showStar(star.star)}
        </div>
      );
    });
    return result;
  };

  const showStar = (star) => {
    let result = [];
    for (let i = 1; i <= star; i++) {
      result.push(<i key={i} className="fas fa-star"></i>);
    }
    for (let i = star + 1; i <= 5; i++) {
      result.push(<i key={i} className="far fa-star"></i>);
    }
    return result;
  };

  const resetFilter = (value) => {
    dispatch(typeActions.searchType(value[0]));
    dispatch(typeActions.searchStar(value[1]));
  };

  return (
    <sidebar className="sidebar">
      {type === "" && star === 0 ? (
        ""
      ) : (
        <a className="sidebar__clear" onClick={() => resetFilter(["", 0])}>
          <i className="fa fa-eraser"></i>
          <span>Clear all filters</span>
        </a>
      )}
      <p className="sidebar__title">Show results for</p>
      <div className="sidebar__category">
        {showType(types)}
      </div>
      <p className="sidebar__title">Refine by</p>
      <div className="sidebar__Refine">
        <form>
          <p>Star</p>
          <div className="star">
            {showStarRating(stars)}
          </div>
        </form>
      </div>
    </sidebar>
  );
};

export default Sidebar;
