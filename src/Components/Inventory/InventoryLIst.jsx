import { Link } from "react-router-dom";
import SideNav from "../SideNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const InventoryLIst = () => {


  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [inventoryLists, setInventoryLists] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
   if (!token ) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You have to Login first",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/Login");
  }else {
    navigate("/");
    setUser(JSON.parse(user));
  }

  }, [navigate]);

  // get inventory list  -----------------------
  useEffect(() => {
    const fetchInventoryList = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://127.0.0.1:8000/api/inventory-list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInventoryLists(res.data.inventory);
    };

    fetchInventoryList();
  }, []);

  // logout button function ----------------------
  const logoutSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://127.0.0.1:8000/api/user-logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove token and user from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: "Successfully Logged Out",
      });
      // Redirect to login page
      navigate("/Login");
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error, if any
    }
  };




  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile and medium device sidebar toggle button */}
      <SideNav />

      {/* ----------------Main content -------------------*/}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
        <div className="flex justify-end py-3">
          <button onClick={logoutSubmit} className="btn me-[10px]">Logout</button>
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
            <h1 className="text-2xl font-semibold mb-[10px]">Name: {user && user.name}</h1>
            <h1 className="text-2xl font-semibold">Email: {user && user.email}</h1>
            {/* add button  */}
            <div className="mt-[50px] flex justify-end">
              <Link to="/inverntoryAdd">
              <button className=" btn uppercase btn-info text-white">
                add
              </button>
              </Link>
            </div>
            {/*----------------- dynamic cards section ------------- */}
            <div className="mt-[50px] grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
            {inventoryLists.map(inventoryList => (
              <div key={inventoryList.id} className="border border-black shadow-gray-500 shadow-md w-[340px] p-[5px] rounded-md">
                <h1 className="text-2xl font-semibold mb-[10px]">Name: {inventoryList.invName}</h1>
                <h1 className="text-2xl font-semibold">Description: {inventoryList.description}</h1>
                <div className="flex gap-2 justify-end">
                  <Link to={`/inverntoryDetails/${inventoryList.id}`}>
                    <button className=" btn btn-success text-white btn-sm w-[50px]">
                      Details
                    </button>
                  </Link>
                  <button className=" btn btn-error text-white btn-sm w-[50px]">
                    Delete
                  </button>
                </div>
              </div>
            ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryLIst;
