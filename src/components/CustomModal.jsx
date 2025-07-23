import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import img from "../assets/feedback.png";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const CustomModal = ({ setChat, selChatId, isModalOpen, setIsModalOpen }) => {
  const [input, setInput] = useState("");
  const handleClose = () => {
    setIsModalOpen(false);
    setInput("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setChat((prev) => {
    return  prev.map((a) => {
        if (a.id == selChatId) {
          return { ...a, feedBack: input };
        } else {
          return a;
        }
      });
    });
    setInput("")
    setIsModalOpen(false)
  };
  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} gap={2}>
            <Box component={"img"} src={img} width={20} height={20} />
            <Typography>Provide Additional Feedback</Typography>
          </Stack>
          <Button
            onClick={handleClose}
            sx={{ color: "black", fontWeight: "bold" }}
          >
            X
          </Button>
        </Stack>
        <form
          action="" onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "5px",
          }}
        >
          <TextareaAutosize
            minRows={10}
            style={{ width: "100%" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CustomModal;
