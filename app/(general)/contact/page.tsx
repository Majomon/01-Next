import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Estás en la página Contact",
  keywords: ["Contacto", " Mauricio", " Luna"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
