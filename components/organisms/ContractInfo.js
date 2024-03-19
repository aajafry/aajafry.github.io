import ContractThumbnail from "@/public/assets/images/ContractThumbnail.png";
import Img from "../atoms/Img";
import HiringInfo from "../molecules/HiringInfo";
import SocialLinksWrapper from "./SocialLinksWrapper";

export default function ContractInfo({ classes }) {
  return (
    <div className="contract-info-wrapper w-1/2 p-4">
      <div className="thumbnail relative h-40">
        <Img
          isFixed={true}
          source={ContractThumbnail}
          alt="Contract Thumbnail image"
          classes="h-full object-cover absolute rounded-xl"
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
