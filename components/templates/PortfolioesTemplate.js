"use client";
import { portfolioes } from "@/public/data/portfolioes";
import { useState } from "react";
import Footer from "../atoms/Footer";
import CategoriesWrapper from "../organisms/CategoriesWrapper";
import PageHeading from "../organisms/PageHeading";
import PortfolioWrapper from "../organisms/PortfolioWrapper";

export default function PortfolioesTemplate() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(portfolioes.categories.map((item) => item.name)),
  ];

  const filteredPortfolioes =
    selectedCategory === "all"
      ? portfolioes.categories.flatMap((item) => item.items)
      : portfolioes.categories.find((item) => item.name === selectedCategory)
          ?.items ?? [];

  return (
    <>
      <PageHeading
        label="Portfolio"
        subLabel="Featured Projects"
        classes="section-heading-wrapper relative flex items-center justify-center my-12"
      />

      <div className="section-content-wrapper">
        <CategoriesWrapper
          categories={categories}
          onSelectCategory={setSelectedCategory}
        />
        <PortfolioWrapper portfolioes={filteredPortfolioes} />
      </div>

      <Footer />
    </>
  );
}
