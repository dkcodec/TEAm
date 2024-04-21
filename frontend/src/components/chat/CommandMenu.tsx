import React from "react";

interface CommandMenuProps {
  handleCommand: () => void;
}

const CommandMenu: React.FC<CommandMenuProps> = ({ handleCommand }) => {
  return (
    <div>
      <h2>Команды:</h2>
      <button onClick={handleCommand}>Маршрут</button>
      <button onClick={handleCommand}>Карта</button>
      <button onClick={handleCommand}>Привет</button>
    </div>
  );
};

export default CommandMenu;
