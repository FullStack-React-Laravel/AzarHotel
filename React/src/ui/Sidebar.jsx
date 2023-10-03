import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
    return (
        <div className=" row-span-full border border-l-gray-100 bg-white px-6 pt-12">
            <Logo />
            <MainNav />
        </div>
    );
}
