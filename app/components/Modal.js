"use client";
import { Button } from "antd";
import { useState } from "react";

export const Modal = () => {
  const [model, setModel] = useState("");
  const [driverName, setDriverName] = useState("");
  const [plateNo, setPlateNo] = useState("");
  const [license, setLicense] = useState("");
  const [id, setID] = useState("");
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-white rounded shadow-md p-6 w-1/2 h-1/2">
        <div className="flex items-center justify-between w-full">
          <span className="text-xl ">Input Car Details:</span>
          <span className="text-xl cursor-pointer">❌</span>
        </div>

        {/* There is a problem with the width of the label in ratio to the input tags multiple input fields don't line up I fixed it by adding a width to the label tag but I feel it's bad practice and there's prolly a better way of going about it  */}

        <form
          action=""
          className="mt-4 flex flex-col justify-center items-start w-full"
        >
          <div className="flex items-center w-full">
            <label htmlFor="model" className="w-28">
              Car Model:
            </label>
            <input
              type="text"
              name="model"
              id="model"
              className="border-2  border-gray-500 rounded-md px-2 w-2/3"
            />
          </div>
          <div className="flex  items-center mt-2 w-full">
            <label htmlFor="driver" className="w-28">
              Driver Name:
            </label>
            <input
              type="text"
              name="driver"
              id="driver"
              className="border-2 border-gray-500 rounded-md px-2 w-2/3"
            ></input>
          </div>
          <div className="flex  items-center mt-2 w-full">
            <label htmlFor="plateNo" className="w-28">
              Plate No:
            </label>
            <input
              type="text"
              name="plateNo"
              id="plateNo"
              className="border-2 border-gray-500 rounded-md px-2 w-2/3"
            ></input>
          </div>
          <div className="flex  items-center mt-2 w-full">
            <label htmlFor="license" className="w-28">
              License:
            </label>
            <input
              type="text"
              name="license"
              id="license"
              className="border-2 border-gray-500 rounded-md px-2 w-2/3"
            ></input>
          </div>
          <div className="flex  items-center mt-2 w-full">
            <label htmlFor="id" className="w-28">
              ID:
            </label>
            <input
              type="text"
              name="id"
              id="id"
              className="border-2 border-gray-500 rounded-md px-2 w-2/3"
            ></input>
          </div>
        </form>
        <Button
          className="mt-4 bg-green-500 w-1/3 hover:scale-105"
          type="primary"
          size="large"
        >
          Register
        </Button>
      </div>
    </div>
  );
};
