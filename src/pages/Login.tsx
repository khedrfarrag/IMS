import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import img from "../assets/images/ResetPass.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import imgLogin from "../assets/images/Login.svg";
import IconGoogle from "../assets/images/Google.svg";
import { useState } from "react";

type Login = {
  email: string;
  password: string;
};
const Login = () => {
  const [visibility, setvisibility] = useState(false);

  const {
    handleSubmit,
    reset,
    getValues,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Login>({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
  });
  const onsumit = async (data: Login) => {
    try {
      console.log(data);
      const response = await axios.post("", data);
      console.log(response);
    } catch (errors) {
      console.log(errors);
    }
  };
  console.log(visibility);
  return (
    <>
      <Box flexGrow={1}>
        <form onSubmit={handleSubmit(onsumit)}>
          <Grid container>
            <Grid
              sx={{ height: "100vh" }}
              size={{ md: 6, xl: 6, sm: 12, xs: 12 }}
            >
              <Stack
                sx={{
                  height: "95%",
                  width: "95%",
                  margin: "auto",
                  marginTop: "1rem",
                  borderRadius: "1rem",
                }}
              >
                <img
                  src={img}
                  alt="reset-img"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "2rem",
                  }}
                />
              </Stack>
            </Grid>

            <Grid
              size={{ md: 6, xl: 6, sm: 12, xs: 12 }}
              sx={{
                height: "100vh",
              }}
            >
              <Grid
                container
                sx={{
                  height: "95%",
                  width: "95%",
                  margin: "auto",
                  marginTop: "1rem",
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Stack sx={{ width: "50px", height: "50px" }}>
                    <img src={imgLogin} alt="Logo" />
                  </Stack>
                  <Stack>
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                      Welcome
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "gray",
                        fontSize: "14px",
                        letterSpacing: "1.5px",
                      }}
                    >
                      Please login here
                    </Typography>
                  </Stack>
                </Stack>
                <Stack sx={{ width: "80%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    {...register("email")}
                  />
                </Stack>
                <Stack sx={{ position: "relative", width: "80%" }}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type={visibility ? "password" : "text"}
                    variant="outlined"
                    sx={{ width: "100%" }}
                    {...register("password")}
                  />
                  {visibility ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setvisibility(!visibility)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => setvisibility(!visibility)}
                    />
                  )}
                </Stack>
                <Stack
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Me"
                  />
                  <Link
                    to={"/forgot-password"}
                    style={{
                      textDecoration: "none",
                      color: "rgba(0, 110, 196, 1)",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Stack>
                <Stack sx={{ width: "80%" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "100%",
                      height: "56px",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Login
                  </Button>
                </Stack>

                <Stack sx={{ position: "relative", width: "80%" }}>
                  <img
                    src={IconGoogle}
                    alt="Sign-with-Goole"
                    style={{
                      width: "30px",
                      height: "30px",
                      position: "absolute",
                      top: "20%",
                      left: "10%",
                    }}
                  />
                  <Button
                    variant="outlined"
                    type="submit"
                    sx={{
                      width: "100%",
                      height: "50px",
                      textTransform: "capitalize",
                      fontSize: "22px",
                      letterSpacing: "1.5px",
                      fontWeight: "500",
                      color: "rgba(56, 62, 73, 1)",
                    }}
                  >
                    Sign in with Google
                  </Button>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Typography variant="body1" sx={{ color: "gray" }}>
                    Don’t have an account?
                  </Typography>
                  <Link
                    to={"/sign-up"}
                    style={{
                      textDecoration: "none",
                      fontFamily: "sans-serif",
                      color: "rgba(19, 102, 217, 1)",
                    }}
                  >
                    Sign up
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Login;
