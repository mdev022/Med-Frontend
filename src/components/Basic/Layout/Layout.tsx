import React from "react";
import Navbar from "../../Advanced/Navbar";
export interface AuxProps {
  children: React.ReactNode;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
