import React from "react";
import ApprovedAppointment from "../components/ApprovedAppointment";
import { Tabs } from "antd";

const Upcomming = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: id == 1 ? "Approved" : id == 2 ? "Pending" : "Rejected",
          key: id,
          children: <ApprovedAppointment />,
        };
      })}
    />
  );
};

export default Upcomming;
