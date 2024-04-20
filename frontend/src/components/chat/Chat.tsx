"use client";

import React, { useState } from "react";
import styles from "./chat.module.css";

interface ChatMessage {
  id: number;
  text: string;
  isBotMessage: boolean;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: inputText,
      isBotMessage: false,
    };

    setMessages([...messages, userMessage]);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/" + encodeURIComponent(inputText),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputText }),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка HTTP: " + response.status);
      }

      const responseData = await response.json();
      const botResponse: ChatMessage = {
        id: responseData.id,
        text: responseData.text,
        isBotMessage: true,
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Ошибка:", error);
    }

    setInputText("");
  };

  const handleInputKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await handleSendMessage();
    }
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatMessages}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.isBotMessage ? styles.botMessage : styles.userMessage
            }
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.chatInput}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
