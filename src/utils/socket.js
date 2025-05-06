import io from "socket.io-client";
import { BASE_URL } from "./constants";

// telling the client to connect to the server at the given URL(backend sysytem)
export const createSocketConnection = () => {
    return io(BASE_URL);
}