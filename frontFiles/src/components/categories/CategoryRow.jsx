import Table from "../../ui/table/Table";
import TableCell from "../../ui/table/TableCell";

export default function CategoryRow({ category }) {
    const { image, name, capacity, price, discount } = category;
    return (
        <Table.Row>
            <TableCell>5</TableCell>
        </Table.Row>
    );
}
