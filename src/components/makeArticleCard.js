import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";

export default function MultiActionAreaCard(props) {
  console.log(props.selectedArticleData);
  let { selectedArticleData } = props;
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        {selectedArticleData &&
          selectedArticleData.map((elem, index) => {
            let { Title, Body, Image } = elem.attributes;
            return (
              <Card sx={{ maxWidth: 345, m: 1 , "&:hover": {
                transform: "scale(1.1)",
              },}} key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`http://localhost:1337${Image.data.attributes.url}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {Title}
                    </Typography>
                    <Typography variant="body2">
                      {`${Body.substring(0, 100)}`}...
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </Box>
    </div>
  );
}
