import { Badges, P } from "../../../AbstractElements";
import { Button } from "reactstrap";
import {
  CustomCompoentType,
  TableTableTypes,
} from "../../../Types/ECommerce.type";
import { TableColumn } from "react-data-table-component";

// Component for showing description
const CustomDescription = ({ text }: CustomCompoentType) => (
  <P className="f-light">{text}</P>
);

// Component for showing status with badges
const CustomStatus = ({ text }: { text: string }) => {
  const color =
    text === "available" ? "success" : text === "book" ? "danger" : "secondary"; // Default to secondary for any other status
  return (
    <Badges color={`light-${color}`} className={`txt-${color}`}>
      {text}
    </Badges>
  );
};

// Adding Delete and Show buttons
const ActionButtons = ({
  onDelete,
  row,
}: {
  onDelete: (id: number) => void;
  row: TableTableTypes;
}) => (
  <div className="action-buttons">
    <Button
      color="danger"
      size="sm"
      onClick={() => onDelete(row.id)}
      style={{ marginRight: "5px" }}
    >
      Delete
    </Button>
  </div>
);

export const TableColumns: TableColumn<TableTableTypes>[] = [
  {
    name: "Title",
    selector: (row) => row.title, // Updated from categoryName to title
    sortable: true,
    width: "20%", // Adjust width as needed
  },
  {
    name: "Description",
    selector: (row) => row.description, // Unchanged
    sortable: true,
    cell: (row) => <CustomDescription text={row.description} />,
    width: "30%", // Adjust width as needed
  },
  {
    name: "Serving",
    selector: (row) => row.serving_persons, // Unchanged
    sortable: true,
    cell: (row) => <CustomDescription text={row.serving_persons} />,
    width: "15%", // Adjust width as needed
  },
  {
    name: "Status",
    selector: (row) => row.status, // Updated from categoryType to status
    sortable: true,
    cell: (row) => <CustomStatus text={row.status} />, // Updated from categoryColor to statusColor
    width: "15%", // Adjust width as needed
  },
  {
    name: "Actions",
    cell: (row) => (
      <ActionButtons
        onDelete={(id) => console.log("Delete", id)} // Pass your actual handleDelete function here
        row={row}
      />
    ),
    width: "20%", // Adjust width as needed
  },
];
