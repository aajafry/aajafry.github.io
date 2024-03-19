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

      <div className="section-content-wrapper flex sm:flex-col sm:items-center md:flex-row md:items-start">
        <ContractInfo classes="contract-info-wrapper w-1/2 p-4" />
        <ContractForm classes="contract-form-wrapper w-1/2 p-4" />
      </div>
      <Footer />
    </>
  );
}
