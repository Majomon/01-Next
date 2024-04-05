import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Estás en la página About",
  keywords: ["About Page", " Mauricio", " Información"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
