let globalState = {
  phones: [],
  isActive: false,
  pages: 0,
  limit: 5,
  currentPage: 1,
  offset: 0,
  isSearchModeOn: false,
  searchName: "",
  searchPhone: "",
}

const phones = (state = globalState, action) => {
  switch (action.type) {
    case 'LOAD_PHONE_SUCCESS':

      return {
        ...state,
        phones: action.items.map((item) => {
          item.added = true;
          item.isEdit = false
          return item
        }
        ),
        pages: Number(Math.ceil(action.totalData / state.limit)),
        totalData: Number(action.totalData),

      }

    case 'POST_PHONE':

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
      return {
        ...state,
        phones: state.phones.map((item) => {
          if (item.id === action.id) {
            item.added = false;
          }
          return item
        })
      }

    case 'TOGLE':
      return {
        ...state,
        isActive: !state.isActive
      }
    case 'EDIT_CLICK':
      return {
        ...state,
        phones: state.phones.map((item) => {
          if (item.id === action.id) {
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
      return state
    case 'UPDATE_PHONE':
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
    case 'NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
        offset: action.offset
      }
    case 'PREVIOUS_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
        offset: action.offset

      }
    case 'SWITCH_PAGE':
      return {
        ...state,
        currentPage: action.switchToPage,
        offset: action.offset

      }
    case 'MODE_SEARCH_ACTIVE':
      return {
        ...state,
        isSearchModeOn: true,
        searchName: action.filter.name,
        searchPhone: action.filter.phone
      }
    case 'MODE_SEARCH_INACTIVE':
      return {
        ...state,
        isSearchModeOn: false,
        searchName: "",
        searchPhone: ""
      }
    case 'LOAD_PHONE_FAILURE':
    case 'DELETE_PHONE_FAILURE':
    default:
      return state
  }
}

export default phones
