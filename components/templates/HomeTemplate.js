import HomeInfo from "@/components/molecules/HomeInfo";
import heroImage from "@/public/assets/images/bg-image-1.jpg";
// import Image from "next/image";
import Img from "../atoms/Img";

export default function HomeTemplate() {
  return (
    <>
      <div className="main-content-wrapper relative h-screen">
        <Img
          isFixed={false}
          source={heroImage}
          alt="intro banner image"
          classes="-z-20 bg-cover"
        />
        <HomeInfo classes="inner-content-wrapper bg-black bg-opacity-30 text-center h-full flex flex-col justify-center items-center gap-4 flex-nowrap" />
      </div>
    </>
  );
}
