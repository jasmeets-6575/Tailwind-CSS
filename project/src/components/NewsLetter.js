const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className="md:text-[40px] text-[20px] font bold text-white">
            Want to learn latest skills
          </h1>
          <span className="text-white">
            Sign up tp our newsletter and stay up to date
          </span>
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="Email"
            className="sm:w-full p-3 mb-2 mr-2 text-slate-600"
          />
          <button className="rounded bg-black text-white p-3 rounded">
            Notify Me
          </button>
          <br />
          <p className="text-white">
            We care about the protection of the data. Read our
            <br />{" "}
            <a href="" className="text-color">
              {" "}
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
