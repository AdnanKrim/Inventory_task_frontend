import SideNav from "../SideNav";

const InventoryLIst = () => {
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
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div
            className="
            lg:mx-[50px] lg:mt-[50px]
            md:mx-[30px] md:mt-[30px]
            sm: mx-[10px] sm: mt-[10px]
            "
          >
            <h1 className="text-2xl font-semibold mb-[10px]">Name: </h1>
            <h1 className="text-2xl font-semibold">Email: </h1>
            {/* add button  */}
            <div className="mt-[50px] flex justify-end">
              <button className=" btn uppercase btn-info text-white">
                add
              </button>
            </div>
            {/*----------------- dynamic cards section ------------- */}
            <div className="mt-[50px] grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
              {/* card-1  */}
              <div className="border border-black shadow-gray-500 shadow-md w-[340px] p-[5px] rounded-md">
                <h1 className="text-2xl font-semibold mb-[10px]">Name: </h1>
                <h1 className="text-2xl font-semibold">Product: </h1>
                <div className="flex justify-end">
                  <button className=" btn btn-success text-white btn-sm w-[50px]">
                    Details
                  </button>
                </div>
              </div>
              {/* card-1  */}
              <div className="border border-black shadow-gray-500 shadow-md w-[340px] p-[5px] rounded-md">
                <h1 className="text-2xl font-semibold mb-[10px]">Name: </h1>
                <h1 className="text-2xl font-semibold">Product: </h1>
                <div className="flex justify-end">
                  <button className=" btn btn-success text-white btn-sm w-[50px]">
                    Details
                  </button>
                </div>
              </div>
              {/* card-1  */}
              <div className="border border-black shadow-gray-500 shadow-md w-[340px] p-[5px] rounded-md">
                <h1 className="text-2xl font-semibold mb-[10px]">Name: </h1>
                <h1 className="text-2xl font-semibold">Product: </h1>
                <div className="flex justify-end">
                  <button className=" btn btn-success text-white btn-sm w-[50px]">
                    Details
                  </button>
                </div>
              </div>
              {/* card-1  */}
              <div className="border border-black shadow-gray-500 shadow-md w-[340px] p-[5px] rounded-md">
                <h1 className="text-2xl font-semibold mb-[10px]">Name: </h1>
                <h1 className="text-2xl font-semibold">Product: </h1>
                <div className="flex justify-end">
                  <button className=" btn btn-success text-white btn-sm w-[50px]">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryLIst;
