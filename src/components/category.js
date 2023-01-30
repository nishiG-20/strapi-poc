import * as React from "react";
import Box from "@mui/material/Box";

function Category() {
  const [categoryData, setCategoryData] = React.useState();
  React.useEffect(() => {
    (async () => {
      let url = "http://localhost:1337/api/categories?populate=*";
      const data = await fetch(url);
      setCategoryData(data);
    })();
  }, []);

  if (categoryData) {
    console.log("Category Data...");
  } else {
    console.log("Not data...");
  }
  return (
    <>
      <h2>Category Page</h2>
    </>
  );
}
export default Category;
