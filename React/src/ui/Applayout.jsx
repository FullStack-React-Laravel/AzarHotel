import { Outlet } from "react-router-dom";
import StyleAppLayout from "./StyleAppLayout";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Applayout() {
    return (
        <StyleAppLayout>
            <Sidebar />
            <Header />
            <main className=" relative overflow-scroll bg-gray-100 p-6">
                <Outlet />
            </main>
        </StyleAppLayout>
    );
}
