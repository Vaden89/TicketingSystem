"use client";
import { Button, Table } from "antd";
import { useState, useEffect } from "react";
import { Modal } from "../components/Modal";
import { vehicleService } from "../services/vehicle.service";
import { Loading } from "../components/Loading";
import { AuthService } from "../services/auth.service";

const columns = [
  {
    title: "ID",
    dataIndex: "$id",
    key: "$id",
  },
  {
    title: "Driver's Name",
    dataIndex: "driver",
    key: "driver",
  },
  {
    title: "Car Model",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Plate Number",
    dataIndex: "plateNo",
    key: "plateNo",
  },
  {
    title: "Driver's License",
    dataIndex: "license",
    key: "license",
  },
];

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(0);
  const [data, setData] = useState([]);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const logout = async () => {
    try {
      setLogoutLoading(true);
      const res = await AuthService.logout();
      console.log(res);
    } catch (error) {
      throw new Error("There was an error while logging out", error);
    } finally {
      setLogoutLoading(false);
    }
  };

  const getVehicleInfo = async () => {
    try {
      const res = await vehicleService.getRegisteredVehicles();
      setData(res.documents);
      console.log(res);
    } catch (error) {
      throw new Error("Error Fetching Vehicle Data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVehicleInfo();
  }, [update]);

  const updateTable = (data) => {
    setUpdate(data);
  };

  const handleModal = (modalState) => {
    setModalOpen(modalState);
  };

  if (loading) {
    return <Loading />;
  }

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
          loading={logoutLoading}
          onClick={logout}
        >
          Logout
        </Button>
      </div>
      <Table
        dataSource={data}
        rowKey={(data) => data.$id}
        columns={columns}
        pagination={{
          defaultCurrent: 1,
          total: data.length,
          pageSize: 8,
        }}
      />
      {modalOpen ? (
        <Modal handleModal={handleModal} updateTable={updateTable} />
      ) : null}
    </div>
  );
}
