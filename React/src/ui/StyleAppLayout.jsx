export default function StyleAppLayout({ children }) {
  return (
    <div className=" container m-auto h-screen max-h-[1000px] grid grid-cols-[18rem_1fr] grid-rows-[auto_1fr] bg-slate-400">
      {children}
    </div>
  );
}
