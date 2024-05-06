"use client";

import ISFooter from "@/components/footer/footer";
import Footer from "../(is)/otherServices/Footer";
import { PagesMenu } from "@/_pages/cases/Menu";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import ContactsWithUs from "./taxes/ContactsWithUs";
import ContactsWithUsWHite from "./cases/ContactsWithUs";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <PagesMenu>{children}</PagesMenu>
      {pathname === "/cases" || pathname === "/publications" ? (
        <ContactsWithUsWHite />
      ) : (
        <ContactsWithUs />
      )}
      {pathname === "/realEstate" ? <Footer /> : <ISFooter />}
    </>
  );
};

export default Layout;
