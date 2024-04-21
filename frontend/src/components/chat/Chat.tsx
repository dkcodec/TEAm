"use client";
import React, { useState } from "react";
import styles from "./chat.module.css";
import MapCard from "../map/Map";
import CommandMenu from "./CommandMenu";
import AttractionsMenu from "./AttractionsMenu";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [mapLocation, setMapLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleMapCommand = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setMapLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;
    setInputText("");

    const userMessage = inputText;
    setMessages((prevMessages) => [...prevMessages, { text: userMessage }]);

    if (
      inputText.toLowerCase() !== "карта" &&
      inputText.toLowerCase() !== "маршрут"
    ) {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/" + encodeURIComponent(inputText),
          {
            method: "POST",
          }
        );

        if (!response.ok) {
          throw new Error("Ошибка HTTP: " + response.status);
        }

        const responseData = await response.json();
        setMessages((prevMessages) => [...prevMessages, responseData]);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    } else {
      handleMapCommand();
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.isBotMessage ? styles.botMessage : styles.userMessage
            }
          >
            {message.text}
            {message.text.toLowerCase() === "карта" && mapLocation && (
              <MapCard
                latitude={mapLocation.latitude}
                longitude={mapLocation.longitude}
              />
            )}
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
