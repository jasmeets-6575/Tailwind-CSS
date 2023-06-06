import laptop from "../assets/images.jpg"

const Experts = () => {
  return (
    <div className="max-w-[1240px] p-2 mx-auto my-10 h-[200px] md:grid grid-cols-2"> 
      <div className=" md:w-[80%] col-span-1 text-center">
        <img className="inline" src={laptop} alt="laptop image" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df98] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="my-2 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores alias minima libero delectus eum numquam sed deserunt modi, explicabo assumenda consequuntur incidunt placeat nesciunt. Eligendi, aliquam! Facere quae, velit ut doloribus nulla doloremque, ex odio, deleniti rerum ipsa porro. Veritatis.</p>
        <button className="w-[30%] bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  )
}
export default Experts