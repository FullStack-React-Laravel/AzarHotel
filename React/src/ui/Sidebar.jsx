import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Sidebar() {
  return (
    <div className=" bg-white row-span-full px-6 pt-12">
      <Logo />
      <MainNav />
    </div>
  );
}
