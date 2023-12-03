import React, { useState } from "react";
import Question from "./Question";

const QaSection = () => {
  const [q1Show, setQ1Show] = useState(true);
  const [q2Show, setQ2Show] = useState(true);
  const [q3Show, setQ3Show] = useState(true);
  const [q4Show, setQ4Show] = useState(true);
  const [q5Show, setQ5Show] = useState(true);
  return (
    <div id="faq" className="md:px-[9%] md:py-[10%] px-[30px] bg-white flex flex-col xl:flex-row items-start justify-center">
      <div className="flex flex-col gap-3 w-full md:px-20 py-10 items-center xl:items-start">
        <div className="uppercase text-sm w-fit bg-white text-[#8a61ff] border rounded-lg p-2 font-semibold">
          <span>🙋‍♀️ FAQ </span>
        </div>
        <div className="pt-[20px] text-4xl lg:text-6xl font-semibold text-center xl:text-left" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000">
          Need
          <span className="text-[#FE8162]"> Answers?</span>
        </div>
        <div className="w-full text-center xl:text-left py-4 text-[#767575] max-w-[600px] text-lg font-semibold">
          Check out our most commonly asked questions below to find the
          information you need.
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 ease-in-out duration-300" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000">
        <Question
          que="What is Manage Wise and what does it offer?"
          ans="Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance
productivity, and drive success. It offers a range of features including task management, scheduling, communication
tools, analytics, and more."
          setShow={() => setQ1Show(!q1Show)}
          show={q1Show}
        />

        <Question
          que="Is Manage Wise suitable for small businesses and larger enterprises alike?"
          ans="Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes."
          setShow={() => setQ2Show(!q2Show)}
          show={q2Show}
        />

        <Question
          que="Can I access Manage Wise from different devices and platforms?"
          ans="Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices."
          setShow={() => setQ3Show(!q3Show)}
          show={q3Show}
        />

        <Question
          que="What kind of support options do you offer to users?"
          ans="We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise."
          setShow={() => setQ4Show(!q4Show)}
          show={q4Show}
        />

        <Question
          que="How secure is the data stored within Manage Wise?"
          ans="Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected."
          setShow={() => setQ5Show(!q5Show)}
          show={q5Show}
        />
      </div>
    </div>
  );
};

export default QaSection;
