import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMockDataContext } from "../hooks/useMockDataContext";

import searchImage from "../assets/search.png";
import { searchMockData } from "../http/httpRequest";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { dispatch } = useMockDataContext();

  useEffect(() => {
    const fetchData = async () => {
      //callback function return with search results
      searchMockData(searchQuery, (err, searchResults) => {
        if (err) {
          //TODO DISPLAY ERROR SOMEWHERE IN TEMPLATE
          err.toString();
        } else {
          dispatch({ type: "SET_MOCKDATA", payload: searchResults });
        }
      });
    };
    fetchData();
  }, [searchQuery]);
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Brightwheel</h1>
        </Link>

        <input
          type="text"
          placeholder="search company, products, animal..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button type="submit" className="search-button">
          <img src={searchImage} />
        </button>
      </div>
    </header>
  );
};

export default Searchbar;
