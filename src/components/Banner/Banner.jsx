import oval from "../../assets/Oval.png";
import BannerImage from "../../assets/BannerImage.png";
import { FaCartShopping } from "react-icons/fa6";

function Banner() {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center h-auto  lg:h-[100vh]">
        <div className="relative flex items-center justify-center w-full lg:mt-30 bgShape lg:w-auto">
          <img
            className="absolute inset-0 object-cover w-full h-full mx-auto lg:w-auto lg:h-auto"
            src={oval}
            alt=""
          />
          <div className="w-4/5 md:w-3/5 lg:w-[500px] relative">
            <img
              className="relative w-full lg:w-auto lg:left-10 left-5 lg:top-10"
              src={BannerImage}
              alt=""
            />
          </div>
        </div>
        <div className="p-4 space-y-8 text-center lg:text-left lg:absolute lg:left-52 textPart lg:p-0">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl text-text-primary">
            Personalized Eyeglass <br /> Shopping
          </h1>
          <button className="flex items-center justify-center px-4 py-2 mx-auto space-x-2 text-white rounded-md lg:mx-0 btn bg-text-primary hover:bg-text-primary">
            <FaCartShopping />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
