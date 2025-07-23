import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import FilByRating from "../components/FilByRating";
import SavedChatCard from "../components/SavedChatCard";
const Pastconvo = () => {
  const [chats, setChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState([]);
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("history") || [];
    if (dataFromLocal.length) {
      setChats(JSON.parse(dataFromLocal));
      setFilteredChats(JSON.parse(dataFromLocal));
    }
  }, []);
  console.log(chats.length)
  return (
    <Stack paddingLeft={"30px"} paddingTop={"20px"} spacing={1}>
      <NavBar />
      <Stack spacing={2}>
        <Typography
          variant="h2"
          textAlign={"center"}
          sx={{ fontWeight: "600", fontSize: "30px" }}
        >
          Conversation History
        </Typography>
        {chats.length ? (
          <FilByRating chats={chats} setFilteredChats={setFilteredChats} />
        ) : (
          <Typography textAlign={"center"} mt={3}>
            No chats found in history
          </Typography>
        )}
         {chats.length&& !filteredChats.length && <Typography>
          No results</Typography>}
          {filteredChats.length?<Stack>
            {filteredChats.map((a,i)=>{
             return <SavedChatCard details={a} key={i+1} />
            })}
          </Stack>:""}
      </Stack>
    </Stack>
  );
};

export default Pastconvo;
