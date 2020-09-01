const phones = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PHONE_SUCCESS':
      return action.phones.map((item) => {
        item.added = true;
        return item
      })

    case 'POST_PHONE':
      console.log(state)
      console.log(action)
      return [
        ...state,
        {
          PhoneNumber: action.PhoneNumber,
          Name: action.Name,
          added: true,
          id:action.id
        }
      ]

    case 'RESEND_PHONE_SUCCESS':
      return state.map((item) => {
        if (item.id === action.id) item.added = true
        return item
      })
    case 'POST_PHONE_SUCCESS':
     return state

    case 'POST_PHONE_FAILURE':
      return state.map((item) => {
        if (item.PhoneNumber === action.PhoneNumber) {
          item.added = false;
        }
        return item
      })

    case 'DELETE_PHONE':
      return state.filter((item) => item.id !== action.id)

    case 'DELETE_PHONE_SUCCESS':
      return state

    case 'LOAD_PHONE_FAILURE':
    case 'DELETE_PHONE_FAILURE':
    default:
      return state
  }
}

export default phones
