import CategoriesTable from "../components/categories/CategoriesTable";
import { useRooms } from "../context/RoomsContext";
import Col from "../ui/Col";
import Spinner from "../ui/Spinner";

export default function Categories() {
    const { categoriesIsLoading } = useRooms();

    return (
        <Col classes=" gap-20">
            <h1 className="text-4xl text-gray-700">All Categories</h1>
            {!categoriesIsLoading && <CategoriesTable />}
        </Col>
    );
}
