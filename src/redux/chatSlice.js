import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import closedServer from "../middlewares/axios/closedServer"

// GET all chats
export const getChat = createAsyncThunk("chat/getChat", async (thunkAPI) => {
    try {
        const { data } = await closedServer.get("/chat")
        console.log(data)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

// GET chat by id
export const getChatById = createAsyncThunk(
    "chat/getChatById",
    async ({ id }, thunkAPI) => {
        try {
            const { data } = await closedServer.get(`/chat/${id}`)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        allChats: null,
        chatMessages: null,
        loadingChat: "idle",
        loadingMessage: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: {
        // GET all chats
        [getChat.pending]: (state) => {
            state.loadingChat = "pending"
        },
        [getChat.fulfilled]: (state, action) => {
            state.loadingChat = "idle"
            state.allChats = action.payload.chats
        },
        [getChat.rejected]: (state, action) => {
            state.loadingChat = "idle"
            state.error = action.payload
        },

        // GET chat by id
        [getChatById.pending]: (state) => {
            state.loadingMessage = "pending"
        },
        [getChatById.fulfilled]: (state, action) => {
            state.loadingMessage = "idle"
            state.chatMessages = action.payload.chatMessages
        },
        [getChatById.rejected]: (state, action) => {
            state.loadingMessage = "idle"
            state.error = action.payload
        },
    },
})

export default chatSlice.reducer
