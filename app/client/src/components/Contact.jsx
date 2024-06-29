import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#070B38]  flex flex-col justify-center items-center">
      <div className="flex pt-16 justify-center md:justify-start lg:justify-start w-[85%]">
        <h1 className="text-5xl text-white font-Montserrat font-bold text-center md:text-start lg:text-start w-[85%]">
          Contact Us
        </h1>
      </div>
      <div className="flex w-[80%] justify-center pt-10">
        <form className="w-full md:w-[80%] lg:w-[50%]">
          <div className=" flex flex-col py-4">
            <label className="text-white text-lg pb-2">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              class="h-10 shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600 block w-full p-2.5"
            />
          </div>
          <div className=" flex flex-col py-4">
            <label className="text-white text-lg">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Your subject"
              className="h-10 shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600 block w-full p-2.5"
            />
          </div>
          <div className=" flex flex-col py-4">
            <label className="text-white text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here"
              className="h-60 shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600 block w-full p-2.5"
            />
          </div>
          <div className=" py-8">
            <button className="bg-sky-700 text-black text-lg font-Montserrat h-10 w-36 rounded-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
