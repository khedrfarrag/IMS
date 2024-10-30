import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import img from "../assets/images/ResetPass.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

type RESETPASS = {
  email: string;
  password: string;
  confirmPassword: string;
  code: string;
};

const ResetPassword = () => {
  const {
    handleSubmit,
    reset,
    getValues,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RESETPASS>({
    defaultValues: { password: "", email: "", code: "", confirmPassword: "" },
    mode: "onSubmit",
  });
  const onsumit = async (data: RESETPASS) => {
    try {
      console.log(data);
      // const response = await axios.post("", data, {
      //   headers: { Authorization: `barer ${localStorage.getItem("Token")}` },
      // });
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <>
      <Box flexGrow={1}>
        <form onSubmit={handleSubmit(onsumit)}>
          <Grid container>
            <Grid
              sx={{ width: "400px", height: "100vh" }}
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
                }}
              >
                <Stack>
                  <Link to={"/login"} style={{ textDecoration: "none" }}>
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        style={{ color: "black", marginRight: "10px" }}
                      />
                      Back
                    </Typography>
                  </Link>
                </Stack>
                <Stack>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    Reset Password
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "gray",
                      fontSize: "14px",
                      marginTop: "2rem",
                      lineHeight: "24px",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Enter your OTP , and all data to reset your password
                  </Typography>
                </Stack>
                <Stack>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{ width: "80%" }}
                    {...register("email")}
                  />
                </Stack>
                <Stack>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ width: "80%" }}
                    {...register("password")}
                  />
                </Stack>
                <Stack>
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    sx={{ width: "80%" }}
                    {...register("confirmPassword")}
                  />
                </Stack>
                <Grid
                  sx={{
                    width: "80%",
                    display: "flex",
                  }}
                >
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "50%" }}
                      {...register("code")}
                    />
                  </Stack>
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "50%" }}
                      {...register("code")}
                    />
                  </Stack>
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "50%" }}
                      {...register("code")}
                    />
                  </Stack>
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "50%" }}
                      {...register("code")}
                    />
                  </Stack>
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "50%" }}
                      {...register("code")}
                    />
                  </Stack>
                </Grid>
                <Stack>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "80%",
                      height: "56px",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      letterSpacing: "1.5px",
                    }}
                  >
                    Verify
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default ResetPassword;