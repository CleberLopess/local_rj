import Whatsapp from "@/components/whatsapp/whatsapp";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { LayoutType } from "./layout.models";

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-12">
        {children}
        <Footer />
      </main>
      <Whatsapp />
    </>
  );
};

export default Layout;
