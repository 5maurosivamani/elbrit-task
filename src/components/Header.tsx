import Image from "next/image";
import logo from "../assets/logo.webp";

function Header() {
  return (
    <div className="flex items-center py-3 px-10 relative">
      <Image src={logo} alt="Elbrit Logo" className="max-w-[180px] md:max-w-[250px]" />
    </div>
  );
}

export default Header;
