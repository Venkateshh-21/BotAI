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
    <div>
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
        <TextField
          value={input}
          placeholder="Message Bot AI..."
          onChange={(e) => setInput(e.target.value)}
          sx={{ width: "60vw" }}
        />
        <Button type="submit" variant="contained">
          Ask
        </Button>
        <Button variant="contained" onClick={saveToLocal}>Save</Button>
      </form>
    </div>
  );
};

export default Ask;
