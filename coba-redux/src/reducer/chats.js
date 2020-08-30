const chats = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CHAT_SUCCESS':
            return action.chats.map(item => {
                item.sent = true
                return item
            })
        case 'POST_CHAT_SUCCESS':
            return state
        case 'POST_CHAT':
            console.log([...state, {
                id: action.id,
                name: action.name,
                message: action.message,
                sent: true
            }])
            return [...state, {
                id: action.id,
                name: action.name,
                message: action.message,
                sent: true
            }]
        case 'POST_CHAT_FAILURE':
            return state.map(item => {
                if (item.id === action.id) item.sent = false
                return item
            })
        case 'RESEND_CHAT':
            return state.map(item => {
                if (item.id === action.id) item.sent = true
                return item
            })
        case 'DELETE_CHAT':
            return state.filter(item => item.id !== action.id)
        case 'DELETE_CHAT_SUCCESS':
            return state
        case 'LOAD_CHAT_FAILURE':
        case 'DELETE_CHAT_FAILURE':
        default:
            return state
    }

}


export default chats