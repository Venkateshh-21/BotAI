import React, { useEffect, useRef, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useOutletContext } from "react-router";
import data from "../Sampledata/sampleData.json";
import NavBar from "../components/NavBar";
import InitialChat from "../components/InitialChat";
import ChatCard from "../components/ChatCard";
import Ask from "../components/Ask";
import CustomModal from "../components/CustomModal";
const Home = () => {
  const { chat, setChat } = useOutletContext();
  const chatsRef = useRef(null);
  const [chatId, setChatId] = useState(1);
  const [selChatId, setSelChatId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldScrollBottom, setShouldScrollBottom] = useState(false);


  useEffect(() => {
    chatsRef.current?.lastElementChild?.scrollIntoView();
  }, [shouldScrollBottom]);

  const clearChat = () => {
    setChat([]);
  };
  const generateResponse = (input) => {
    const response = data.find(
      (a) => input.toLowerCase() == a.question.toLowerCase()
    );
    let reply = "";
    if (response) {
      reply = response.response;
    } else {
      reply = "Sorry, Did not understand your query!";
    }
    setChat((prev) => [
      ...prev,
      {
        type: "user",
        id: chatId,
        text: input,
        time: new Date(),
      },
      {
        type: "sys",
        id: chatId + 1,
        text: reply,
        time: new Date(),
      },
    ]);
    setChatId((prev) => prev + 2);
  };
  console.log(chat.length);
  return (
    <Stack
      width={{ sm: 4, md: 2, lg: 1 }}
      sx={{
        height: "100vh",
        background: "linear-gradient(  #EDE4FF 10%, #F9FAFA 90%)",
      }}
    >
      <NavBar />

      {!chat.length ? (
        <InitialChat generateResponse={generateResponse} />
      ) : (
        <Stack
          height={1}
          flexGrow={0}
          p={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3 }}
          sx={{
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(151, 133, 186,0.4)",
              borderRadius: "8px",
            },
          }}
          ref={chatsRef}
        >
          {chat.map((a, i) => (
            <ChatCard
              details={a}
              key={i}
              setChat={setChat}
              setSelChatId={setSelChatId}
              setIsModalOpen={() => setIsModalOpen(true)}
              fromhistory={false}
            />
          ))}
        </Stack>
      )}
      <Ask
        chat={chat}
        generateResponse={generateResponse}
        setShouldScrollBottom={setShouldScrollBottom}
        clearChat={clearChat}
      />
      <CustomModal
        setChat={setChat}
        selChatId={selChatId}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Stack>
  );
};

export default Home;
