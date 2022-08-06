import React from "react";
import Footer from "../../Advanced/Footer";
import Navbar from "../../Advanced/Navbar";
export interface LayoutProps {
  children: React.ReactNode;
  pageStyleClass?: string;
  contentStyleClass?: string;
}

export default function Layout({ children, pageStyleClass, contentStyleClass }: LayoutProps) {
  return (
    <div className={`${pageStyleClass} page-layout`}>
      <Navbar />
      <div className={`${contentStyleClass} content-layout`}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
