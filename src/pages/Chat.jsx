import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { chatSelectors, getChat, getChatById } from "../redux/chatSlice"
import ioClient from "../socket/ioClient"

const Chat = () => {
    const [inputValue, setInputValue] = useState(null)
    const [realtimeChat, setRealtimeChat] = useState([])
    const dispatch = useDispatch()
    // const chat = useSelector(chatSelectors.selectAll)
    const { decodedAccess } = useSelector((state) => state.auth)
    // const { allChats, chat } = useSelector((state) => state.chat)

    useEffect(() => {
        dispatch(getChat())
        // console.log(allChats)
    }, [dispatch])

    useEffect(() => {
        dispatch(getChatById({ id: decodedAccess?.id }))
        // console.log(chat)
    }, [decodedAccess, dispatch])

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
        <>
            <div></div>
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
        </>
    )
}

export default Chat
