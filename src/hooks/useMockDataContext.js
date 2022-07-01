import { MockDataContext } from "../context/mockDataContext";
import { useContext } from "react";

export const useMockDataContext = () => {
  const context = useContext(MockDataContext);

  // if (!context) {
  //   throw Error("You Do Not Have access to this contex");
  // }
  return context;
};
