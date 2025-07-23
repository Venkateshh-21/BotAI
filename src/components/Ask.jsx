import React, { useState, useEffect, useRef } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router";

const Ask = ({ chat, generateResponse, setShouldScrollBottom, clearChat }) => {
  const [input, setInput] = useState("");

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
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "3px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
        }}
      >
        <input
          type="text"
          value={input}
          placeholder="Message Bot AI…"
          onChange={(e) => setInput(e.target.value)}
          
          id="ask-input"
          required
   
        />
        
        <button type="submit" >
          Ask
        </button>
        <button variant="contained" type="button" onClick={saveToLocal}>Save</button>
        
      </form>
    </Box>
  );
};

export default Ask;
