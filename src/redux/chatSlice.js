import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit"
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
    "chat/getChat",
    async ({ id }, thunkAPI) => {
        try {
            const { data } = await closedServer.get(`/chat/${id}`)
            console.log(data)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const chatAdapter = createEntityAdapter()

const chatSlice = createSlice({
    name: "chat",
    initialState: chatAdapter.getInitialState({
        allChats: null,
        chat: null,
        loading: "idle",
        error: null,
    }),
    reducers: {},
    extraReducers: {
        // GET all chats
        [getChat.pending]: (state) => {
            state.loading = "pending"
        },
        [getChat.fulfilled]: (state, action) => {
            state.loading = "idle"
            chatAdapter.setAll(state, action.payload.chats)
            state.allChat = action.payload.chats
        },
        [getChat.rejected]: (state, action) => {
            state.loading = "idle"
            state.error = action.payload
        },

        // GET chat by id
        [getChatById.pending]: (state) => {
            state.loading = "pending"
        },
        [getChatById.fulfilled]: (state, action) => {
            state.loading = "idle"
            chatAdapter.setOne(state, action.payload.chats)
            state.chat = action.payload.chats
        },
        [getChatById.rejected]: (state, action) => {
            state.loading = "idle"
            state.error = action.payload
        },
    },
})

export const chatSelectors = chatAdapter.getSelectors((state) => state.chat)

export default chatSlice.reducer
