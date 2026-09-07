import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-900 pt-10 md:px-20 lg:px-32 overflow-hidden text-white" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-500 mt-4 text-sm">
            loremipsum dolor sit ametloremipsum dolloremipsum dol or sit amet
            loremipsum dolor sit amet or sit ametloremipsum dolor sit a
            metloremipsum dolor sit amet
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">company</h3>
            <ul className="flex flex-col gap-2 text-gray-500">
                <a href="#" className="text-gray-500 hover:text-white">Home</a>
                <a href="#" className="text-gray-500 hover:text-white">About</a>
                <a href="#" className="text-gray-500 hover:text-white">Services</a>
                <a href="#" className="text-gray-500 hover:text-white">Contact</a>
                <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
            </ul>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="flex flex-col gap-2 text-gray-500">
                <li>123 Main Street, City, Country</li>
                <li>Email: info@company.com</li>
                <li>Phone: +1 (123) 456-7890</li>
            </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        copyright © 2026 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
