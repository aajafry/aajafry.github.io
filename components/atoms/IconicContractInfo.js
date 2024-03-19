import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Paragraph from "./Paragraph";

const paragraphClasses = "flex justify-start items-center gap-2";
const iconClasses = "text-rose-500";

export default function IconicContractInfo({ icon }) {
  if (icon == "mail")
    return (
      <Paragraph classes={paragraphClasses}>
        <MdEmail className={iconClasses} />
        <Link href="mailto:aajafry2@gmail.com">aajafry2@gmail.com</Link>
      </Paragraph>
    );
  if (icon == "phone")
    return (
      <Paragraph classes={paragraphClasses}>
        <FaPhoneAlt className={iconClasses} />
        <Link href="tel:+8801680899730">+880 1680 899 730</Link>
      </Paragraph>
    );
}
