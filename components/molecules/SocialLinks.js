import NavigatorList from "@/components/atoms/NavigatorList";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks({ classes }) {
  return (
    <ul className={classes}>
      <NavigatorList href="https://bd.linkedin.com/in/aajafry">
        <FaLinkedin />
      </NavigatorList>
      <NavigatorList href="https://github.com/aajafry">
        <FaGithub />
      </NavigatorList>
      <NavigatorList href="https://www.facebook.com/aajafry">
        <FaFacebook />
      </NavigatorList>
      <NavigatorList href="https://x.com/aajafry2">
        <FaXTwitter />
      </NavigatorList>
    </ul>
  );
}
