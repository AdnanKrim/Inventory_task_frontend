
import { useEffect, useState } from 'react';
import SideNav from '../SideNav';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import Swal from 'sweetalert2';

const InventoryEdit = () => {

  const { inventoryId } = useParams();
  const [getItem, setGetItem] = useState([]);
  const [selectItem, setSelectItem] = useState([]);
  const [id, setId] = useState("");
  const [invName, setInvName] = useState("");
  const [description, setDescription] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [selector, setSelector] = useState("");
  const [items, setItems] = useState([{ item: "", quantity: "" }]);

  useEffect(() => {
    const fetchInventoryGet = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`https://inventory.4softbd.com/api/inventory-detail/${inventoryId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const inventoryData = res.data.inventory;
        setGetItem(inventoryData);
        setId(inventoryData.id);
        setInvName(inventoryData.invName);
        setDescription(inventoryData.description);
        const defaultItems = inventoryData.itm.map(item => ({ item: item.itemId, quantity: item.quantity }));
        setItems(defaultItems);
      } catch (error) {
        console.error("Error fetching inventory details:", error);
      }
    };
    console.log(getItem)

    fetchInventoryGet();
  }, []);
  useEffect(() => {
    const fetchInventoryAdd = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://inventory.4softbd.com/api/item-list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSelectItem(res.data.items);
      } catch (error) {
        console.error("Error fetching inventory details:", error);
      }
    };

    fetchInventoryAdd();
  }, []);

  // handleAddItem---------------------
  const handleAddItem = () => {
    setItems([...items, { item: "", quantity: "" }]);
  };

  // handleDeleteItem-----------------------
  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  // handleItemChange -----------------------
  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index].item = value;
    setItems(newItems);
  };

  // handleQuantityChange--------------------
  const handleQuantityChange = (index, value) => {
    const newItems = [...items];
    newItems[index].quantity = value;
    setItems(newItems);
  };

  // handle save ------------------------
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      // Construct the payload containing the updated inventory data
      const payload = {
        id: id,
        invName: invName,
        description: description,
        items: items.map(item => ({ itemId: item.item, quantity: item.quantity }))
      };
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: "Inventory data Updated successfully",
      });
      // Send a POST request to save the inventory data
      const res = await axios.post("https://inventory.4softbd.com/api/inventory-update", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Inventory data saved successfully:", res.data);
    } catch (error) {
      console.error("Error saving inventory:", error);
      // Handle errors here
    }
  };
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <SideNav />

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

            {/* Id Input */}
            <div className="mt-[50px]">
              <label htmlFor="id" className="text-2xl font-semibold">
                Id:
              </label>
              <input
              readOnly
                type="text"
                id="id"
                className="input input-info mt-2 w-full max-w-xs ms-2"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            {/* Item Name Input */}
            <div className="mt-[50px]">
              <label htmlFor="invName" className="text-2xl font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="invName"
                className="input input-info mt-2 w-full max-w-xs ms-2"
                value={invName}
                onChange={(e) => setInvName(e.target.value)}
              />
            </div>

            {/* Item Description Input */}
            <div className="mt-[20px]">
              <label htmlFor="description" className="text-2xl font-semibold">
                Description:
              </label>
              <input
                type="text"
                id="description"
                className="input input-info mt-2 w-full max-w-xs ms-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Items Section  */}
            <div className="mt-[50px]">
              {/* plus button  */}
              <div className="flex justify-end mb-[20px]">
                <button
                  className="uppercase bg-blue-500 p-1 rounded-lg text-white mt-4"
                  onClick={handleAddItem}
                >
                  <FaPlusCircle size={30} />
                </button>
              </div>
              {items.map((item, index) => (
                <div className="flex gap-4 items-center mb-[20px]" key={index}>
                  {/* item selector  */}
                  <select
                    className="select select-info w-full max-w-xs"
                    value={item.item}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                  >
                    <option value="">Select Items</option>
                    {selectItem.map((item, index) => (
                      <option
                        key={index}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {/* Quantity Input */}
                  <input
                    type="text"
                    className="input input-accent w-full max-w-xs"
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  />
                  {/* minus button  */}
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="uppercase bg-blue-500 p-1 rounded-lg text-white "

                  >
                    <FaCircleMinus size={30} />
                  </button>
                </div>
              ))}

            </div>
            {/* Save button  */}
            <div
              onClick={handleSave}
              className="my-[50px] flex justify-center">
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