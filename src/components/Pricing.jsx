import React from "react";

const Pricing = () => {
  return (
    <div className="md:px-[15%] px-[30px] bg-white flex gap-4 flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="border bg-white">💲Pricing</div>
        <h1 className="pt-[20px] text-4xl lg:text-6xl font-semibold text-center">
          Select you ideal
          <span className="text-[#FE8162]"> Pricing </span> plan
        </h1>

        <div className="w-full text-center py-4 text-[#767575] max-w-[600px] text-lg font-semibold">
          At Manage Wise, we believe in providing you with pricing plans that
          adapt to your unique needs.
        </div>
      </div>

      <div className="flex flex-col xl:flex-row sm:px-10 md:px-[20%] xl:px-0 gap-10 justify-center">
        <div className="bg-[#ededfa] rounded-md p-6" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <div className="flex flex-col">
            <div>
              <div className="bg-white w-fit p-1 rounded-md border uppercase text-center text-sm text-orange-400 font-bold">
                Free
              </div>
              <h1 className="text-3xl p-3">
                $0<span className="text-xl text-[#767575]">/month</span>
              </h1>
            </div>
            <div className="flex flex-col gap-2 p-5 text-[#767575] text-lg">
              <div>Access to all basic features</div>
              <div>Reporting and analytics</div>
              <div>Up to 5 individual users</div>
              <div>Chat and email support</div>
              
            </div>
            <button className="bg-white mt-6 h-10 w-[150px] rounded-lg px-5 py-3 flex justify-center items-center font-semibold shadow hover:shadow-lg">
                Get started
              </button>
          </div>
        </div>

        <div className="flex bg-[#1c1c1c] text-white rounded-md p-6" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <div>
            <div>
              <div className="bg-white w-fit p-1 rounded-md border uppercase text-center text-sm text-orange-400 font-bold">
                Standard
              </div>
              <h1 className="text-3xl p-3">
                $25<span className="text-xl text-[#767575]">/month</span>
              </h1>
            </div>
            <div className="flex flex-col gap-2 p-5 text-[#767575] text-lg">
              <div>Access to all basic features</div>
              <div>Reporting and analytics</div>
              <div>Up to 5 individual users</div>
              <div>Chat and email support</div>
              <div>3+ integrations</div>
              <div>Account performance reporting</div>
            </div>
            <div>
              <button className="bg-[#8247ff] mt-6 h-10 w-[150px] rounded-lg px-5 py-3 flex justify-center items-center font-semibold shadow hover:shadow-lg">
                Get started
              </button>
            </div>
          </div>
        </div>

        <div className="flex bg-[#ededfa] rounded-md p-6" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <div>
            <div>
              <div className="bg-white w-fit p-1 rounded-md border uppercase text-center text-sm text-orange-400 font-bold">
                Business
              </div>
              <h1 className="text-3xl">
                $42<span className="text-xl text-[#767575]">/month</span>
              </h1>
            </div>
            <div className="flex flex-col gap-2 p-5 text-[#767575] text-lg">
              <div>Access to all basic features</div>
              <div>Reporting and analytics</div>
              <div>Up to 5 individual users</div>
              <div>Chat and email support</div>
              <div>3+ integrations</div>
            </div>
            <div>
              <button className="bg-white mt-6 h-10 w-[150px] rounded-lg px-5 py-3 flex justify-center items-center font-semibold shadow hover:shadow-lg">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
