import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center py-3 px-10">
      <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
    </header>
  );
}

export default Header;
