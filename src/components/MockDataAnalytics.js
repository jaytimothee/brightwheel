import axios from "axios";
import { useEffect, useState } from "react";
import { useMockDataContext } from "../hooks/useMockDataContext";
import {
  getAnalyticsData,
  getMockDataList,
  getStarredList,
} from "../http/httpRequest";

const MockDataAnalytics = () => {
  const {
    starCount,
    companyCount,
    productCount,
    animalCount,
    mockData,
    dispatch,
  } = useMockDataContext();

  const [isStarredListShow, setStarredListShow] = useState(false);

  useEffect(() => {
    async function setAnalytics() {
      const { data } = await getAnalyticsData();
      dispatch({ type: "SET_ANALYTICS", payload: data });
    }

    setAnalytics();
  }, [mockData]);

  const handleStarredListClick = async () => {
    setStarredListShow(true);

    await getStarredList((err, data) => {
      if (err) {
        //Handle Error
        throw Error(err);
      } else {
        dispatch({ type: "SET_STARRED_LIST", payload: data });
      }
    });
  };
  const handleShowAllClick = async () => {
    setStarredListShow(false);
    try {
      const { data } = await getMockDataList();
      dispatch({ type: "SET_MOCKDATA", payload: data });
    } catch (error) {
      throw Error(error);
    }
  };
  return (
    <div className="mock--data__component">
      <h3>Mock Data Analytics</h3>
      <label>Total Starred Items:</label>
      <p>{starCount}</p>
      {isStarredListShow ? (
        <button onClick={handleShowAllClick}>Show All</button>
      ) : (
        <button onClick={handleStarredListClick}>Starred List</button>
      )}
      <hr></hr>
      <label>Total Companies:</label>
      <p>{companyCount}</p>
      <label>Total Products:</label>
      <p>{productCount}</p>
      <label>Total Animals:</label>
      <p>{animalCount}</p>{" "}
    </div>
  );
};

export default MockDataAnalytics;
