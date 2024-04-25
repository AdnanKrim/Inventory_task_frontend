import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import SideNavList from "./SideNavList";

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // onclick button --------------------
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        className="z-10 mt-3 ms-3  lg:hidden  fixed p-2 bg-gray-800 text-white rounded-full"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaArrowAltCircleLeft /> : <RiMenu2Line />}
      </button>
      {/*------------------- Sidebar -----------------------*/}
      <nav
        className={`z-50 bg-[#25476a] text-white w-[280px] min-h-screen ${
          isSidebarOpen ? "block" : "lg:block md:hidden sm: hidden"
        }`}
      >
        {/* Sidebar content goes here */}
        <div className="p-4 flex">
          <p className="text-2xl font-bold lg:mt-0 md:mt-10 sm: mt-10">
            Admin Panel
          </p>
          {/* nav close button  */}
          <p>
            {/* <button
                className="ms-[50px] mt-1 z-10 lg:hidden md:flex fixed p-2 bg-gray-800 text-white rounded-full"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? <FaArrowAltCircleLeft /> : "Open"}
              </button> */}
          </p>
        </div>
        {/*-------------------- Navlist  -----------------*/}
        <SideNavList/>
        
      </nav>
    </div>
  );
};

export default SideNav;
