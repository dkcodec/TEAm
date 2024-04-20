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

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: inputText,
      isBotMessage: false,
    };

    const botResponse: ChatMessage = {
      id: messages.length + 2,
      text: generateBotResponse(inputText),
      isBotMessage: true,
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputText("");
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Предотвращаем стандартное действие Enter в поле ввода (новая строка)
      handleSendMessage(); // Вызываем функцию отправки сообщения
    }
  };

  const generateBotResponse = (userMessage: string): string => {
    return "Привет!";
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
