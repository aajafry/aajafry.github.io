import NavigatorList from "@/components/atoms/NavigatorList";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks({ classes }) {
  return (
    <ul className={classes}>
      <NavigatorList href="/">
        <FaLinkedin />
      </NavigatorList>
      <NavigatorList href="/">
        <FaGithub />
      </NavigatorList>
      <NavigatorList href="/">
        <FaFacebook />
      </NavigatorList>
      <NavigatorList href="/">
        <FaXTwitter />
      </NavigatorList>
    </ul>
  );
}
