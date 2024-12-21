import Image from "next/image";
import logo from "../assets/logo.webp";
import ContactCard from "./ContactCard";
import { FaLocationDot } from "react-icons/fa6";
import phone from "../assets/phone.webp";
import email from "../assets/email.webp";
import location from "../assets/location.webp";

function Footer() {
  return (
    <div className="bg-secondary py-5 md:px-5">
      <div className="w-5/6 md:w-4/5 mx-auto flex flex-col space-y-6">
        <div className="grid xl:grid-cols-3 md:grid-cols-2  gap-5">
          <ContactCard
            title="Phone Number"
            content="+974 3118 1843"
            icon={phone}
          />
          <ContactCard
            title="Email Address"
            content="Elbrithcqhr@gmail.com"
            icon={email}
          />
          <ContactCard
            title="Office Location"
            content=" Ambassador Street, Zone 61,"
            icon={location}
          />
        </div>
        <div className="flex flex-col space-y-4 w-full lg:flex-row xl:w-3/4 lg:space-y-0 lg:space-x-4">
          <div className="bg-accent px-2 max-w-[180px] md:max-w-[250px]">
            <Image src={logo} alt="Elbrit Logo" className="w-full" />
          </div>
          <p className="text-gray-200">
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>

        <div className="flex items-center text-gray-200 space-x-2">
          <FaLocationDot />
          <p>Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
