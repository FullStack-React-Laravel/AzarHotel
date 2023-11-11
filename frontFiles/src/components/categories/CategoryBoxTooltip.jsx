import { MdDiscount, MdOutlineReduceCapacity } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import Col from "../../ui/Col";
import Row from "../../ui/Row";

export default function CategoryBox({ category }) {
    const { name, price, image, discount, description, capacity } = category;
    const des = description.split(" ").slice(0, 10).join(" ");

    return (
        <Col classes="p-4">
            <Row>
                <div className=" basis-1/4 ">
                    <img
                        src={image}
                        className="h-16 w-16 rounded-full"
                        alt={name}
                    />
                </div>
                <div className="basis-3/4">
                    <p className="mb-2 text-2xl font-bold tracking-wider text-main">
                        {name}
                    </p>
                    <p className=" text-xs text-gray-400">{des}...</p>
                </div>
            </Row>
            <Row classes=" justify-between text-sm uppercase  my-3">
                <CatInfo name="total price">
                    {price}£<MdDiscount />
                </CatInfo>
                <CatInfo name="capacity">
                    {capacity} <MdOutlineReduceCapacity />
                </CatInfo>
                <CatInfo name="discount">
                    {discount}
                    <TbDiscount className=" text-green-600" />
                </CatInfo>
            </Row>
            <button className="ml-auto flex rounded-sm border  px-2 py-1 text-xs transition-all duration-300 hover:bg-main hover:text-white">
                read more
            </button>
        </Col>
    );
}

function CatInfo({ name, children }) {
    return (
        <Col classes=" items-center">
            {name}
            <Row classes=" gap-1">{children}</Row>
        </Col>
    );
}
