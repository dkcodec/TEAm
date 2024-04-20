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
          body: JSON.stringify(
            `Добро пожаловать в CityPass - вашего надежного партнера в планировании поездок и исследовании города Астана, великолепной столицы Казахстана. Мы гордимся тем, что предоставляем уникальные возможности для знакомства с этим захватывающим городом, его культурным наследием, а также предоставляем информацию о разнообразных маршрутах, достопримечательностях и ценах на проживание.

            Астана, преобразованная в Нур-Султан, является великолепным смесью современных высотных зданий и традиционной культуры. Наша компания предоставляет полную информацию о самых интересных местах, которые стоит посетить в этом городе. Вы можете исследовать его знаменитые достопримечательности, такие как Байтерек, с символичной вышкой, отражающей стремление страны к новым высотам; Национальный музей Республики Казахстан, где вы сможете погрузиться в богатую историю и культуру нации; и многое другое.
            
            Наша компания также предоставляет информацию о различных маршрутах для оптимального использования вашего времени в городе. Мы поможем вам составить идеальный план вашей поездки, включая маршруты обзорных экскурсий, популярные места для фотосессий, рестораны и кафе с местной кухней, а также места для шопинга и развлечений.
            
            Кроме того, CityPass предоставляет информацию о различных вариантах проживания в городе. Мы сотрудничаем с различными отелями, хостелами, апартаментами и гостевыми домами, чтобы помочь вам найти идеальное жилье в соответствии с вашим бюджетом и предпочтениями.
            
            Наша цель - сделать ваше пребывание в Астане незабываемым и максимально комфортным. С CityPass вы получаете не только доступ к самой актуальной информации о городе, но и персонализированное внимание и поддержку на всех этапах вашей поездки.
            
            Не стесняйтесь обращаться к нам с любыми вопросами или запросами. Мы здесь, чтобы помочь вам сделать ваше путешествие по Астане по-настоящему незабываемым! ${inputText} `
          ),
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
