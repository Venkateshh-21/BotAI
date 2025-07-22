import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { startOfDay, format, add, isEqual } from "date-fns";
import ChatCard from "./ChatCard";

const SavedChatCard = ({ details }) => {
  console.log(details);
  const formatDate = (date) => {
    const today = startOfDay(new Date());
    if (isEqual(today, add(date, { days: -1 }))) {
      return "Yesterday's Chats";
    } else if (isEqual(date, today)) {
      return "Todays's Chats";
    } else {
      return format(date, "do LLL yyyy");
    }
  };
  return (
    <Stack spacing={2}>
      <Typography fontWeight={"700"}>
        {formatDate(startOfDay(new Date(details.timestamp)))}
      </Typography>
      <Stack>{details.chat.map(a=>{
        return  <ChatCard details={a} fromHistory={true} />
      })}</Stack>
    </Stack>
  );
};

export default SavedChatCard;
