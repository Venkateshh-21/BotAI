import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link, useOutletContext } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";

const NavBar = () => {
  const { setIsSideBarOpen } = useOutletContext();
  const isSmallDevice = useMediaQuery("max-width:800px");
  return (
    <Stack component={"header"}>
      <Stack>
        {isSmallDevice ? <MenuIcon onClick={()=>setIsSideBarOpen(prev =>!prev)} /> : ""}
        <Link style={{ textDecoration: "none" }}>
          <Typography component={"h1"} variant="h1">
            BotAI
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default NavBar;
