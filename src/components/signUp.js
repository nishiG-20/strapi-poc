import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Realm from "realm-web";
import { useNavigate } from "react-router-dom";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { pages, links ,appId} from "../Constants/constant"

async function emailPasswordLogin(userEmail, userPassword) {
  const app = new Realm.App({ id: "application-2-ajzfj" });
  // Create an email/password credential
  const credentials = Realm.Credentials.emailPassword(userEmail, userPassword);
  try {
    // Authenticate the user
    const user = await app.logIn(credentials);
    return true;
  } catch (err) {
    return false;
  }
}

const emailPasswordSignup = async (email, password) => {
  try {
    const app = new Realm.App({ id: "application-2-ajzfj" });
    await app.emailPasswordAuth.registerUser({ email, password });
    if (await emailPasswordLogin(email, password)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return 0;
  }
};

const theme = createTheme();

export default function SignUp() {
  const [isWrongCredentials, setIsWrongCredentials] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userEmail = data.get("email");
    let userPassword = data.get("password");
    if (await emailPasswordSignup(userEmail, userPassword)) {
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
          <Avatar sx={{ m: 1, bgcolor: "red" }}>
            <LoginSharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register user
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
                isWrongCredentials ? "Entered Email Already Exist" : ""
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
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
