export default function StyleAppLayout({ children }) {
    return (
        <div className=" container m-auto grid h-screen max-h-[1000px] grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
            {children}
        </div>
    );
}
