import { useEffect, useState } from "react";
import SideNav from "../SideNav";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";

const InventoryAdd = () => {
  const [selectItem, setSelectItem] = useState([]);
  const [selectQuantity, setSelecQuantity] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        setSelectItem(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);
  console.log(selectItem);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <SideNav />

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <div className="flex justify-end py-3">
          <button className="btn me-[10px]">Logout</button>
        </div>
        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div
            className="
            lg:mx-[50px] lg:mt-[50px]
            md:mx-[30px] md:mt-[30px]
            sm: mx-[10px] sm: mt-[10px]
            "
          >
            <h1 className="text-center text-4xl font-semibold uppercase">
              Add Inventory
            </h1>
            <hr className="text-center mt-[10px] border border-black" />

            <h1 className="text-2xl font-semibold mt-[50px] mb-[10px]">
              Name:{" "}
            </h1>
            <h1 className="text-2xl font-semibold">Description: </h1>

            {/* Items Section  */}
            <div className="mt-[50px] flex gap-10">
              {/* item selector  */}
              <select className="select select-info w-full max-w-xs">
                <option disabled selected>
                  Select Items
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
              {/* quantity selector  */}
              <select className="select select-accent w-full max-w-xs">
                <option disabled selected>
                  Select Quantity
                </option>
                <option>Auto</option>
                <option>Dark mode</option>
                <option>Light mode</option>
              </select>
              {/* add button  */}
              <button className=" uppercase bg-blue-500 p-1 rounded-lg text-white">
                <FaPlusCircle size={30} />
              </button>
            </div>
            {/* Save button  */}
            <div className="mt-[50px] flex justify-center">
              <button className=" btn uppercase btn-success text-white">
               Save
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryAdd;
