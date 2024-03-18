import React from "react";
import transport from "../../public/assets/transport.png";
import warehouse from "../../public/assets/warehouse.png";
import clearance from "../../public/assets/clearance.png";
import technology from "../../public/assets/technology.png";
import partnership from "../../public/assets/partnership.png";
import { AnimateNumber, YouCan } from "./MotionComponents";
import Ellipse2 from "../../public/assets/Ellipse4.png";
import Image from "next/image";

const AbWhatUCan = () => {
  return (
    <div className="relative">
      {/* <Image src={Ellipse1} alt='' className='absolute right-[0%] bottom-[32%] w-[900px] h-auto z-0 -rotate-45'/> */}
      <Image
        src={Ellipse2}
        alt=""
        className="absolute left-[1%] -top-[30%] w-[1000px] h-auto z-0 rotate-180 blur-lg"
      />
      <div className="max-w-[1200px] mx-auto py-12 md:py-2 relative z-10">
        <h2 className="font-bold text-4xl lg:text-3xl md:text-2xl  text-start md:text-center py-6 pb-10">
          With SkyCare , <span className="text-primary">U can</span>{" "}
        </h2>

        <div className="flex flex-col gap-8 max-w-[1200px] mx-auto">
          <div className="flex gap-8 w-[100%] md:flex-col">
          <YouCan>
              <Image src={clearance} alt="" className="w-10 h-10" />
              <h3 className="text-xl font-bold">Custom Clearance</h3>
              <p className="text-sm font-semibold">
              Our adept team specializes in seamless customs clearance, ensuring swift
               and compliant processing for your imports and exports. With a keen understanding 
               of global trade regulations, we navigate the complexities of customs procedures,
                expertly managing documentation, tariff classifications, and duty calculations. 
                Your goods are in capable hands as we facilitate a hassle-free passage through 
                customs, providing you with the peace of mind to focus on your core business.
              </p>
            </YouCan>
            
            <YouCan>
              <Image src={warehouse} alt="" className="w-10 h-10" />
              <h3 className="text-xl font-bold">WareHouse</h3>
              <p className="text-sm font-semibold">
                Warehouses serve as temporary storage hubs, allowing businesses
                to store inventory and manage fluctuations in demand. An
                effective warehouse layout and inventory management system can
                significantly improve logistics efficiency.
              </p>
            </YouCan>
          </div>

          <div className="flex gap-8 w-[100%] md:flex-col">
          <YouCan>
              <Image src={transport} alt="" className="w-10 h-10" />
              <h3 className="text-xl font-bold">Transport</h3>
              <p className="text-sm font-semibold">
                The movement of goods is the foundation of logistics. Whether by
                road, air, sea, or rail, selecting the appropriate mode of
                transportation is crucial for timely deliveries and
                cost-effectiveness.
              </p>
            </YouCan>
            <YouCan>
              <Image src={technology} alt="" className="w-10 h-10" />
              <h3 className="text-xl font-bold">Information Technology</h3>
              <p className="text-sm font-semibold">
                In today&apos;s digital age, logistics heavily relies on
                sophisticated software and data analytics. Supply chain
                management systems enable real-time tracking, route
                optimization, and demand forecasting.
              </p>
            </YouCan>
          </div>

          <YouCan>
            <Image src={partnership} alt="" className="w-10 h-10" />
            <h3 className="text-xl font-bold">Supply chain PartnerShip</h3>
            <p className="text-sm font-semibold">
              Collaborating with reliable partners, such as carriers, suppliers,
              and distributors, fosters trust and enhances the overall
              efficiency of logistics operations.
            </p>
          </YouCan>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-32 relative z-10">
        <div className="flex flex-col gap-28 w-[100%]">
          <div className="flex w-[100%]">
            <div className="flex flex-col gap-1 w-[33%] items-center">
              <h1 className="font-bold text-6xl md:text-4xl sm:text-3xl text-primary">
                <AnimateNumber value={2021} />
              </h1>
              <p className="font-semibold md:text-xs">Founded</p>
            </div>
            <div className="flex flex-col gap-1 w-[33%] items-center">
              <h1 className="font-bold text-6xl md:text-4xl sm:text-3xl text-primary">
                <AnimateNumber value={3} />+
              </h1>
              <p className="font-semibold md:text-xs">Years</p>
            </div>
            <div className="flex flex-col gap-1 w-[33%] items-center">
              <h1 className="font-bold text-6xl md:text-4xl sm:text-3xl text-primary">
                <AnimateNumber value={3000} />+
              </h1>
              <p className="font-semibold md:text-xs">Likes</p>
            </div>
          </div>
          <div className="flex w-[100%]">
            <div className="flex flex-col gap-1 w-[33%] items-center">
              <h1 className="font-bold text-6xl md:text-4xl sm:text-3xl text-primary">
                <AnimateNumber value={200} />+
              </h1>
              <p className="font-semibold md:text-xs">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbWhatUCan;
