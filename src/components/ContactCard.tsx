import { ContactCardProps } from "@/types/ContactCard";
import Image from "next/image";

function ContactCard({ title, content, icon }: ContactCardProps) {
  return (
    <div className="bg-[#215d72]  px-5 py-3 rounded-lg flex items-center space-x-3">
      <div className="text-white">
        <Image src={icon} alt={title} height={48} width={48} />
      </div>
      <div className="text-white">
        <h5 className="font-semibold">{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ContactCard;
