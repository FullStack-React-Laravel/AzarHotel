import { createContext, useContext } from "react";

const tableContext = createContext();

function Table({ children, columns }) {
    return (
        <tableContext.Provider value={{ columns }}>
            <div
                role="table"
                className="rounded-xl border border-gray-100 bg-white pb-96"
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
            className={`${columns} grid  rounded-md bg-gray-200 px-8 font-bold tracking-wider text-main`}
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

function Footer({ children }) {
    return (
        <div className="rounded-md bg-gray-100 px-8 py-2  tracking-wider ">
            {children}
        </div>
    );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
export default Table;
