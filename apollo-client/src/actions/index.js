import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Swal from 'sweetalert2'


const API_URL = 'http://localhost:3001/graphql/'

const client = new ApolloClient({
  uri: API_URL
});


// start load user data
export const loadPhoneSuccess = (phones) => ({
  type: 'LOAD_PHONE_SUCCESS',
  phones
})

export const loadPhoneFailure = () => ({
  type: 'LOAD_PHONE_FAILURE'
})

export const loadPhone = () => {
  const usersQuery = gql`
  query {
    phones{
      PhoneNumber
      Name
      id
    }
  }`;
  return dispatch => {
    return client.query({
      query: usersQuery,
    })
      .then(function (response) {
        dispatch(loadPhoneSuccess(response.data.phones))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadPhoneFailure())
      });
  }
}

// end load user data

// start post user data

export const postPhoneSuccess = (phones) => ({
  type: 'POST_PHONE_SUCCESS',
  phones
})

export const postPhoneFailure = (id) => ({
  type: 'POST_PHONE_FAILURE', id
})

const postPhoneRedux = (PhoneNumber, Name, id) => ({
  type: 'POST_PHONE', PhoneNumber, Name, id
})


export const postPhone = (PhoneNumber, Name, id) => {
  const addQuery = gql`
  mutation addContact($Name: String!, $PhoneNumber: String!,$id:ID!) {
    addContact(Name: $Name, PhoneNumber: $PhoneNumber,id:$id) {
      PhoneNumber
      Name
    }
  }`;
  return dispatch => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Contact added successfully!',
      showConfirmButton: false,
      timer: 1200
    }).then(() => {
      dispatch(postPhoneRedux(PhoneNumber, Name, id))
      return client.mutate({
        mutation: addQuery,
        variables: {
          PhoneNumber,
          Name,
          id
        }
      })
        .then(function (response) {
          dispatch(postPhoneSuccess(response.data))
        })
        .catch(function (error) {
          Swal.fire({
            icon: 'warning',
            title: "Network connection trouble!",
            text: "Click resend button to add your data!",
            type: "warning",
            buttons: true,
            dangerMode: true,
            timer: 1500
          }).then(() => {
            dispatch(postPhoneFailure(id))
          })

        });
    })

  }
}

// start delete user data

const deletePhoneRedux = (id) => ({
  type: 'DELETE_PHONE', id
})

export const deletePhoneSuccess = (users) => ({
  type: 'DELETE_PHONE_SUCCESS',
  users
})

export const deletePhoneFailure = () => ({
  type: 'DELETE_PHONE_FAILURE'
})


export const deletePhone = (id) => {

  const deleteQuery = gql`
  mutation removeContact($id: ID!) {
    removeContact(id: $id) {
      id
    }
  }`;
  return dispatch => {
    Swal.fire({
      icon: 'warning',
      title: "Are you sure delete this contact?",
      text: "You can't revert this action",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Delete it!",
      cancelButtonText: "No, Keep it!",
      showCloseButton: true,
      showLoaderOnConfirm: true
    }).then(result => {
      console.log('test delete')
      console.log(result)
      if (result.value) {
        dispatch(deletePhoneRedux(id))
        return client.mutate({
          mutation: deleteQuery,
          variables: {
            id
          }
        })
          .then(function (response) {
            dispatch(deletePhoneSuccess(response))
          })
          .catch(function (error) {
            console.error(error);
            dispatch(deletePhoneFailure())
          });
      }
    })

  }
}

// end delete user data


const resendPhoneSuccess = (id) => ({
  type: 'RESEND_PHONE_SUCCESS',
  id
})


export const resendPhone = (PhoneNumber, Name, id) => {
  const addQuery = gql`
  mutation addContact($PhoneNumber: String!, $Name: String!,$id:ID!) {
    addContact(PhoneNumber: $PhoneNumber, Name: $Name,id:$id) {
      PhoneNumber
      Name
    }
  }`;
  return dispatch => {
    return client.mutate({
      mutation: addQuery,
      variables: {
        PhoneNumber,
        Name,
        id
      }
    })
      .then(function (response) {
        dispatch(resendPhoneSuccess(id))
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postPhoneFailure(id))
      });
  }
}
const togleThisButton = () => ({
  type: 'TOGLE'
})


export const TogleButtonCta=()=>{
  return dispatch=>{
    dispatch(togleThisButton())
  }
}