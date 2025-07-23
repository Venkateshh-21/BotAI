import React, { useState, useEffect, useRef } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router";

const Ask = ({ chat, generateResponse, setShouldScrollBottom, clearChat }) => {
  const [input, setInput] = useState("");
  const inputRef=useRef(null)
useEffect(()=>{
  inputRef.current.focus()
})
  const handleSubmit = (e) => {
    e.preventDefault();
    generateResponse(input);
    setInput("");
    setShouldScrollBottom((prev) => !prev);
  };
  const saveToLocal = () => {
    const prevChat = JSON.parse(localStorage.getItem("history")) || [];
    localStorage.setItem(
      "history",
      JSON.stringify([{ chat: chat, timestamp: new Date() },...prevChat])
    );
    clearChat();
  };

  return (
     <Box flexShrink={0}>
      <Box component={"form"}
        onSubmit={handleSubmit}
        sx={{
          marginBottom: "3px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
        }}
      >
        <TextField 
          type="text"
          value={input}
          placeholder="Message Bot AI..."
          onChange={(e) => setInput(e.target.value)}
          // sx={{ width: "60vw" }}
          fullWidth
          required
           inputRef={inputRef}
        />
        <Box sx={{display:"flex",gap:"10px"}}>
        <Button type="submit" variant="contained">
          Ask
        </Button>
        <Button variant="contained" type="button" onClick={saveToLocal}>Save</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Ask;
