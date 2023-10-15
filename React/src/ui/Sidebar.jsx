import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
    return (
        <div className=" bg-main  row-span-full rounded-[0px_20px_20px_0px] border border-l-gray-100 pt-12">
            <Logo />
            <MainNav />
        </div>
    );
}
