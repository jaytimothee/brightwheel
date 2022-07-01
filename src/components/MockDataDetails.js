import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { pink, green } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import defaultImage from "../assets/default.png";

import { handleDataContent } from "../utils/content";
import { useMockDataContext } from "../hooks/useMockDataContext";
import { getDeleteItem, getStarredItems } from "../http/httpRequest";

const MockDataDetails = ({ data }) => {
  const { dispatch } = useMockDataContext();

  const handleStarredClick = async () => {
    //Callback to get star function that returns number of stars and item that was stared
    getStarredItems(data, (err, item_to_star, number_of_stars) => {
      if (err) {
        //TODO DISPLAY ERROR SOMEWHERE IN TEMPLATE
        err.toString();
      } else {
        // dispatch action from callback
        dispatch({
          type: "STARRED_MOCKDATA",
          payload: { item: item_to_star, starCount: number_of_stars },
        });
      }
    });
  };

  const handleDeleteClick = async () => {
    getDeleteItem(data, (err) => {
      if (err) throw Error("can not delete Item"); //Throw error response if unable to delete item
      dispatch({ type: "DELETE_MOCKDATA", payload: data });
    });
  };

  return (
    <Card className="home--data__card" sx={{ minWidth: 350, maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="300"
        src={data.image ? data.image : defaultImage}
        alt="data image"
      />
      {handleDataContent(data)}
      <CardActions>
        <IconButton onClick={handleStarredClick} aria-label="add to favorites">
          {data.starred ? (
            <StarIcon sx={{ color: green["A200"] }} />
          ) : (
            <StarIcon />
          )}
        </IconButton>
        <IconButton onClick={handleDeleteClick} aria-label="delete">
          <DeleteIcon sx={{ color: pink[500] }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MockDataDetails;
