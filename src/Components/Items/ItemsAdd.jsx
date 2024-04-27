import { useState } from "react";
import SideNav from "../SideNav";
import axios from "axios";
import Swal from "sweetalert2";

const ItemsAdd = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);

        try {
            const token = localStorage.getItem("token");
            const res = await axios.post("https://inventory.4softbd.com/api/add-item", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            
            setImage("");
            setName("");
            setDescription("");
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: "Successfully Added",
              });
            console.log(res.data);
        } catch (error) {
            console.error("Error uploading item:", error);
        }
    };


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
                            Add Items
                        </h1>
                        <hr className="text-center mt-[10px] mb-[50px]  border border-black" />
                        {/* items input field Section  */}
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Image:
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Description:
                                </label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ItemsAdd;