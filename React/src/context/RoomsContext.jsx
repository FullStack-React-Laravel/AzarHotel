import { createContext, useContext } from "react";
import { useGetCategories } from "../hooks/useGetCategories";
import { useGetRooms } from "../hooks/useGetRooms";

const RoomContext = createContext();

function RoomProvider({ children }) {
    const { rooms, roomsIsError, roomsIsLoading, roomsError } = useGetRooms();
    const {
        categories,
        categoriesIsError,
        categoriesIsLoading,
        categoriesError,
    } = useGetCategories();

    return (
        <RoomContext.Provider
            value={{
                rooms,
                roomsError,
                roomsIsLoading,
                roomsIsError,
                categories,
                categoriesIsError,
                categoriesIsLoading,
                categoriesError,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
}

function useRooms() {
    const context = useContext(RoomContext);
    if (context === undefined) throw new Error("out of the room context");
    return context;
}

export { useRooms, RoomProvider };
