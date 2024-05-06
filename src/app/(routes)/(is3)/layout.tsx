import Footer from "@/components/footer/footer";
import { PagesMenu } from "./criminal-law/PagesMenu";
import React, { ReactNode } from "react";
import ContactsWithUs from "../(other)/taxes/ContactsWithUs";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PagesMenu>{children}</PagesMenu>
      <ContactsWithUs />
      <Footer />
    </>
  );
};

export default Layout;
