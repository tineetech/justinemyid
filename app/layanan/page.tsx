import type { Metadata } from "next";
import PageClient from "./page-client"; // client component kamu

export const metadata: Metadata = {
  title: "Layanan - Justine",
};

export default function Page() {
  return <PageClient />;
}
