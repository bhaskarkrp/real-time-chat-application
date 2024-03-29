import axios from "axios";

export const API_URL = "http://localhost:5000/api";

// add try catch in every api 

export async function get(url, params) {
  try {
    const response = await axios.get(API_URL + url, { params });
    return response.data;
  } catch (err) {
    return err;
  }
}

export async function post(url, payload) {
  try {
    const response = await axios.post(API_URL + url, payload);
    return await response.data;
  } catch (err) {
    return err;
  }
}

export async function patch(url, payload) {
  try {
    const response = await axios.patch(API_URL + url, payload);
    return await response.data;
  } catch (err) {
    return err;
  }
}

export function signOut() {
  const user = localStorage.getItem("loggedIn");

  if (user) {
    localStorage.removeItem("loggedIn");
  }
}
