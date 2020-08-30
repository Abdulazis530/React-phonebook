import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

//actions for load chat
const loadChatsSuccess = (chats) => ({
    type: 'LOAD_CHAT_SUCCESS',
    chats

})
const loadChatsFailure = () => ({
    type: 'LOAD_CHAT_FAILURE'
})

//function export as bridge to the reducer
export const loadChat = () => {
    return dispatch => {
        return request.get('chats')
            .then(response => dispatch(loadChatsSuccess(response.data)))
            .catch(error => {
                console.log(error)
                dispatch(loadChatsFailure())
            })
    }
}

//actions for post chat

const postChatSuccess = (chats) => ({
    type: 'POST_CHAT_SUCCESS',
    chats
})
const postChatFailure = (id) => ({
    type: 'POST_CHAT_FAILURE',
    id
})
const postChatRedux = (id, name, message) => ({
    type: 'POST_CHAT',
    id,
    name,
    message
})

export const postChat = (name, message) => {
    const id = Date.now()
    return dispatch => {
        dispatch(postChatRedux(id, name, message))
        return request.post('chats', { id, name, message })
            .then(response => dispatch(postChatSuccess(response.data)))
            .catch(error => {
                console.log(error)
                dispatch(postChatFailure(id))
            })
    }

}



//actions for delete chat

const deleteChatSuccess = (chats) => ({
    type: 'DELETE_CHAT_SUCCESS',
    chats
})
const deleteChatFailure = () => ({
    type: 'DELETE_CHAT_FAILURE'
})
const deleteChatRedux = (id) => ({
    type: 'DELETE_CHAT',
    id
})


export const deleteChat = (id) => {
    console.log(id)
    return dispatch => {
    console.log(id)
        dispatch(deleteChatRedux(id))
        return request.delete(`chats/${id}`)
            .then(response => dispatch(deleteChatSuccess(response.data)))
            .catch(error => {
                console.log(error)
                dispatch(deleteChatFailure())
            })
    }
}
const resendChatSuccess = (id) => ({
    type: 'RESEND_CHAT', id
})


export const resendChat = (id, name, message) => {
    return dispatch => {
        return request.post('chats', { id, name, message })
            .then(response => dispatch(resendChatSuccess(id)))
            .catch(error => {
                console.log(error)
                dispatch(postChatFailure(id))
            })
    }

}

