# TEAm

Hackaton 2024 CROCOS / GOOGLE DEVELOPMENT STUDENT CLUB

# CityPass ChatBot

Проект CityPass ChatBot представляет собой простого чат-бота, который предоставляет информацию о достопримечательностях, маршрутах и других интересных местах города Астана, Казахстан.

## Функционал

- Пользователи могут отправлять сообщения с запросами о различных местах, например: "карта".
- Бот отвечает на запросы пользователя, предоставляя соответствующую информацию.

## Технологии

- Frontend: TypeScript, Next.js, React.js
- Backend: FastAPI (Python)
- Модель генерации текста: Google GenerativeAI
- Хранение истории чата: SQLite

## Запуск проекта

1. Установите зависимости для frontend и backend:

   ```bash
   cd ../backend
   uvicorn py:app --reload
   cd frontend
   npm install
   npm run dev
   ```
