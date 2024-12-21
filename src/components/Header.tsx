import Image from "next/image";
import logo from "../assets/logo.webp"

function Header() {
  return (
    <header className="flex items-center py-3 px-10">
      <Image src={logo} alt="Logo" width={200} height={100} />
    </header>
  );
}

export default Header;
