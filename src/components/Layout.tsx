import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
