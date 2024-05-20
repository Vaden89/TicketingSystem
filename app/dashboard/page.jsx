"use client";
import { Button, Table } from "antd";
import { useState } from "react";
import { Modal } from "../components/Modal";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    lastname: "Olotoyin",
    age: 32,
    address: "10 Downing Street",
    licenseNo: "891caljsca8233",
  },
  {
    key: "2",
    name: "John",
    lastname: "bellion",
    age: 42,
    address: "10 Downing Street",
    licenseNo: "129cjnc1023",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, { lastname }) => {
      return <span>{text + " " + lastname}</span>;
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "License No",
    dataIndex: "licenseNo",
    key: "licenseNo",
  },
];

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <Button
          onClick={() => setModalOpen(true)}
          type="primary"
          size="large"
          className="bg-green-500"
        >
          Register Vehicle
        </Button>
        <Button
          className="bg-red-500"
          type="primary"
          size="large"
          loading={false}
        >
          Logout
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      {modalOpen ? <Modal /> : null}
    </div>
  );
}
