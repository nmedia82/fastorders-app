import React from "react";
import "./StatusButton.css"; // Import custom CSS for animation and styling

interface StatusButtonProps {
  status: string;
  isCurrent?: boolean;
  onClick?: () => void;
}

const StatusButton: React.FC<StatusButtonProps> = ({
  status,
  isCurrent = false,
  onClick,
}) => {
  return (
    <button
      className={`status-button ${isCurrent ? "status-button-current" : ""}`}
      onClick={onClick}
    >
      {status}
    </button>
  );
};

export default StatusButton;
