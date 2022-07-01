import { AnimalContent, CompanyContent, ProductContent } from "./cardContent";

export const handleDataContent = (data) => {
  switch (data.type) {
    case "animal":
      return <AnimalContent data={data} />;
    case "company":
      return <CompanyContent data={data} />;
    case "product":
      return <ProductContent data={data} />;
  }
};
