let globalState = {
  phones: [],
  isActive: false
}

const phones = (state = globalState, action) => {
  switch (action.type) {
    case 'LOAD_PHONE_SUCCESS':
      return {
        ...state,
        phones: action.phones.map((item) => {
          item.added = true;
          return item
        }
        )
      }

    case 'POST_PHONE':
      console.log(state)
      console.log(action)
      return {
        ...state,
        phones: [
          ...state.phones,
          {
            PhoneNumber: action.PhoneNumber,
            Name: action.Name,
            added: true,
            id: action.id
          }
        ]
      }

    case 'RESEND_PHONE_SUCCESS':
      return {
        ...state,
        phones: state.phones.map((item) => {
          if (item.id === action.id) item.added = true
          return item
        })
      }

    case 'POST_PHONE_SUCCESS':
      return state

    case 'POST_PHONE_FAILURE':
      console.log(state)
      return {
        ...state,
        phones: state.phones.map((item) => {
          if (item.id === action.id) {
            console.log('here')
            item.added = false;
          }
          return item
        })
      }

    case 'TOGLE':
      console.log('reducer TOGLE')
      
      return {
        ...state,
        isActive: !state.isActive
      }

    case 'DELETE_PHONE':
      return {
        ...state,
        phones: state.phones.filter((item) => item.id !== action.id)
      }


    case 'DELETE_PHONE_SUCCESS':
      return state

    case 'LOAD_PHONE_FAILURE':
    case 'DELETE_PHONE_FAILURE':
    default:
      return state
  }
}

export default phones
