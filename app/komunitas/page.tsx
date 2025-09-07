import React from "react";

import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Komunitas - Justine",
};

const Page = () => {
  return (
    <PageClient />
  );
};

export default Page;
