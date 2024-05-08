import Footer from "./Footer";
import { PagesMenu } from "./Menu";
import React, { ReactNode } from "react";
import ContactsWithUs from "./ContactsWithUs";

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
