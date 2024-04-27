import { Link, useParams } from "react-router-dom";
import SideNav from "../SideNav";
import { useEffect, useState } from "react";
import axios from "axios";


const InventoryDetails = () => {

  const [inventoryDetails, setInventoryDetails] = useState([]);
  const { inventoryId } = useParams();

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`https://inventory.4softbd.com/api/inventory-detail/${inventoryId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInventoryDetails(res.data.inventory);
      } catch (error) {
        console.error("Error fetching inventory details:", error);
      }
    };

    fetchInventoryDetails();
  }, []);


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <SideNav />

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <div className="flex justify-end py-3"><button className="hidden btn me-[10px]">Logout</button></div>
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
              Inventory Details
            </h1>
            <hr className="text-center mt-[10px] border border-black" />
            {/* add button  */}
            <div className="mt-[50px] flex justify-end">
              <Link to={`/inverntoryUpdate/${inventoryDetails.id}`}>
                <button className=" btn uppercase btn-info text-white">
                  Update
                </button>
              </Link>
            </div>
            {/* info section  */}
            <h1 className="text-2xl font-semibold mb-[10px]">Name: {inventoryDetails.invName}</h1>
            <h1 className="text-2xl font-semibold">Description: {inventoryDetails.description}</h1>
            {/* table section   */}
            <div className="overflow-x-auto my-[50px]">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th>index</th>
                    <th>image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryDetails.itm ? (
                    inventoryDetails.itm.map((item, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td><img className="w-[40px] h-[40px] rounded-full" src={item.imgLink} alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">Loading...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryDetails;