"use client";
import profileImage from "@/public/assets/images/profile.jpg";
import profileBanner from "@/public/assets/images/profileBanner.jpg";
import Image from "next/image";
import HiringInfo from "../molecules/HiringInfo";
import NavigatorLinks from "../molecules/NavigatorLists";
import SocialLinksWrapper from "./SocialLinksWrapper";

export default function OpenAside() {
  return (
    <aside
      className={`sidebar overflow-y-scroll h-screen transition duration-200 ease-in-out hidden lg:block`}
    >
      <div className="profile-banner-wrapper relative h-40">
        <Image
          src={profileBanner}
          alt="profile Banner image"
          quality={100}
          loading="lazy"
          placeholder="blur"
          style={{ objectFit: "cover", position: "absulate" }}
          className="w-full h-40 -z-10 rounded-b-[44px]"
        />

        <div className="profile-iamge-wrapper w-full absolute bottom-0 flex justify-center translate-y-1/2">
          <Image
            src={profileImage}
            alt="profile image"
            height={100}
            width={100}
            quality={100}
            loading="lazy"
            placeholder="blur"
            style={{ objectFit: "cover" }}
            className="w-24 h-24 border-4 rounded-full"
          />
        </div>
      </div>

      <div className="text-center my-12 text-lg px-2">
        <HiringInfo isShowingParagraph={false} />
      </div>

      <div className="site-navigator-wrapper uppercase px-2 my-8">
        <NavigatorLinks withLabel={true} />
      </div>

      <SocialLinksWrapper classes="px-4" />
    </aside>
  );
}
