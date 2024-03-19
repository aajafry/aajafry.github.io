import Footer from "../atoms/Footer";
import PageHeading from "../organisms/PageHeading";
import SoftSkillWrapper from "../organisms/SoftSkillWrapper";
import WorkingSkillWrapper from "../organisms/WorkingSkillWrapper";

export default function ExpertiseTemplate() {
  return (
    <>
      <PageHeading
        label="Expertise"
        subLabel="My Advantages"
        classes="section-heading-wrapper relative flex items-center justify-center my-12"
      />

      <div className="section-content-wrapper flex sm:flex-col sm:items-center md:flex-row md:items-start">
        <WorkingSkillWrapper />
        <SoftSkillWrapper />
      </div>
      <Footer />
    </>
  );
}
