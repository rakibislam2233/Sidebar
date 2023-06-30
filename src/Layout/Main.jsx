import { useState } from "react";
import Sidebar from "../Component/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = useState(false);
  const name = "Rakib"
  return (
    <>
        <div id="home" className="flex text-white overflow-hidden">
          <div
            className={`${
              open ? "w-[320px] duration-200" : "-ml-[240px] duration-200"
            }w-[320px] duration-100 lg:ml-0 lg:w-56 fixed h-full lg:max-h-screen bg-[#001E3C]  border-r-4 border-[#0A1929]`}
          >
            <Sidebar setOpen={setOpen}></Sidebar>
          </div>

          <div
            className={`${
              open ? " ml-[320px] duration-200" : "ml-0 duration-200"
            }ml-0 lg:ml-56 w-full h-full duration-200  bg-[#001E3C]`}
          >
            <Outlet context={[name,open,setOpen]}></Outlet>

          </div>
        </div>
    </>
  );
};

export default Main;
