import React from "react";
import Table from "../../ui/table/Table";
import { useRooms } from "../../context/RoomsContext";
import TableCell from "../../ui/table/TableCell";
import CategoryRow from "./CategoryRow";

export default function CategoriesTable() {
    const { categories } = useRooms();

    return (
        <Table columns="grid-cols-[1fr_1fr_1fr_1fr_1fr]">
            <Table.Header>
                <TableCell>name</TableCell>
                <TableCell>capacity</TableCell>
                <TableCell>price</TableCell>
                <TableCell>discount</TableCell>
                <TableCell></TableCell>
            </Table.Header>

            <Table.Body>
                {categories.map((c, i) => (
                    <CategoryRow key={c.slug} category={c} />
                ))}
            </Table.Body>
        </Table>
    );
}
