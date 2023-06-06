const Plans = () => {
  return (
    <div className="py-[100px] px-2">
      <div className="md:grid grid-cols-3 gap-5 max-w-[1240px] mx-auto">
        <div className="shadow-xl my-4 hover:scale-105 duration-00 h-[300px]">
          First
        </div>
        <div className="shadow-xl my-4 hover:scale-105 duration-500 bg-gray-100 h-[300px]">
          Second
        </div>
        <div className="shadow-xl my-4 hover:scale-105 duration-500 h-[300px]">
          Third
        </div>
      </div>
    </div>
  );
};
export default Plans;
