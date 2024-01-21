import Contact from "@/components/Contact";
import RootLayout from "@/components/RootLayout";
import React from "react";

const contact = () => {
  return (
    <>
      <Contact></Contact>
    </>
  );
};

export default contact;
contact.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
