import { useMockDataContext } from "../hooks/useMockDataContext";
import { useEffect } from "react";

import { getMockDataList } from "../http/httpRequest";

//components
import MockDataDetails from "../components/MockDataDetails";
import MockDataAnalytics from "../components/MockDataAnalytics";

const Home = () => {
  //Data and dispatch action injected by usecontext
  const { mockData, dispatch } = useMockDataContext();

  useEffect(() => {
    // async instance method of axios function to get mock data
    const fetchMockData = async () => {
      const { data } = await getMockDataList();

      //call dispatch from usecontext hook with data provided from api call
      dispatch({ type: "SET_MOCKDATA", payload: data });
    };

    fetchMockData();
  }, []);

  return (
    <div className="home">
      <div className="home--data">
        {/* map over data and output a detail list component */}
        {mockData &&
          mockData.map((data) => <MockDataDetails data={data} key={data.id} />)}
      </div>
      <MockDataAnalytics />
    </div>
  );
};

export default Home;
