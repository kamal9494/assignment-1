import React from "react";

const Pricing = () => {
  return (
    <div id="pricing" className="md:px-[15%] px-[30px] pt-20 bg-white flex gap-4 flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="border bg-white p-2 rounded-lg text-[#8a61ff] px-3">💲Pricing</div>
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
            <div className="flex flex-col gap-2 p-2 text-[#767575] text-lg">
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Access to all basic features</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Reporting and analytics</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Up to 5 individual users</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Chat and email support</div>
              
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
            <div className="flex flex-col gap-2 p-2 text-[#767575] text-lg">
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Access to all basic features</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Reporting and analytics</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Up to 5 individual users</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Chat and email support</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>3+ integrations</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Account performance reporting</div>
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
            <div className="flex flex-col gap-2 py-4 text-[#767575] text-lg">
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Access to all basic features</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Reporting and analytics</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Up to 5 individual users</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Chat and email support</div>
              <div className="flex gap-2"><svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" color="var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {&quot;name&quot;:&quot;Green&quot;} */"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>3+ integrations</div>
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
