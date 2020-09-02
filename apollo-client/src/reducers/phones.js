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
          item.isEdit = false
          return item
        }
        )
      }

    case 'POST_PHONE':
      console.log('kenapa lo ketriger dah')
      return {
        ...state,
        phones: [
          ...state.phones,
          {
            PhoneNumber: action.PhoneNumber,
            Name: action.Name,
            added: true,
            isEdit: false,
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
    case 'EDIT_CLICK':
      return {
        ...state,
        phones: state.phones.map((item) => {
          if (item.id === action.id) {
            console.log('here')
            item.isEdit = true;
          }
          return item
        })
      }
    case 'EDIT_CLICK_CANCEL':
      return {
        ...state,
        phones: state.phones.map((item) => {
          if (item.id === action.id) {
            console.log('here')
            item.isEdit = false;
          }
          return item
        })
      }

    case 'DELETE_PHONE':
      return {
        ...state,
        phones: state.phones.filter((item) => item.id !== action.id)
      }

    case 'UPDATE_PHONE_SUCCESS':
      return {
        ...state,
        phones: state.phones.map(item => {
          if (item.id === action.id) {
            item.isEdit = false
          }
          return item
        })
      }
    case 'UPDATE_PHONE':
      console.log('test   ')
      console.log(action)
      console.log(state)
      return {
        ...state,
        phones: state.phones.map(item => {
          if (item.id === action.id) {
            item.Name = action.Name;
            item.PhoneNumber = action.PhoneNumber;
            item.isEdit = false
          }
          return item

        })
      }
    case "UPDATE_PHONE_FAILURE":
      return {
        ...state,
        phones: state.phones.map(item => {
          if (item.id === action.id) {
            item.isEdit = false
          }
          return item
        })
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
