import { useRooms } from "../context/RoomsContext";

export default function Options() {
    const { categories } = useRooms();

    return (
        <>
            {categories.map((category) => (
                <option
                    key={category.slug}
                    className="capitalize"
                    value={category.slug}
                >
                    {category.name}
                </option>
            ))}
        </>
    );
}
