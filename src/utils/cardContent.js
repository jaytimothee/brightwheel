import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export const AnimalContent = ({ data }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h4">
        {data.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>name: </strong>
        {data.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>scientific name : </strong>
        {data.taxonomy.scientificName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>family : </strong>
        {data.taxonomy.family}
      </Typography>
    </CardContent>
  );
};
export const ProductContent = ({ data }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h4">
        {data.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>name: </strong>
        {data.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>category : </strong>
        {data.productCategory}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {data.previewText}
      </Typography>
    </CardContent>
  );
};
export const CompanyContent = ({ data }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h4">
        {data.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>name: </strong>
        {data.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <strong>description : </strong>
        {data.description}
      </Typography>
      <br></br>
      <Typography variant="body2" color="text.secondary">
        <strong>Address : </strong>
        {data.address.address1}
        <strong> City : </strong>
        {data.address.city}
        <strong> State : </strong>
        {data.address.state}
        <strong> Postal Code : </strong>
        {data.address.postalCode}
        <strong> Address2 : </strong>
        {data.address.address2}
      </Typography>
    </CardContent>
  );
};
