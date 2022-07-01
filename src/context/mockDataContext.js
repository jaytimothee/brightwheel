import { createContext, useReducer } from "react";
import { mockDataReducer } from "../reducers/mockDataReducer";
export const MockDataContext = createContext();

export const MockDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mockDataReducer, {
    mockData: null,
    starCount: 0,
    companyCount: null,
    productCount: null,
    animalCount: null,
  });
  return (
    <MockDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MockDataContext.Provider>
  );
};
