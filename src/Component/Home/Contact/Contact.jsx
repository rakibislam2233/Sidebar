import { BsFilterRight } from "react-icons/bs";
import { useOutletContext } from "react-router-dom";
const Contact = () => {
    const [name,open,setOpen] = useOutletContext()
    return (
       <>
         <div className="flex lg:hidden items-center px-5 gap-5">
        <BsFilterRight
          onClick={() => setOpen(!open)}
          className="w-10 h-10 mt-4 cursor-pointer "
        ></BsFilterRight>
      </div>
       <div className="w-full h-screen pt-16 p-5">
         <div className= " md:w-1/2 mx-auto wtext-white   p-5 rounded border">
        <form className="space-y-4 " action="">
          <div className="flex flex-col space-y-4">
            <label className="text-xl" htmlFor="name">
              Name
            </label>
            <input
              className="py-3 w-full lg:w-[80%] px-5 border-b bg-transparent  focus:outline-0"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-xl" htmlFor="name">
              Email
            </label>
            <input
              className="py-3 w-full lg:w-[80%] px-5 border-b bg-transparent focus:outline-0"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-xl" htmlFor="name">
              Message
            </label>
            <textarea
              className="py-3 w-full lg:w-[80%] px-5 border bg-transparent rounded focus:outline-0"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <div>
            <button className="py-3 w-full lg:w-[80%] px-5  bg-teal-600 rounded">
              Submit
            </button>
          </div>
        </form>
        </div>
       </div>
       </>
      
    );
};

export default Contact;