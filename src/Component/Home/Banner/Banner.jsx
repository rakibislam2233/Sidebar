import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsFilterRight } from "react-icons/bs";
const images = [
  {
    image: "https://i.postimg.cc/jS6v5jbV/emran2.jpg",
  },
  {
    image: "https://i.postimg.cc/rybfZbJH/emran7.jpg",
  },
  {
    image: "https://i.postimg.cc/J7yfhjY9/emran3.jpg",
  },
  {
    image: "https://i.postimg.cc/s2PMBgVM/emran8.jpg",
  },
  {
    image: "https://i.postimg.cc/tCP6zm7p/rahi1.jpg",
  },
];
const Banner = ({open, setOpen}) => {
  return (
    <>
     <div className="flex lg:hidden items-center px-5 gap-5">
        <BsFilterRight
          onClick={() => setOpen(!open)}
          className="w-10 h-10 mt-4 cursor-pointer "
        ></BsFilterRight>
      </div>
      <div className="w-full h-screen">
      <Swiper className="mySwiper w-full h-full">
        {images.map((image) => (
          <>
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundPosition: "top center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "multiply",
                }}
                className={`bg-gray-900 bg-opacity-50 w-full h-screen cursor-pointer`}
              >
                <div className="w-full  h-full flex justify-start    items-center p-5">
                  <div className="space-y-4">
                    <h2 className="text-6xl tracking-wider  font-bold text-white">
                      Discover Unique <br /> and{" "}
                      <span className="text-teal-600">incredible</span>
                      <br />
                      rare Photography
                    </h2>
                    <div className="space-x-3">
                      <button className=" py-3 px-10 bg-teal-500 rounded-full font-semibold hover:bg-white text-black transition-all duration-300">
                        Explore
                      </button>
                      <button className="py-3 px-8 border border-teal-500 text-teal-500 rounded-full font-semibold hover:bg-teal-500 hover:text-black transition-all duration-300">
                        Contact Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
    </>
   
  );
};

export default Banner;

/**
https://i.postimg.cc/tCP6zm7p/rahi1.jpg
https://i.postimg.cc/jS6v5jbV/emran2.jpg
https://i.postimg.cc/J7yfhjY9/emran3.jpg
https://i.postimg.cc/rybfZbJH/emran7.jpg

*/
