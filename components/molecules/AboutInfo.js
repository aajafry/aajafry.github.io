/* eslint-disable react/no-unescaped-entities */
import aboutImage from "@/public/assets/images/aboutImage.jpg";
import Img from "../atoms/Img";
import Paragraph from "../atoms/Paragraph";

export default function AboutInfo({ classes, children }) {
  return (
    <div className={classes}>
      <Img
        isFixed={true}
        source={aboutImage}
        alt="profile image"
        classes="h-96 mb-12 object-fill rounded-md"
      />
      <Paragraph classes="tracking-wide"> {children} </Paragraph>
    </div>
  );
}
