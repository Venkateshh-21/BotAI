import React, { useEffect, useState } from "react";
import ai from "../assets/Ai.png";
import user from "../assets/User.png";
import { Box, Stack, Typography, Rating, IconButton } from "@mui/material";
import { format } from "date-fns";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const ChatCard = ({
  details,
  setSelChatId,
  setIsModalOpen,
  setChat,
  fromHistory,
}) => {
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);
  useEffect(() => {
    setChat((prev) => {
      return prev.map((a) => {
        if (a.id == details.id) {
          return { ...a, rating: rating };
        } else {
          return { ...a };
        }
      });
    });
  }, [rating]);
  console.log(details);
  return (
    <Stack direction={"row"} spacing={2}>
      <Box
        height={40}
        width={40}
        component={"img"}
        src={details.type == "user" ? user : ai}
      />
      <Stack>
        <Typography variant="heading" fontWeight={600}>{details.type == "user" ? "You" : "Soul AI"}</Typography>
        <Typography>{details.text}</Typography>
        <Typography>{format(details.time, "hh:mm a")}</Typography>
        {details.type !== "user" && !fromHistory && (
          <Stack direction={"row"} className="feedback-btns" spacing={1}>
            <IconButton size="small" onClick={() => setRated((prev) => !prev)}>
              {!rated && <ThumbUpOffAltIcon />}
              {rated && <ThumbUpAltIcon />}
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                setSelChatId(details.id);
                setIsModalOpen();
              }}
            >
              <ThumbDownOffAltIcon />
            </IconButton>
          </Stack>
        )}
        {(rated || details.rating > 0) && details.type == "sys" && (
          <Box>
            <Typography>
              {fromHistory ? "Rating" : "Please rate this response"}
            </Typography>
            <Rating
              name="simple-controlled"
              readOnly={fromHistory}
              value={details.rating ? details.rating : 0}
              onChange={(e, newVal) => setRating(newVal)}
            />
          </Box>
        )}
        {details.feedback && (
                    <Typography
                        pt={1}
                        fontSize={{ xs: 10, md: 16 }}
                    >
                        <Box component={'span'} fontWeight={600}>
                            Feedback:
                        </Box>
                        <Box component={'span'}>
                            {` ${details.feedback}`}
                        </Box>
                    </Typography>
                )}
      </Stack>
    </Stack>
  );
};

export default ChatCard;
