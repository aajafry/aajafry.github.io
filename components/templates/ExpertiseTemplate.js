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

      <div className="section-content-wrapper flex flex-col lg:flex-row items-center lg:items-start">
        <WorkingSkillWrapper />
        <SoftSkillWrapper />
      </div>
      <div className="border divide-zinc-800 dark:divide-zinc-300 dark:opacity-30  my-12"></div>
      <Footer />
    </>
  );
}
