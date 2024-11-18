import Bg1 from "../../assets/images/web-development-8734249_1280.png";
import Tech from "../../assets/icons/internet-things_10019258.png";
import Ai from "../../assets/icons/artificial-intelligence_18067159.png";
import Robot from "../../assets/icons/robotics_1129358.png";

export default function ThirSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center font-helvetica mt-20 mx-6 md:mx-20 lg:mx-32">
      <div className="flex justify-center md:justify-end relative ">
        <img
          loading="lazy"
          src={Bg1}
          alt="Technology Background"
          className="w-full max-w-lg lg:max-w-lg md:max-w-md transform transition-transform duration-300 ease-out hover:scale-105 rounded-xl shadow-neutral-950"
        />
      </div>

      <div className="flex flex-col items-start space-y-8 p-4 lg:p-6 relative overflow-hidden ">
        <div
          className="absolute inset-0 bg-no-repeat bg-right-top   ml-96  -z-10 opacity-30"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/multicolor-squares-pattern-background_1195-312.jpg?uid=R121738979&ga=GA1.1.333942242.1728979190&semt=ais_hybrid)",
          }}
        ></div>

        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <h1 className="text-black text-center text-xl md:text-2xl lg:text-2xl font-extrabold leading-tight tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-customGreen via-black to-customGreen  ">
            Our Expertise in Innovation
          </h1>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>

        <div className="flex flex-col md:flex-row gap-5  ">
          <img
            src={Tech}
            alt="technology"
            className="w-14 h-14 bg-gray-800 rounded-2xl"
          />
          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold text-gray-800  mb-2">
              Internet of Things (IoT)
            </h2>
            <p className="text-sm text-gray-500 font-semibold tracking-tight">
              We specialize in connecting devices and systems to make your home,
              business, or industrial environments smarter, safer, and more
              efficient.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 ">
          <img
            src={Ai}
            alt="technology"
            className="w-14 h-14 bg-gray-800 rounded-xl"
          />
          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2">
              Artificial Intelligence (AI)
            </h2>
            <p className="text-sm text-gray-500 font-semibold tracking-tight ">
              Our AI solutions empower businesses to optimize processes, improve
              decision-making, and drive automation through intelligent systems.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 ">
          <img
            src={Robot}
            alt="technology"
            className="w-14 h-14 bg-gray-800 rounded-2xl"
          />
          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2">
              Robotics & Automation
            </h2>
            <p className="text-sm text-gray-500 font-semibold tracking-tight ">
              We integrate robotics and automation technology to streamline
              tasks, improve productivity, and ensure operational excellence
              across industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
