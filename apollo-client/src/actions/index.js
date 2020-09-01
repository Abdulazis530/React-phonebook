import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

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

export const postPhoneFailure = (PhoneNumber) => ({
  type: 'POST_PHONE_FAILURE', PhoneNumber
})

const postPhoneRedux = (PhoneNumber, Name,id) => ({
  type: 'POST_PHONE', PhoneNumber, Name,id
})


export const postPhone = (PhoneNumber, Name,id) => {
  const addQuery = gql`
  mutation addContact($Name: String!, $PhoneNumber: String!,$id:ID!) {
    addContact(Name: $Name, PhoneNumber: $PhoneNumber,id:$id) {
      PhoneNumber
      Name
    }
  }`;
  return dispatch => {
    dispatch(postPhoneRedux(PhoneNumber, Name,id))
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
      console.error(error);
      dispatch(postPhoneFailure(PhoneNumber))
    });
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
}

// end delete user data


const resendPhoneSuccess = (id) => ({
  type: 'RESEND_PHONE_SUCCESS',
  id
})


export const resendPhone = (PhoneNumber, Name,id) => {
  const addQuery = gql`
  mutation addContact($PhoneNumber: String!, $Name: String!) {
    addContact(PhoneNumber: $PhoneNumber, Name: $Name) {
      PhoneNumber
      Name
    }
  }`;
  return dispatch => {
    return client.mutate({
      mutation: addQuery,
      variables: {
        PhoneNumber,
        Name
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


