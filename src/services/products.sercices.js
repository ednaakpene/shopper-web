import { apiClient } from "./config.js";

export const apiGetAllProducts = async () => {
  return apiClient.get("/products");
};

export const apiGetProducts = async (id) => {
  return apiClient.get(`/products/${id}`);
};

export const apiGetCategories = async () => {
  return apiClient.post(`/categories`);
};

export const apiGetJewelry = async () => {
    return apiClient.get("/products/category/jewelery");
};

export const apiGetElectronics = async () => {
    return apiClient.get("/products/category/electronics");
};

export const apiGetMensclothing = async () => {
    return apiClient.get("/products/category/men's clothing");
};

export const apiGetWomensclothing = async () => {
    return apiClient.get("/products/category/women's clothing");
};

export const apiGetAllCarts = async () => {
    return apiClient.get("/carts");
};

export const apiGetSingleCart = async (id) => {
    return apiClient.get(`/carts/${id}`);
};

export const apiDeleteCart = async (id) => {
    return apiClient.delete(`/carts/${id}`);
};





export const apiDeleteProducts = async (id) => {
  return apiClient.delete(`/products/${id}`);
};

export const apiUpdateProducts = async (id, payload) => {
  return apiClient.patch(`/products/${id}`, payload);
};