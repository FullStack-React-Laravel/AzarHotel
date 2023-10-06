import { MdOutlineHotel } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import MainNavLink from "./MainNavLink";
import Col from "./Col";

export default function MainNav() {
    return (
        <Col classes=" mt-10 gap-2">
            <MainNavLink to="home">
                <IoHomeOutline
                    className={`text-2xl group-hover/navItem:text-indigo-600 `}
                />
            </MainNavLink>
            <MainNavLink to="rooms">
                <MdOutlineHotel
                    className={`text-2xl group-hover/navItem:text-indigo-600`}
                />
            </MainNavLink>
        </Col>
    );
}
