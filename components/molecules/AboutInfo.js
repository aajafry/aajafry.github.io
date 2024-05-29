/* eslint-disable react/no-unescaped-entities */
import aboutImage from "@/public/assets/images/aboutImage.jpg";
import Img from "../atoms/Img";
import Paragraph from "../atoms/Paragraph";

export default function AboutInfo({ classes, children }) {
  return (
    <div className={classes}>
      <div className="w-full h-96 mb-12 relative">
        <Img
          isFixed={true}
          source={aboutImage}
          alt="profile image"
          classes="w-full h-full rounded-md"
        />
      </div>
      <Paragraph classes="tracking-wide"> {children} </Paragraph>
    </div>
  );
}
