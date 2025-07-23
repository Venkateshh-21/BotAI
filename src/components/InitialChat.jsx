import React from "react";
import Logo from "../assets/logo.png";
import { Box, Stack, Typography, Grid } from "@mui/material";
const initlData = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you",
];
const subHead = "Get immediate AI generated response";
const Card = ({ caption, heading, generateResponse }) => {
  return (
    <Stack
    p={4}
      width={"auto"}
      spacing={1}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={() => generateResponse(heading)}
      borderRadius={"8px"}
      bgcolor={"white"}
      whiteSpace={"nowrap"}
      sx={{
        "&:hover .MuiIconButton-root": {
          opacity: 2,
        },
        cursor: "pointer",
        "&:hover": {
          bgcolor: "primary.bglight",
        },
      }}
    >
      
        <Typography
          variant="heading"
          fontWeight={700}
          fontSize={{ xs: 14, md: 20 }}
        >
          {heading}
        </Typography>
        <Typography
          color={"gray"}
          fontSize={{ xs: 10, md: 14 }}
        
          sx={{
            whiteSpace: "nowrap",
           
          }}
        >
          {caption}
        </Typography>
      
    </Stack>
  );
};

const InitialChat = ({ generateResponse }) => {
  return (
    <Stack
      spacing={2}
      height={1}
      justifyContent={"flex-end"}
      p={{ xs: 2, md: 3 }}
    >
      <Stack sx={{ alignItems: "center" }} spacing={3}>
        <Typography variant="h2">How Can I Help You Today?</Typography>
        <Box
          component={"img"}
          src={Logo}
          height={{ xs: 40, md: 80 }}
          width={{ xs: 40, md: 80 }}
        />
      </Stack>
      <Grid container size={{ xs: 12, md: 12 }} spacing={5} width={"100%"}>
        {initlData.map((a, i) => {
          return (
            <Grid key={i} size={{ xs: 12, md: 6 }} >
              <Card
                heading={a}
                caption={subHead}
                generateResponse={generateResponse}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default InitialChat;
