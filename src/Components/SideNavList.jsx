
import { Link } from "react-router-dom";
import { IoIosSpeedometer } from "react-icons/io";


const SideNavList = () => {
    return (
        <div>
            {/* Inventory section  */}
            <Link to="/inverntory">
          <li className="flex font-semibold text-lg mb-3 ">
            <span className="flex items-center w-[250px] rounded-r-full text-sm  bg-[#191c24] hover:bg-transparent p-3 border-l-4 border-white">
              <IoIosSpeedometer className="text-white me-2" size={20} />{" "}
              Inventory
            </span>
          </li>
        </Link>
        {/* items section  */}
        <Link to="/items">
          <li className="flex font-semibold text-lg mb-3 ">
            <span className="flex items-center w-[250px] rounded-r-full text-sm  bg-[#191c24] hover:bg-transparent p-3 border-l-4 border-white">
              <IoIosSpeedometer className="text-white me-2" size={20} />{" "}
              Items
            </span>
          </li>
        </Link>
        </div>
    );
};

export default SideNavList;