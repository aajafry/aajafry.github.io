import ContractForm from "@/components/molecules/ContractForm";
import ContractInfo from "@/components/organisms/ContractInfo";
import PageHeading from "@/components/organisms/PageHeading";
import Footer from "../atoms/Footer";

export default function ContractsTemplate() {
  return (
    <>
      <PageHeading
        label="contract"
        subLabel="Let's Work Together"
        classes="section-heading-wrapper relative flex items-center justify-center my-12"
      />

      <div className="section-content-wrapper flex flex-col lg:flex-row items-center md:items-start">
        <ContractInfo classes="contract-info-wrapper w-full lg:w-1/2 p-4" />
        <ContractForm classes="contract-form-wrapper w-full lg:w-1/2 p-4" />
      </div>
      <div className="border divide-zinc-800 dark:divide-zinc-300 dark:opacity-30  my-12"></div>
      <Footer />
    </>
  );
}
