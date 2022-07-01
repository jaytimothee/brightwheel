import axios from "axios";

export const API = axios.create();
//base api config
API.defaults.baseURL = "http://localhost:3001";

//====================Mock Data Api URLs=====================//
const MOCK_DATA_LIST_URL = "/search?_limit=10";
const SEARCH_LIST_URL = "/search?";
const STAR_LIST_URL = "/search?starred=true";
const STAR_ITEM_URL = "/search/";
const DELETE_ITEM_URL = "/search/";
const ANALYTICS_DATA_URL = "search";
//====================End API URLS=====================//

//====================API Factory Request=====================//

//Populate the state with return data limit 10
export const getMockDataList = () => {
  return API.get(MOCK_DATA_LIST_URL);
};

export const searchMockData = async (query, callback) => {
  try {
    const { data } = await API.get(`${SEARCH_LIST_URL}q=${query}&_limit=10`);
    return callback(null, data);
  } catch {
    return callback(new Error("can not get search"));
  }
};

// return all of the stared elements in the database and count
export const getStarredItems = async (dataItem, callback) => {
  try {
    const { data: item_to_star } = await API.patch(
      `${STAR_ITEM_URL}${dataItem.id}`,
      { starred: !dataItem.starred },
      { headers: { "Content-Type": "application/json" } }
    );
    const { data } = await API.get("/search");
    const number_of_stars = data.filter((item) => item.starred).length;

    return callback(null, item_to_star, number_of_stars);
  } catch (error) {
    return callback(error, null, null);
  }
};

//delete the given element from the database
export const getDeleteItem = async (dataItem, callback) => {
  try {
    await API.delete(`${DELETE_ITEM_URL}${dataItem.id}`);

    return callback(null);
  } catch (error) {
    return callback(error);
  }
};

//Get analytics data
export const getAnalyticsData = () => {
  return API.get(ANALYTICS_DATA_URL);
};

//Only get items that are starred
export const getStarredList = async (callback) => {
  try {
    const { data } = await API.get(STAR_LIST_URL);
    return callback(null, data);
  } catch (error) {
    return callback(error);
  }
};

//====================End API Factory Request=====================//
