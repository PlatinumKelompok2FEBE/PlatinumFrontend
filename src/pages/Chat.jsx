import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import dayjs from "dayjs"
import { getChat, getChatById } from "../redux/chatSlice"
import ioClient from "../socket/ioClient"

const Chat = () => {
    const [inputValue, setInputValue] = useState(null)
    const [realtimeChat, setRealtimeChat] = useState([])
    const dispatch = useDispatch()
    const { decodedAccess } = useSelector((state) => state.auth)
    const { allChats, chatMessages, loadingMessage } = useSelector(
        (state) => state.chat
    )

    useEffect(() => {
        dispatch(getChat())
        // console.log(allChats)
    }, [dispatch])

    const onSend = () => {
        ioClient.emit("POST_CHAT", {
            user_id: decodedAccess?.id,
            as: "buyer",
            to: 6,
            message: inputValue,
        })
    }

    ioClient.on("NEW_CHAT", (payload) => {
        console.log(payload)
    })

    return (
        <div className="container mx-auto flex px-4">
            <div className="w-1/3">
                {allChats?.map((chat) => (
                    <div
                        key={chat?.id}
                        className="flex cursor-pointer justify-between border p-4"
                        onClick={() => dispatch(getChatById({ id: chat?.id }))}
                    >
                        <div>
                            <div>Buyer ID {chat?.buyer_id}</div>
                            <div>Seller ID {chat?.seller_id}</div>
                        </div>
                        <div>
                            {dayjs(chat?.updatedAt).format("D MMM, HH:mm")}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-2/3 border p-4">
                {loadingMessage === "pending" ? (
                    <></>
                ) : (
                    chatMessages?.map((message) => (
                        <div className="">{message.message}</div>
                    ))
                )}

                <textarea
                    className="border"
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    className="border bg-google-blue disabled:bg-smoke"
                    disabled={!inputValue}
                    onClick={onSend}
                >
                    send
                </button>
            </div>
        </div>
    )
}

export default Chat
