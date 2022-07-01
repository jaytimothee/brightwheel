import {
  SET_MOCKDATA,
  SET_ANALYTICS,
  SEARCH_MOCKDATA,
  DELETE_MOCKDATA,
  STARRED_MOCKDATA,
  SET_STARRED_LIST,
} from "../utils/actionType";

export const mockDataReducer = (state, action) => {
  switch (action.type) {
    case SET_MOCKDATA:
      return {
        mockData: action.payload,
        starCount: state.starCount,
        companyCount: state.companyCount,
        animalCount: state.animalCount,
        productCount: state.productCount,
      };

    case SET_ANALYTICS:
      return {
        mockData: state.mockData,
        starCount: action.payload.filter((item) => item.starred).length,
        companyCount: action.payload.filter((item) => item.type === "company")
          .length,
        animalCount: action.payload.filter((item) => item.type === "product")
          .length,
        productCount: action.payload.filter((item) => item.type === "animal")
          .length,
      };

    case SEARCH_MOCKDATA:
      return {
        mockData: action.payload,
        starCount: state.starCount,
        companyCount: state.companyCount,
        animalCount: state.animalCount,
        productCount: state.productCoun,
      };

    case DELETE_MOCKDATA:
      return {
        mockData: state.mockData.filter(
          (data) => data.id !== action.payload.id
        ),
      };

    case STARRED_MOCKDATA:
      state.mockData.find(
        (data) => data.id === action.payload.item.id
      ).starred = action.payload.item.starred;

      return {
        mockData: state.mockData,
        starCount: action.payload.starCount,
        companyCount: state.companyCount,
        animalCount: state.animalCount,
        productCount: state.productCount,
      };

    case SET_STARRED_LIST:
      return {
        mockData: action.payload,
        starCount: state.starCount,
        companyCount: state.companyCount,
        animalCount: state.animalCount,
        productCount: state.productCount,
      };

    default:
      return { mockData: state.mockData, starCount: state.starCount };
  }
};
