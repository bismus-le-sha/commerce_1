import Footer from "./otherServices/Footer";
import { PagesMenu } from "./otherServices/PagesMenu";
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
