import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid md:grid-cols-5 gap-8">
      <div className="md:col-span-5">
        <Navbar />
      </div>
      <div className="md:col-span-5 ml-8">{children}</div>
    </main>
  );
};

export default Layout;
