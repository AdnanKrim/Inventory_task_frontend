
import SideNav from "./SideNav";


const Home = () => {


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