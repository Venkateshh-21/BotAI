import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Select, MenuItem } from "@mui/material";

const FilByRating = ({ chats, setFilteredChats }) => {
  const [selectedOption, setSelectedOption] = useState("all");
  useEffect(() => {
    if (selectedOption == "all") {
      setFilteredChats(chats);
    } else {
      const filData = chats.filter((a) => {
        console.log(a)
        let isFound = false;
        a.chat.forEach((i) => {
          if (i.rating == selectedOption) {
            isFound = true;
          }
        });
        return isFound;
      });
      setFilteredChats(filData);
    }
  }, [selectedOption]);
  const onChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <Stack>
      <Typography fontWeight={"600"} fontSize={"20px"}>
        Filter By Rating
      </Typography>
      <Select  size="small" value={selectedOption} onChange={onChange} sx={{width:"15vw"}}>
        <MenuItem value={"all"}>All-Ratings</MenuItem>
        <MenuItem value={1}>1 Star</MenuItem>
        <MenuItem value={2}>2 Stars</MenuItem>
        <MenuItem value={3}>3 Stars</MenuItem>
        <MenuItem value={4}>4 Stars</MenuItem>
        <MenuItem value={5}>5 Stars</MenuItem>
      </Select>
    </Stack>
  );
};

export default FilByRating;
