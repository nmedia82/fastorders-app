/** @format */

import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { getFormattedDate } from "../../../../../services/helper";

// Custom Badge Component for Error or Success Activities
const CustomBadge = ({
  span,
  color,
  spanClass,
}: {
  span: string;
  color: string;
  spanClass?: string;
}) => (
  <span className={`badge badge-light-${color} txt-${color} ${spanClass}`}>
    {span}
  </span>
);

export default function DashboardRecentActivities() {
  const { allActivities } = useSelector((state: any) => state.app);

  // Get the last 5 activities
  const recentActivities = allActivities.slice(-5).map((activity: any) => ({
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
      selector: (row: any) => row.date,
      sortable: true,
      cell: (row: any) => <p>{row.date}</p>,
      width: "120px", // Set a fixed width for the Date column
    },
    {
      name: "Activity",
      selector: (row: any) => row.activity_text,
      sortable: true,
      grow: 2, // Make this column take the remaining space
      cell: (row: any) => (
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
    <DataTable
      className="custom-scrollbar"
      data={recentActivities}
      columns={activityColumns}
      pagination={false} // No pagination, showing only the recent 5
    />
  );
}
