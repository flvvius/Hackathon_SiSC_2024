import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayoutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
