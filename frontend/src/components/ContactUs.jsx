import React from "react";
import AboutUsImg from "../assets/contact.jpg"

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white font-roboto min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium" htmlFor="first-name">
                  First name
                </label>
                <input className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white" id="first-name" name="first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium" htmlFor="last-name">
                  Last name
                </label>
                <input className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white" id="last-name" name="last-name" type="text" placeholder="Smitherton" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="email">
                Email address
              </label>
              <input className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white" id="email" name="email" type="email" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="product">
                Product Of Interest
              </label>
              <select className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white" id="product" name="product">
                <option>Image Detection</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="remark">
                Remark
              </label>
              <textarea className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white" id="remark" name="remark" rows="3" placeholder="How can we help you?"></textarea>
            </div>
            <div>
              <button className="w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-md" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
           <img src={AboutUsImg} alt="" className="md:w-96 w-72  mt-4 md:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
