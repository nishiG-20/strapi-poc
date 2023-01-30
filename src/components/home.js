import * as React from "react";
// import homePageImg from "../images/home.jpg";
import homePageImg from "../images/homeImg.jpg";
import Box from "@mui/material/Box";

function Home() {
  return (
    <>
      <Box
        component="img"
        sx={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width:"100vw",
            height:"calc(88vh)"
        }}
        alt="home pages"
        src={homePageImg}
      />
    </>
  );
}
export default Home;
