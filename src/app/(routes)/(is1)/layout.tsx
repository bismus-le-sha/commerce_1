import Footer from "../(is)/otherServices/Footer";
import { PagesMenu } from "./inheritance/PagesMenu";
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
