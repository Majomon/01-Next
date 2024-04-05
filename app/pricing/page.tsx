import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Estás en la página Pricing",
  keywords: ["Pricing", " Mauricio", " Reina"],
};
export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
