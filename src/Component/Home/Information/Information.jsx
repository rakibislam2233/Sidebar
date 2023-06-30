import { useOutletContext } from "react-router-dom";
import { BsFilterRight } from "react-icons/bs";
const Information = () => {
    const [name,open,setOpen] = useOutletContext()
    return (
        <>
        <div className="flex lg:hidden items-center px-5 gap-5">
        <BsFilterRight
          onClick={() => setOpen(!open)}
          className="w-10 h-10 mt-4 cursor-pointer "
        ></BsFilterRight>
      </div>
        <div id="information" className="w-full h-full bg-[#001E3C] p-10">
             <div className="grid grid-cols-1 md:grid-cols-2 pt-10 lg:grid-cols-3 gap-5">
          <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
            <img
              className="w-full h-64 rounded-2xl"
              src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
              alt=""
            />
            <div className="flex justify-between font-medium">
              <h2 className="text-xl font-semibold">
                Duck Natural Photography
              </h2>
              <h2 className="flex gap-2 items-center">$160</h2>
            </div>
            <div className="flex justify-between">
              <h2>
                {" "}
                Owner: <span className="font-semibold">Rakib</span>{" "}
              </h2>
              <h2 className="flex gap-2 items-center">4 in stock</h2>
            </div>
            <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              Buy Now
            </button>
          </div>
          <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
            <img
              className="w-full h-64 rounded-2xl"
              src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
              alt=""
            />
            <div className="flex justify-between font-medium">
              <h2 className="text-xl font-semibold">
                {" "}
                Duck Natural Photography
              </h2>
              <h2 className="flex gap-2 items-center">$160</h2>
            </div>
            <div className="flex justify-between">
              <h2>
                {" "}
                Owner: <span className="font-semibold">Rakib</span>{" "}
              </h2>
              <h2 className="flex gap-2 items-center">4 in stock</h2>
            </div>
            <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              Buy Now
            </button>
          </div>
          <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
            <img
              className="w-full h-64 rounded-2xl"
              src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
              alt=""
            />
            <div className="flex justify-between font-medium">
              <h2 className="text-xl font-semibold">
                {" "}
                Duck Natural Photography
              </h2>
              <h2 className="flex gap-2 items-center">$160</h2>
            </div>
            <div className="flex justify-between">
              <h2>
                {" "}
                Owner: <span className="font-semibold">Rakib</span>{" "}
              </h2>
              <h2 className="flex gap-2 items-center">4 in stock</h2>
            </div>
            <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              Buy Now
            </button>
          </div>
          <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
            <img
              className="w-full h-64 rounded-2xl"
              src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
              alt=""
            />
            <div className="flex justify-between font-medium">
              <h2 className="text-xl font-semibold">
                {" "}
                Duck Natural Photography
              </h2>
              <h2 className="flex gap-2 items-center">$160</h2>
            </div>
            <div className="flex justify-between">
              <h2>
                {" "}
                Owner: <span className="font-semibold">Rakib</span>{" "}
              </h2>
              <h2 className="flex gap-2 items-center">4 in stock</h2>
            </div>
            <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              Buy Now
            </button>
          </div>
          <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
            <img
              className="w-full h-64 rounded-2xl"
              src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
              alt=""
            />
            <div className="flex justify-between font-medium">
              <h2 className="text-xl font-semibold">
                {" "}
                Duck Natural Photography
              </h2>
              <h2 className="flex gap-2 items-center">$160</h2>
            </div>
            <div className="flex justify-between">
              <h2>
                {" "}
                Owner: <span className="font-semibold">Rakib</span>{" "}
              </h2>
              <h2 className="flex gap-2 items-center">4 in stock</h2>
            </div>
            <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              Buy Now
            </button>
          </div>
          <div className="w-full h-full bg-[#1F1F1F] p-6 rounded-2xl space-y-3 cursor-pointer">
            <img
              className="w-full h-64 rounded-2xl"
              src="https://i.postimg.cc/MTTZrXD1/banner1.jpg"
              alt=""
            />
            <div className="flex justify-between font-medium">
              <h2 className="text-xl font-semibold">
                {" "}
                Duck Natural Photography
              </h2>
              <h2 className="flex gap-2 items-center">$160</h2>
            </div>
            <div className="flex justify-between">
              <h2>
                {" "}
                Owner: <span className="font-semibold">Rakib</span>{" "}
              </h2>
              <h2 className="flex gap-2 items-center">4 in stock</h2>
            </div>
            <button className="w-full py-3 px-8 bg-teal-500 hover:-translate-y-1 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold">
              Buy Now
            </button>
          </div>
        </div>
        </div>
        </>
    );
};

export default Information;