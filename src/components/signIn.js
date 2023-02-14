import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Realm from "realm-web";
import { useNavigate } from "react-router-dom";
import { pages, links ,appId} from "../Constants/constant"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

async function validateEmailAndPassword(userEmail, userPassword) {
  const app = new Realm.App({ id: appId});
  // Create an email/password credential
  const credentials = Realm.Credentials.emailPassword(userEmail, userPassword);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    // const allProducts = await user.functions.getAllProducts();
    return true;
  } catch (err) {
    return false;
  }
}

const theme = createTheme();

export default function SignIn() {
  const [isWrongCredentials, setIsWrongCredentials] = React.useState(false);
  const navigate = useNavigate();

  //Anonymous User Login
  // React.useEffect(() => {
  //   (async () => {
  //     const app = new Realm.App({ id: appId });
  //     const credentials = Realm.Credentials.anonymous();
  //     try {
  //       const user = await app.logIn(credentials);
  //       const allProducts = await user.functions.getAllProducts();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userEmail = data.get("email");
    let userPassword = data.get("password");
    if (await validateEmailAndPassword(userEmail, userPassword)) {
      setIsWrongCredentials(false);
      pages = ["Home", "Category", "Movies"];
      links = ["/", "/category", "/movies"];
      navigate("/category");
    } else {
      setIsWrongCredentials(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={isWrongCredentials ? true : false}
              helperText={
                isWrongCredentials ? "Please Enter correct Email" : ""
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={isWrongCredentials ? true : false}
              helperText={
                isWrongCredentials ? "Please Enter correct passwod" : ""
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
