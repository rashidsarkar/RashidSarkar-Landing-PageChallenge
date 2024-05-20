import oval from "../../assets/Oval.png";
import BannerImage from "../../assets/BannerImage.png";

function Banner() {
  return (
    <div className="bg-[#EAEAEA]">
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <div className="relative items-center justify-center bgShape">
          <img className="absolute mx-auto" src={oval} alt="" />
          <div className=" w-[500px]">
            <img
              className="relative bottom-0 w-full left-10 top-10"
              src={BannerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
