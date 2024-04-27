import { Link } from "react-router-dom";
import SideNav from "../SideNav";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemsList = () => {

const [itemsList , setItemsList] = useState([]);

  // get inventory list  -----------------------
  useEffect(() => {
    const fetchItemsList = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://127.0.0.1:8000/api/item-list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItemsList(res.data.items);
    };

    fetchItemsList();
  }, []);
  console.log(itemsList);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <SideNav />

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <div className="flex justify-end py-3">
          <button className=" me-[10px]"></button>
        </div>
        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div
            className="
            lg:mx-[50px] lg:mt-[50px]
            md:mx-[30px] md:mt-[30px]
            sm: mx-[10px] sm: mt-[10px]
            "
          >
            {/* title  */}
            <h1 className="text-center text-4xl font-semibold uppercase">
              Items List
            </h1>
            <hr className="text-center mt-[10px] border border-black" />
            {/* add button  */}
            <div className="my-[50px] flex justify-end">
              <Link to="/itemsAdd">
                <button className=" btn uppercase btn-info text-white">
                  add
                </button>
              </Link>
            </div>
            {/* items list Section  */}
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-base-200">
                    <th>index</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                {itemsList.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img className="w-[50px] h-[50px] rounded-full" src={item.imgLink} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ItemsList