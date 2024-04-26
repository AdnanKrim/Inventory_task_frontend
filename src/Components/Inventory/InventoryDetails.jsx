import { Link } from "react-router-dom";
import SideNav from "../SideNav";


const InventoryDetails = () => {
    return (
        <div className="flex h-screen bg-gray-100">
        {/* Mobile and medium device sidebar toggle button */}
  <SideNav/>
  
        {/* ----------------Main content -------------------*/}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
  <div className="flex justify-end py-3"><button className="btn me-[10px]">Logout</button></div>
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
              <Link to="/inverntoryUpdate">
              <button className=" btn uppercase btn-info text-white">
                Update
              </button>
              </Link>
            </div>
          </div>
          </main>
        </div>
      </div>
    );
};

export default InventoryDetails;