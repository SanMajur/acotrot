import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import constructionImg from "/public/assets/images/architect.png";
import supplyImg from "/public/assets/images/supply.png";
import transportImg from "/public/assets/images/transportation.png";
import msfImg from "/public/assets/images/msf-logo.png";
import faoImg from "/public/assets/images/fao-logo.png";
import undpImg from "/public/assets/images/undp-logo-blue.svg";
import Clients from "./components/Clients";
import weltImg from "/public/assets/images/welt-logo.png";
import QuoteBtn from "./components/navigation/QuoteBtn";

export default function Home() {
  return (
    <div className="">
      <section>
        <Hero />
      </section>
      <section className="bg-[#14141d] min-h-screen">
        <div className="px-8 py-16 text-center">
          <h1 className="text-white capitalize font-bold text-2xl">
            our services
          </h1>
        </div>
        <div className="text-center px-8  md:max-w-[704px] mx-auto pb-8">
          <p className=" text-white pb-4 mb-12">
            As a general trading company, we offer a wide range of services to
            help your business thrive. Our expertise ranges from supply of
            (building materials, office furniture, stationary, relief supplies,
            food stuffs, solar system, utensils) to construction works,
            logistics to mentioned but a few. We utilize the latest industry
            best practices to ensure that our solutions not only meet but exceed
            your expectations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-[1184px] mx-auto pb-8">
          <Services
            serviceImage={constructionImg}
            serviceLink={"#"}
            serviceName={"General Construction Works"}
            serviceDescription={
              "General construction works done by Acotrot General include building, renovations, infrastructure development, project management, and related construction services."
            }
            serviceLinkText={"Construction Services"}
          />
          <Services
            serviceImage={supplyImg}
            serviceLink={"#"}
            serviceName={"General Supply"}
            serviceDescription={
              "Acotrot General provides general supply services. Supplying building materials, stationaries, IT and accessories, and office furniture and equipment to mention but a few."
            }
            serviceLinkText={"General Supply"}
          />
          <Services
            serviceImage={transportImg}
            serviceLink={"#"}
            serviceName={"Transportation"}
            serviceDescription={
              "Acotrot General offers transportation services, including vehicle rentals, logistics management, and efficient delivery solutions for various industries and clients."
            }
            serviceLinkText={"Transportation"}
          />
          {/* <Services />
          <Services />
          <Services />
          <Services />
          <Services /> */}
        </div>
      </section>
      <section className=" bg-gray-300">
        <div className="px-8 py-12 ">
          <h1 className="text-center text-2xl capitalize font-bold tracking-widest">
            trusted by
          </h1>
          <div className="flex justify-center items-center mt-8 gap-8">
            <Clients logoImg={msfImg} />
            <Clients logoImg={faoImg} />
            <Clients logoImg={undpImg} />
            <Clients logoImg={weltImg} />
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#14141d]">
        <div className="text-center py-8 ">
          <h1 className="text-white capitalize text-2xl my-8 ">
            ready for your business to thrive?
          </h1>
          <form className="flex flex-col gap-8 px-8 md:w-[545px] mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-2 rounded-lg bg-[#14141d] text-white border-gray-600 border  hover:ring-sky-500 hover:ring-1"
            />
            <input
              type="tel"
              name="tel"
              placeholder="Phone"
              className="px-4 py-2 rounded-lg bg-[#14141d] text-white border-gray-600 border hover:ring-1 hover:ring-sky-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 rounded-lg bg-[#14141d] text-white border-gray-600 border hover:ring-1 hover:ring-sky-500"
            />
            <textarea
              name="message"
              id="messag"
              placeholder="Message"
              className="px-4 py-2 rounded-md  bg-[#14141d] text-white border-gray-600 border hover:ring-1 hover:ring-sky-500"
              cols={30}
              rows={5}
            ></textarea>
            <button className="py-3 px-6 bg-gradient-to-r hover:bg-gradient-to-r hover:from-transparent from-cyan-500 to-cyan-700 hover:to-transparent rounded-md text-white uppercase ring-2 ring-cyan-400 w-[50%] mx-auto">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
