
import {BiMessageRounded } from "react-icons/bi";
import { AiOutlineHome,AiFillBug} from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
const Sidebar = ({ setOpen }) => {
  return (
    <nav className="w-full text-white flex flex-col justify-center items-center gap-20 px-10 py-5">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Sidebar</h2>
      </div>
      <ul className="flex flex-col gap-3 font-semibold">
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <AiOutlineHome className="w-5 h-5"></AiOutlineHome>Home
            </Link>
          </li>
          <li>
            <Link
              to="/information"
              smooth={true}
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
               <HiOutlineInformationCircle className="w-5 h-5"></HiOutlineInformationCircle>Information
            </Link>
          </li>
          <li>
            <Link
              to="/guide"
              smooth={true}
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
               <AiFillBug className="w-5 h-5"></AiFillBug>Guide
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center hover:text-emerald-500 duration-200 cursor-pointer"
            >
              <BiMessageRounded className="w-5 h-5"></BiMessageRounded>Contact
            </Link>
          </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
