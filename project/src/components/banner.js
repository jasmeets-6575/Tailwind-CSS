import Typed from "react-typed";

const banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[50px]">
      <div className="max-w-[1240px] my-[100px] mx-auto text-center font-bold">
        <div className="text-xl md:text-3xl md:p-[24px]">Learn with us</div>
        <h2 className="text-white text-4xl md:text-[80px] md:p-[24px]">
          Grow with us
        </h2>
        <div className="md:text-[50px] text-xl md:p-[24px] text-white">
          Learn{" "}
          <Typed
            strings={[
              " Web development",
              "Full Stack",
              "Data structures and Algorithms",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={120}
          />
        </div>
      </div>
    </div>
  );
};
export default banner;
