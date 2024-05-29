import ContractThumbnail from "@/public/assets/images/ContractThumbnail.png";
import Img from "../atoms/Img";
import HiringInfo from "../molecules/HiringInfo";
import SocialLinksWrapper from "./SocialLinksWrapper";

export default function ContractInfo({ classes }) {
  return (
    <div className={classes}>
      <div className="thumbnail relative w-full h-40">
        <Img
          isFixed={true}
          source={ContractThumbnail}
          alt="Contract Thumbnail image"
          classes="h-full w-full object-cover object-center absolute rounded-xl"
        />
      </div>
      <HiringInfo
        isShowingParagraph={true}
        classes="description flex flex-col gap-2 my-8"
      />
      <SocialLinksWrapper />
    </div>
  );
}
