import { useIsFocused } from '@react-navigation/native';
import useFetch from 'react-fetch-hook';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const propertyMattersGetAllGET = (Constants) =>
  fetch(`https://${Constants['API_BASE_URL']}/api:pts-api/property_matters`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

export const usePropertyMattersGetAllGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/property_matters`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchPropertyMattersGetAllGET = ({ children }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/property_matters`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const propertySettlementStepsGetGET = (Constants, { step_id }) =>
  fetch(
    `https://${
      Constants['API_BASE_URL']
    }/api:pts-api/property_settlement_steps/${step_id || ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const usePropertySettlementStepsGetGET = ({ step_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${
      Constants['API_BASE_URL']
    }/api:pts-api/property_settlement_steps/${step_id || ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchPropertySettlementStepsGetGET = ({ children, step_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${
      Constants['API_BASE_URL']
    }/api:pts-api/property_settlement_steps/${step_id || ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const conveyancersGetGET = (Constants, { conveyancer_id }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/conveyancers/${
      conveyancer_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const useConveyancersGetGET = ({ conveyancer_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/conveyancers/${
      conveyancer_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchConveyancersGetGET = ({ children, conveyancer_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/getAllConveyancerListByOrganisationId/${
      conveyancer_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const propertyMattersGetGET = (Constants, { property_id }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/property_matters/${
      property_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const usePropertyMattersGetGET = ({ property_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/property_matters/${
      property_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

// export const FetchPropertyMattersGetGET = ({ children, property_id }) => {
//   const Constants = GlobalVariables.useValues();
//   const isFocused = useIsFocused();

//   const {
//     isLoading: loading,
//     data,
//     error,
//   } = useFetch(
//     `https://${Constants['API_BASE_URL']}/api:pts-api/property_matters/${
//       property_id || ''
//     }`,
//     {
//       headers: {
//         Accept: 'application/json',
//         Authorization: Constants['AUTHORIZATION_HEADER'],
//         'Content-Type': 'application/json',
//       },
//       depends: [isFocused],
//     }
//   );
//   return children({ loading, data, error });
// };

export const FetchPropertyMattersGetGET = ({ children, property_id,  user_id, }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  console.log('pts call', property_id,'    ', user_id)
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/matters/${
      property_id || ''
    }/getPropertyMatterDetail/${
      user_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  console.log('pts response', data, error)
  return children({ loading, data, error });
};

export const bankDetailsCreatePOST = (
  Constants,
  { account_name, account_no, bank_name, bsb_no }
) =>
  fetch(`https://${Constants['API_BASE_URL']}/api:pts-api/bank_details`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      account_name: account_name,
      bank_name: bank_name,
      bsb_no: bsb_no,
      account_no: account_no,
    }),
  }).then((res) => res.json());

export const settlementAgentsGetGET = (Constants, { agent_id }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/settlement_agents/${
      agent_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const useSettlementAgentsGetGET = ({ agent_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/settlement_agents/${
      agent_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchSettlementAgentsGetGET = ({ children,  property_id,  user_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/organisation/${
      property_id || ''
    }/getConveyancerDetails/${
      user_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const usersGetSettlementsGET = (Constants, { user_id }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/users/${
      user_id || ''
    }/settlements`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const useUsersGetSettlementsGET = ({ user_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/users/${
      user_id || ''
    }/settlements`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

// export const FetchUsersGetSettlementsGET = ({ children, user_id }) => {
//   const Constants = GlobalVariables.useValues();
//   const isFocused = useIsFocused();

//   const {
//     isLoading: loading,
//     data,
//     error,
//   } = useFetch(
//     `https://${Constants['API_BASE_URL']}/api:pts-api/users/${
//       user_id || ''
//     }/settlements`,
//     {
//       headers: {
//         Accept: 'application/json',
//         Authorization: Constants['AUTHORIZATION_HEADER'],
//         'Content-Type': 'application/json',
//       },
//       depends: [isFocused],
//     }
//   );
//   return children({ loading, data, error });
// };

export const FetchUsersGetSettlementsGET = ({ children, user_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/getSettlementByUniqueID/${user_id}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

// export const FetchUsersGetSettlementsByStatusGET = ({
//   children,
//   user_id,
//   status,
// }) => {
//   const Constants = GlobalVariables.useValues();
//   const isFocused = useIsFocused();

//   const {
//     isLoading: loading,
//     data,
//     error,
//   } = useFetch(
//     `https://${Constants['API_BASE_URL']}/api:pts-api/users/${user_id}/settlements/${status}`,
//     {
//       headers: {
//         Accept: 'application/json',
//         Authorization: Constants['AUTHORIZATION_HEADER'],
//         'Content-Type': 'application/json',
//       },
//       depends: [isFocused],
//     }
//   );
//   return children({ loading, data, error });
// };

export const FetchUsersGetSettlementsByStatusGET = ({
  children,
  user_id,
  status,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/getSettlementByUniqueID/${user_id}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

// export const usersInvitationPOST = (Constants, { code, email, password }) =>
//   fetch(`https://${Constants['API_BASE_URL']}/api:pts-api/users/invitation`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       Authorization: Constants['AUTHORIZATION_HEADER'],
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email: email, code: code, password: password }),
//   }).then((res) => res.json());

  export const usersInvitationPOST = (Constants, { code, email, password }) =>
  fetch(`https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/auth/loginByCode`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION'],
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email, inviteCode: code, password: password }),
  }).then((res) => res.json());

// export const usersGetByEmailGET = (Constants, { email }) =>
//   fetch(
//     `https://${Constants['API_BASE_URL']}/api:pts-api/users/email?email=${
//       email || ''
//     }`,
//     {
//       headers: {
//         Accept: 'application/json',
//         Authorization: Constants['AUTHORIZATION_HEADER'],
//         'Content-Type': 'application/json',
//       },
//     }
//   ).then((res) => res.json());

export const usersGetByEmailGET = (Constants, { email }) =>
  fetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/userEmail/${
      email || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());



export const CheckusersByEmailGET = (Constants, { email }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/users/checkUser?email=${
      email || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const useUsersGetByEmailGET = ({ email }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/users/email?email=${
      email || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const signUpUser = async (Constants, body) => {
  const response = await fetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/auth/createUser`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Constants['AUTHORIZATION'],
      },
      body: JSON.stringify(body),
    }
  );

  return response.json();
};

export const FetchUsersGetByEmailGET = ({ children, email }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/users/email?email=${
      email || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const feedbacksCreatePOST = (Constants, { feedback, user_id }) =>
  fetch(`https://${Constants['API_BASE_URL']}/api:pts-api/feedbacks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: user_id, feedback: feedback }),
  }).then((res) => res.json());

export const usersSendResetInstructionPOST = (Constants, { email }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/users/send_reset_instruction`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    }
  ).then((res) => res.json());

// export const usersSendResetCodePOST = (Constants, { user_id }) =>
//   fetch(
//     `https://${Constants['API_BASE_URL']}/api:pts-api/users/${
//       user_id || ''
//     }/send_reset_code`,
//     {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         Authorization: Constants['AUTHORIZATION_HEADER'],
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({}),
//     }
//   ).then((res) => res.json());

export const usersSendResetCodePOST = (Constants, { user_id }) =>
  fetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/auth/sendResetCode`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: user_id,}),
    }
  ).then((res) => res.json());

export const glossariesGetGET = (Constants, { glossaries_id }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/glossaries/${
      glossaries_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const useGlossariesGetGET = ({ glossaries_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/glossaries/${
      glossaries_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGlossariesGetGET = ({ children, glossaries_id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/glossaries/${
      glossaries_id || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const glossariesGetAllGET = (Constants, { search_query }) =>
  fetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/glossaries?search_query=${
      search_query || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json());

export const useGlossariesGetAllGET = ({ search_query }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/glossaries?search_query=${
      search_query || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGlossariesGetAllGET = ({ children, search_query }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://${Constants['API_BASE_URL']}/api:pts-api/glossaries?search_query=${
      search_query || ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const usersUpdatePasswordPOST = (Constants, { password, user_id }) =>
  fetch(
    `https://${Constants['BASE_URL']}/api/developer-apis/matter-trackers/v1/auth/changePassword`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword: password, userId: user_id, }),
    }
  ).then((res) => res.json());
