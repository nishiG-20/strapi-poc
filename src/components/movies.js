import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import * as Realm from "realm-web";
import { appId } from "../Constants/constant"

export default function AlignItemsList() {
  const [moviesList, setMoviesList] = React.useState()
  React.useEffect(() => {
    (async () => {
      const app = new Realm.App({ id: appId });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allProducts = await user.functions.getAllProducts();
        console.log(allProducts)
        setMoviesList(allProducts)
      } catch (err) {
        console.log(err);
      }
    })();
  }, [])
  if (!moviesList) {
    return <h3>Loading..</h3>
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        moviesList && moviesList.map((elem => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="" />
                </ListItemAvatar>
                <ListItemText
                  primary={elem.category}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                      </Typography>
                      {elem.name}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          )
        }))
      }
    </List>
  );
}
