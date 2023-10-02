import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    category,
    colors,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;
  console.log("Color:", colors);
  console.log("Size:", size);
  console.log("Min Price:", minPrice);
  console.log("Max Price:", maxPrice);
  console.log("minDiscount:", minDiscount);
  console.log("category:", category);
  console.log("stock:", stock);
  console.log("sort:", sort);
  console.log("pageNumber:", pageNumber);
  console.log("pageSize:", pageSize);

  try {
    const { data } = await api.get(
      `/api/products?color=${colors}&size=${size}
      `
    );
    console.log("product data ", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching products by ID:", error);
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
