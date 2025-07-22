import { useState } from "react";
import { Outlet } from "react-router";
import { CssBaseline } from "@mui/material";
import {Grid} from "@mui/material";

import SideBar from "./components/SideBar";
import { Height } from "@mui/icons-material";
function App() {
  const [chat, setChat] = useState([]);
  const [isSideBaropen, setIsSideBarOpen] = useState(false);
  const closeMenu = () => {
    {
      setIsSideBarOpen(false);
    }
  };
  return (
    <>
      <CssBaseline />
      <Grid container sx={{height:"100vh",width:"100vw"}}>
        <Grid
         size={{ xs: 12, md: 3 }}
          sx={{
            bgcolor: "primary.light",
            "@media (max-width:800px)": {
            
              transform: isSideBaropen ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 400ms ease",
            },
          }}
          position={{ xs: "fixed", md: "relative" }}
          height={"100vh"}
          zIndex={{ xs: 9999, md: 1 }}
          boxShadow={{ xs: isSideBaropen ? 10 : 0, md: 0 }}
        >
          <SideBar setChat={setChat} closeMenu={closeMenu} />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Outlet context={{ chat, setChat, setIsSideBarOpen }} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
