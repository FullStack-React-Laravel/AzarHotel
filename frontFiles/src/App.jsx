import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Rooms from "./pages/Rooms";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { RoomProvider } from "./context/RoomsContext";
import Categories from "./pages/Categories";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route element={<Applayout />}>
                        <Route index element={<Navigate replace to="home" />} />
                        <Route path="home" element={<Home />} />
                        <Route
                            path="rooms"
                            element={
                                <RoomProvider>
                                    <Rooms />
                                </RoomProvider>
                            }
                        />
                        <Route
                            path="categories"
                            element={
                                <RoomProvider>
                                    <Categories />
                                </RoomProvider>
                            }
                        />
                        <Route path="bookings" element={<Bookings />} />
                        <Route path="*" element={<p>Error</p>} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                containerStyle={{ margin: "10px" }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "white",
                        color: "#374151",
                    },
                }}
            />
        </QueryClientProvider>
    );
}

export default App;
