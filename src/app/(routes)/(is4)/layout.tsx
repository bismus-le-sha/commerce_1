import Footer from "@/components/footer/footer";

import React, { ReactNode } from "react";
import { PagesMenu } from "@/_pages/cases/Menu";
import ContactsWithUsWHite from "../(other)/cases/ContactsWithUs";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PagesMenu>{children}</PagesMenu>
      <ContactsWithUsWHite />
      <Footer />
    </>
  );
};

export default Layout;
