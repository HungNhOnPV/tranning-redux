import * as types from "../constants";

export const fetchListTaskRequest = () => {
  return (dispatch) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/products");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        return dispatch(fetchListTask(JSON.parse(xhr.responseText)));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  };
};

export const fetchListTask = (data = []) => {
  return {
    type: types.FETCH_TASK,
    payload: {
      data,
    },
  };
};

export const fetchListTypeRequest = () => {
  return (dispatch) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/types");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        return dispatch(fetchListType(JSON.parse(xhr.responseText)));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  };
};

export const fetchListType = (data = []) => {
  return {
    type: types.FETCH_TYPE,
    payload: {
      data,
    },
  };
};

export const fetchListStarRequest = () => {
  return (dispatch) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/stars");
    // request state change event
    xhr.onreadystatechange = function () {
      // request completed?
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        // request successful - show response
        return dispatch(fetchListStar(JSON.parse(xhr.responseText)));
      } else {
        // request error
        console.log("HTTP error", xhr.status, xhr.statusText);
      }
    };
    // start request
    xhr.send();
  };
};

export const fetchListStar = (data = []) => {
  return {
    type: types.FETCH_STAR,
    payload: {
      data,
    },
  };
};

export const searchText = (text = "") => {
  return {
    type: types.SEARCH_TEXT,
    payload: {
      text,
    },
  };
};

export const searchType = (type = "") => {
  return {
    type: types.SEARCH_TYPE,
    payload: {
      type,
    },
  };
};

export const searchStar = (star = 0) => {
  return {
    type: types.SEARCH_STAR,
    payload: {
      star,
    },
  };
};

export const showProducts = (products = []) => {
  return {
    type: types.SHOW_PRODUCTS,
    payload: {
      products,
    },
  };
};
