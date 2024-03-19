/* eslint-disable react/no-unescaped-entities */
import AboutInfo from "@/components/molecules/AboutInfo";
import PageHeading from "@/components/organisms/PageHeading";
import Footer from "../atoms/Footer";

export default function BioTemplate() {
  return (
    <>
      <PageHeading
        label="about"
        subLabel="know me more"
        classes="section-heading-wrapper relative flex items-center justify-center my-12"
      />

      <AboutInfo classes="section-content-wrapper p-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        consequuntur cum illo magnam omnis optio beatae consequatur deserunt
        voluptatum! Ipsa atque adipisci repellat ut, itaque commodi eaque
        cupiditate corrupti. Eos, debitis? Quibusdam repudiandae ab, magni
        facilis veniam earum dolore unde esse ipsam, saepe, quod tempore
        molestias cumque laudantium distinctio iste repellat sequi in inventore
        quo.
        <br /> Ducimus officia iure quis! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Architecto consequuntur cum illo magnam
        omnis optio beatae consequatur deserunt voluptatum! Ipsa atque adipisci
        repellat ut, itaque commodi eaque cupiditate corrupti. Eos, debitis?
        Quibusdam repudiandae ab, magni facilis veniam earum dolore unde esse
        ipsam, saepe, quod tempore molestias cumque laudantium distinctio iste
        repellat sequi in inventore quo. Ducimus officia iure quis!
      </AboutInfo>
      <Footer />
    </>
  );
}
