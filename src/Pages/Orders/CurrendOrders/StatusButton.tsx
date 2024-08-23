import React from "react";
import "./StatusButton.css"; // Import custom CSS for animation and styling

interface StatusButtonProps {
  item: any;
  isCurrent?: boolean;
  allOrderStatuses: { [key: string]: string }; // Type for allOrderStatuses
  onOrderStatusChange: (orderId: number, status: string) => void;
}

const StatusButtons: React.FC<StatusButtonProps> = ({
  item,
  isCurrent = false,
  allOrderStatuses,
  onOrderStatusChange,
}) => {
  // Filter out "completed", "cancelled", and the current status
  const statusEntries = Object.entries(allOrderStatuses).filter(
    ([key, value]) =>
      value !== item.order_status && key !== "completed" && key !== "cancelled"
  );

  return (
    <div className="status-buttons-container">
      {statusEntries.map(([key, value]: [string, string]) => (
        <button
          key={key}
          className="status-button"
          onClick={() => onOrderStatusChange(item.id, key)}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default StatusButtons;
