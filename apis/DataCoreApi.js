import { useIsFocused } from '@react-navigation/native';
import useFetch from 'react-fetch-hook';
import * as GlobalVariables from '../config/GlobalVariableContext';

// export const authRefreshTokenPOST = (Constants, { refresh_token }) =>
//   fetch(
//     `https://${Constants['API_BASE_URL']}/api:data-core-api/auth/refresh_token`,
//     {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'X-APP-KEY': Constants['API_KEY'],
//       },
//       body: JSON.stringify({ refresh_token: refresh_token }),
//     }
//   ).then((res) => res.json());

export const authRefreshTokenPOST = (Constants, { refresh_token }) =>
  fetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/auth/refreshToken`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Constants['AUTHORIZATION'],
      },
      body: JSON.stringify({ authRefreshToken: refresh_token }),
    }
  ).then((res) => res.json());

// export const usersUpdatePOST = (
//   Constants,
//   { email, family_name, first_name, full_name, mobile_no, user_id }
// ) =>
//   fetch(
//     `https://${Constants['API_BASE_URL']}/api:data-core-api/users/${
//       user_id || ''
//     }`,
//     {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'X-APP-KEY': Constants['API_KEY'],
//       },
//       body: JSON.stringify({
//         first_name: first_name,
//         family_name: family_name,
//         full_name: full_name,
//         email: email,
//         mobile_no: mobile_no,
//       }),
//     }
//   ).then((res) => res.json());

export const usersUpdatePOST = (
  Constants,
  { firstName, middleName, lastName, mobileNo, user_id }
) =>
  fetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/auth/updateUser`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Constants['AUTHORIZATION'],
      },
      body: JSON.stringify({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        mobileNo: mobileNo,
        userId: user_id,
      }),
    }
  ).then((res) => res.json());

// export const usersGetGET = (Constants, { user_id }) =>
//   fetch(
//     `https://${Constants['API_BASE_URL']}/api:data-core-api/users/${
//       user_id || ''
//     }`,
//     {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'X-APP-KEY': Constants['API_KEY'],
//       },
//     }
//   ).then((res) => res.json());

export const usersGetGET = (constants, { user_id }) =>
  fetch(
    `https://realtime-dem.proaxiom.tech/api/developer-apis/matter-trackers/v1/user/${user_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic dHJhY2tlcjpUZXN0ZXIwMQ==',
      },
    }
  ).then((res) => res.json());

export const useUsersGetGET = ({ user_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:data-core-api/users/${user_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-APP-KEY': Constants['API_KEY'],
      },
      depends: [isFocused],
    }
  );
};

export const FetchUsersGetGET = ({ children, user_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['API_BASE_URL']}/api:data-core-api/users/${user_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-APP-KEY': Constants['API_KEY'],
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

// export const authLoginPOST = (Constants, { email, password }) =>
//   fetch(`https://${Constants['API_BASE_URL']}/api:data-core-api/auth/login`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'X-APP-KEY': Constants['API_KEY'],
//     },
//     body: JSON.stringify({ email: email, password: password }),
//   }).then((res) => res.json());

export const authLoginPOST = (Constants, { email, password }) =>
  fetch(`https://realtime-dem.proaxiom.tech/api/developer-apis/matter-trackers/v1/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic dHJhY2tlcjpUZXN0ZXIwMQ==',
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then((res) => {
    const aaa = res.json();
    return aaa;
  }).catch((error) => {
    console.log('error', error);
  })


// export const authLoginPOST = (Constants, { email, password }) =>
//   fetch(`https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/auth/login`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': Constants['AUTHORIZATION'],
//     },
//     body: JSON.stringify({ email: email, password: password }),
//   }).then((res) => res.json());

export const getLatestSettlements = (Constants) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-core-api/latest/${Constants['USER_ID']}/settlements`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'X-APP-KEY': Constants['API_KEY'],
      },
    }
  ).then((res) => res.json());

export const getLatestMatterDetails = (Constants) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-core-api/latest/${Constants['USER_ID']}/matterdetails`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'X-APP-KEY': Constants['API_KEY'],
      },
    }
  ).then((res) => res.json());
