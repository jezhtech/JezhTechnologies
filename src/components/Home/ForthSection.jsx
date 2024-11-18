import Bg1 from "../../assets/icons/dda5860b-3c49-438c-a2a4-8eeaf5bb27a4.png";
import Built from "../../assets/icons/sustainable-energy_10633778.png";
import Adaptable from "../../assets/icons/cpu_1104950.png";
import Digital from "../../assets/icons/intelligence_11764993.png";

export default function ForthSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-20 mx-6 md:mx-20 lg:mx-32 font-helvetica">
      <div className="flex flex-col items-start space-y-8 p-4 lg:p-6 ">
        <div className="flex flex-row items-center justify-center space-x-4">
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-customGreen to-transparent"></span>
          <h1 className="text-slate-800 text-center text-xl md:text-xl lg:text-2xl font-extrabold leading-tight tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-customGreen via-customBlue to-customGreen">
            Customized Solutions for Every Business
          </h1>
          <span className="h-1 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-customGreen to-transparent"></span>
        </div>

        <div className="flex flex-col md:flex-row gap-5 ">
          <img
            src={Built}
            alt="Built.jpg"
            className="w-14 h-14 bg-gray-800 rounded-2xl"
          />

          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2 ">
              Built for Your Industry
            </h2>
            <p className="text-sm text-gray-500 font-semibold tracking-tight ">
              Whether it&apos;s smart homes, e-commerce, healthcare, or
              manufacturing, we align our services to meet the specific needs of
              each industry
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 ">
          <img
            src={Adaptable}
            alt="Adaptable.jpg"
            className="w-14 h-14 bg-gray-800 rounded-2xl"
          />

          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold text-gray-800 mb-2 ">
              Adaptable & Scalable
            </h2>
            <p className="text-sm text-gray-500 font-semibold tracking-tight">
              Our solutions grow with your business, with easy integration and
              scalability as your company evolves.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5  ">
          <img
            src={Digital}
            alt="Digital.jpg"
            className="w-14 h-14 bg-gray-800 rounded-2xl"
          />

          <div className="flex flex-col">
            <h2 className="text-xl md:text-xl font-semibold  text-gray-800 mb-2">
              Technology with a Personal Touch
            </h2>
            <p className="text-sm text-gray-500 font-semibold tracking-tight">
              Our team is dedicated to understanding your business’s unique
              requirements and delivering solutions that resonate with your
              goals.
            </p>
          </div>
        </div>
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
          className="w-full max-w-lg lg:max-w-lg md:max-w-md transform transition-transform duration-300 ease-out hover:scale-105 rounded-xl shadow-neutral-950"
        />
      </div>
    </div>
  );
}
