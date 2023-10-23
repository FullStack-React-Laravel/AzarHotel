import { createContext, useContext } from "react";

const tableContext = createContext();

function Table({ children, columns }) {
    return (
        <tableContext.Provider value={{ columns }}>
            <div
                role="table"
                className="rounded-xl border border-gray-100 bg-white"
            >
                {children}
            </div>
        </tableContext.Provider>
    );
}

function Header({ children }) {
    const { columns } = useContext(tableContext);
    return (
        <div
            role="row"
            className={`${columns} text-main  grid rounded-md bg-gray-200 px-8 font-bold tracking-wider`}
        >
            {children}
        </div>
    );
}
function Row({ children }) {
    const { columns } = useContext(tableContext);
    return (
        <div
            rol="row"
            className={`border-b-gray-10 grid ${columns} border-b px-8`}
        >
            {children}
        </div>
    );
}

function Body({ data, render }) {
    return <div>{data.map(render)}</div>;
}
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
export default Table;
