import { useNavigate } from "react-router-dom";
import Bg1 from "../../assets/images/development-4536630_1920.png";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-32 mx-6 md:mx-20 lg:mx-36">
      <div className="flex flex-col items-start space-y-4 p-4 lg:p-6">
        <h1 className="text-customBlue text-3xl md:text-5xl lg:text-6xl font-bold font-alata leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-gray-900 to-gray-950  max-w-2xl border-b-4 border-customGreen pb-4">
          Your Trusted Partner for Innovative Technology Solutions.
        </h1>
        <button
          onClick={handleClick}
          className="bg-customGreen text-black shadow-md font-semibold font-helvetica text-xl p-3 px-4 tracking-tight leading-relaxed rounded-lg border-2 border-customGreen hover:bg-white hover:text-black  transition-all duration-300 hover:shadow-xl transform"
        >
          Learn More
        </button>
      </div>
      <div className="flex justify-center md:justify-end relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-right-top   ml-96  -z-10 opacity-30"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/multicolor-squares-pattern-background_1195-312.jpg?uid=R121738979&ga=GA1.1.333942242.1728979190&semt=ais_hybrid)",
          }}
        ></div>
        <img
          loading="lazy"
          src={Bg1}
          alt="Technology Background"
          className="w-full max-w-sm lg:max-w-sm md:max-w-sm transform transition-transform duration-300 ease-out hover:scale-105 rounded-xl shadow-neutral-950"
        />
      </div>
    </div>
  );
}
