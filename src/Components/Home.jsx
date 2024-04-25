import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SideNav from "./SideNav";


const Home = () => {


    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
  
     if (!token) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have to Login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/adminlogin");
    }else if (user?.role === "1") {
      navigate("/dp");
    }
  
    }, [navigate]);

    return (
        <div className="flex h-screen bg-gray-100">
        {/* Mobile and medium device sidebar toggle button */}
  <SideNav/>
  
        {/* ----------------Main content -------------------*/}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#25476a]">
  <div className="flex justify-end py-3"><button className="btn me-[10px]">Logout</button></div>
          {/* Page content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
           
          </main>
        </div>
      </div>
    );
};

export default Home;