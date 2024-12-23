import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { SingleHubConnection } from "./SingleHubConnection";

const ChatNotification = () => {
    const [cookies, _] = useCookies(["token"]);
    const token = cookies?.token ?? "";

    const [messageCount, setMessageCount] = useState<number>(0);

    useEffect(() => {
        // init chat hub connection
        if (token) {
            const conn = SingleHubConnection.getInstance(token)
                .then(instance => instance.on(
                    "ReceiveMessage",
                    (
                        senderId: number,
                        senderName: string,
                        type: string,
                        targerId: number,
                        message: string
                    ) => fetchNoti(token)
                ));
            conn.then(e => console.log("chat hub connected."))
                .catch(err => console.log("connot connect hub:", err));

            // get unread messages count
            fetchNoti(token);
        }

    }, []);

    const fetchNoti = async (token: string) => {
        const authAxios = axios.create({
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json;charset=UTF-8",
            },
        });

        var url = `${process.env.REACT_APP_CHAT_API}/messages/noti`;
        console.log(`call api: ${url}`);

        authAxios.get(url)
            .then(result => result.data)
            .then(data => setMessageCount(data.notiCount))
            .catch(err => console.error(err));
    }

    return (
        <>
            <a href={process.env.REACT_APP_CHAT_URL} className="p-0 btn btn-outline position-relative" aria-current="page" >
                <i className="bx bx-md bx-conversation"></i>
                {
                    messageCount > 0 && <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                    </span>
                }
            </a>
        </>
    );
}

export default ChatNotification;