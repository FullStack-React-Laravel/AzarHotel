import { Outlet } from "react-router-dom";
import StyleAppLayout from "./StyleAppLayout";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Applayout() {
  return (
    <StyleAppLayout>
      <Sidebar />
      <Header />
      <main className=" overflow-scroll p-6 bg-gray-100">
        <Outlet />
      </main>
    </StyleAppLayout>
  );
}
