/** @format */

import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { getFormattedDate } from "../../services/helper";
import { H1 } from "../../AbstractElements";

// Custom Badge Component for Error or Success Activities
const CustomBadge = ({ span, color, spanClass }) => (
  <span className={`badge badge-light-${color} txt-${color} ${spanClass}`}>
    {span}
  </span>
);

export default function ActivitiesPage() {
  const { allActivities } = useSelector((state) => state.app);

  // Get the last 5 activities
  const recentActivities = allActivities.map((activity) => ({
    ...activity,
    date: getFormattedDate(activity.date_created),
    activityBadge: (
      <CustomBadge
        span={activity.is_error === "1" ? "Error" : "Success"}
        color={activity.is_error === "1" ? "danger" : "success"}
      />
    ),
  }));

  // Define the columns for the activities DataTable
  const activityColumns = [
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
      cell: (row) => <p>{row.date}</p>,
      width: "120px", // Set a fixed width for the Date column
    },
    {
      name: "Activity",
      selector: (row) => row.activity_text,
      sortable: true,
      grow: 2, // Make this column take the remaining space
      cell: (row) => (
        <div>
          <p>
            {row.activity_text}
            {row.link && (
              <a
                href={row.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "8px" }}
              >
                <i className="icofont icofont-external-link"></i>
              </a>
            )}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="page-body">
      <Card className="height-equal">
        <CardHeader className="card-no-border">
          <H1>{"Activities"}</H1>
        </CardHeader>
        <CardBody>
          <DataTable
            className="custom-scrollbar"
            data={recentActivities}
            columns={activityColumns}
            pagination={false} // No pagination, showing only the recent 5
          />
        </CardBody>
      </Card>
    </div>
  );
}
