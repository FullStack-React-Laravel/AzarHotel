import { MdOutlineHotel } from "react-icons/md";
import MainNavLink from "./MainNavLink";
export default function MainNav() {
  return (
    <div className=" mt-8">
      <MainNavLink to="home">
        <MdOutlineHotel className=" group-hover/navItem:text-purple-950" />
      </MainNavLink>
      <MainNavLink to="rooms">
        <MdOutlineHotel className=" group-hover/navItem:text-purple-950" />
      </MainNavLink>
    </div>
  );
}
