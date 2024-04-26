
import { useState } from 'react';
import SideNav from '../SideNav';

import { FaPlusCircle } from "react-icons/fa";

const InventoryEdit = () => {

    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    return (
        <div className="flex h-screen bg-gray-100">
        {/* Mobile and medium device sidebar toggle button */}
  <SideNav/>
  
        {/* ----------------Main content -------------------*/}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
  <div className="flex justify-end py-3"><button className="btn me-[10px]">Logout</button></div>
          {/* Page content */}
{/* Page content */}
<main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div
            className="
            lg:mx-[50px] lg:mt-[50px]
            md:mx-[30px] md:mt-[30px]
            sm: mx-[10px] sm: mt-[10px]
            "
          >
            {/* title  */}
            <h1 className="text-center text-4xl font-semibold uppercase">
              Update Inventory
            </h1>
            <hr className="text-center mt-[10px] border border-black" />

            {/* Item Name Input */}
            <div className="mt-[50px]">
              <label htmlFor="itemName" className="text-2xl font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="itemName"
                className="input input-info mt-2 w-full max-w-xs ms-2"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>

            {/* Item Description Input */}
            <div className="mt-[20px]">
              <label htmlFor="itemDescription" className="text-2xl font-semibold">
                Description:
              </label>
              <input
                type="text"
                id="itemDescription"
                className="input input-info mt-2 w-full max-w-xs ms-2"
                value={itemDescription}
                onChange={(e) => setItemDescription(e.target.value)}
              />
            </div>

            {/* Items Section  */}
            <div className="mt-[50px] flex gap-4">
              {/* item selector  */}
              <select className="select select-info w-full max-w-xs">
                <option disabled selected>
                  Select Items
                </option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
                 {/* Quantity Input */}
                 <input
                type="text"
                className="input input-accent w-full max-w-xs"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
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

export default InventoryEdit;