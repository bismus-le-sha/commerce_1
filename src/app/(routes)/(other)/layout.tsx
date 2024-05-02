import Footer from "@/components/footer/footer";
import { PagesMenu } from "@/pages/cases/Menu";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PagesMenu>{children}</PagesMenu>
      <Footer />
    </>
  );
};

export default Layout;
