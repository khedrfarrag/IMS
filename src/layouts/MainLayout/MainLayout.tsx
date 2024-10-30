import { Drawer, NavBar } from "../../components/common";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer />
        <Box
          component="main"
          sx={{
            minWidth: "100%",
          }}
          display="flex"
          flexDirection={"column"}
        >
          <NavBar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
