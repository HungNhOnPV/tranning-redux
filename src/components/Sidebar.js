import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as typeActions from "../actions";
import "../scss/Sidebar.scss";

const Sidebar = (props) => {
  const types = useSelector((state) => state.products.types);
  const type = useSelector((state) => state.products.type);
  const stars = useSelector((state) => state.products.stars);
  const star = useSelector((state) => state.products.star);
  const brands = useSelector((state) => state.products.brands);
  const brand = useSelector((state) => state.products.brand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(typeActions.fetchListTypeRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(typeActions.fetchListStarRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(typeActions.fetchListBrandRequest());
  }, [dispatch]);

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
        <div
          key={i}
          className="star_rating"
          onClick={() => dispatch(typeActions.searchStar(star.star))}
        >
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

  const showBrand = (brands, value) => {
    let result = [];
    brands.forEach((brand, i) => {
      result.push(
        <label key={i} htmlFor={brand.brand}>
          <input
            type="radio"
            id={brand.brand}
            checked={value === brand.brand ? true : false}
            name="brand"
            onClick={() => dispatch(typeActions.searchBrand(brand.brand))}
          ></input>
          &nbsp;{brand.brand}
        </label>
      );
    });
    return result;
  };

  const resetFilter = (value) => {
    dispatch(typeActions.searchType(value[0]));
    dispatch(typeActions.searchStar(value[1]));
    dispatch(typeActions.searchBrand(value[2]));
  };

  return (
    <sidebar className="sidebar">
      {type === "" && star === 0 && brand === "" ? (
        ""
      ) : (
        <a className="sidebar__clear" onClick={() => resetFilter(["", 0, ""])}>
          <i className="fa fa-eraser"></i>
          <span>Clear all filters</span>
        </a>
      )}
      <p className="sidebar__title">Show results for</p>
      <div className="sidebar__category">{showType(types)}</div>
      <p className="sidebar__title">Refine by</p>
      <div className="sidebar__Refine">
        <form>
          <p>Star</p>
          <div className="star">{showStarRating(stars)}</div>
          <p>Brand</p>
          <div className="brand">{showBrand(brands, brand)}</div>
        </form>
      </div>
    </sidebar>
  );
};

export default Sidebar;
