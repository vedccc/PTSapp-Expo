import { useIsFocused } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import useFetch from 'react-fetch-hook';
import * as GlobalVariables from '../config/GlobalVariableContext';

export async function fileToBase64(uri) {
  try {
    let fileBase64 = await FileSystem.readAsStringAsync(uri, {
      encoding: 'base64',
    });
    return fileBase64;
  } catch (e) {
    console.error(e.message);
    return '';
  }
}

// https://developers.docusign.com/platform/auth/authcode/authcode-get-token/

export const oAuthToken$refreshToken$POST = (Constants, { refresh_token }) =>
  fetch(`https://account-d.docusign.com/oauth/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['DOCU_BASIC_AUTH'],
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
  }).then((res) => res.json());

export const oAuthToken$authorizationCode$POST = (Constants, { code }) =>
  fetch(`https://account-d.docusign.com/oauth/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['DOCU_BASIC_AUTH'],
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ grant_type: 'authorization_code', code: code }),
  }).then((res) => res.json());

export const oAuthUserInfoGET = (Constants) =>
  fetch(`https://account-d.docusign.com/oauth/userinfo`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['DOCU_ACCESS_TOKEN'],
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

export const useOAuthUserInfoGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://account-d.docusign.com/oauth/userinfo`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['DOCU_ACCESS_TOKEN'],
      'Content-Type': 'application/json',
    },
    depends: [isFocused],
  });
};

export const FetchOAuthUserInfoGET = ({ children }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://account-d.docusign.com/oauth/userinfo`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['DOCU_ACCESS_TOKEN'],
      'Content-Type': 'application/json',
    },
    depends: [isFocused],
  });
  return children({ loading, data, error });
};

// https://developers.docusign.com/docs/esign-rest-api/reference/envelopes/envelopes/create/

export const envelopesDraftPOST = async (Constants, { account_id }) =>
  fetch(
    `https://demo.docusign.net/restapi/v2/accounts/${
      account_id || ''
    }/envelopes`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['DOCU_ACCESS_TOKEN'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    }
  ).then((res) => res.json());

export const envelopesCreatePOST = async (
  Constants,
  { account_id, documents, signer }
) =>
  fetch(
    `https://demo.docusign.net/restapi/v2/accounts/${
      account_id || ''
    }/envelopes`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['DOCU_ACCESS_TOKEN'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emailSubject: 'Please sign this document',
        documents: documents,
        recipients: {
          signers: [
            {
              name: signer,
              email: signer,
              recipientId: '1',
              clientUserId: '1000',
            },
          ],
        },
        status: 'sent',
      }),
    }
  ).then((res) => res.json());

// https://developers.docusign.com/docs/esign-rest-api/reference/envelopes/envelopeviews/createrecipient/

export const envelopesEmbedRecipientPOST = (
  Constants,
  { account_id, email, envelope_id, return_url }
) =>
  fetch(
    `https://demo.docusign.net/restapi/v2/accounts/${
      account_id || ''
    }/envelopes/${envelope_id || ''}/views/recipient`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['DOCU_ACCESS_TOKEN'],
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: email,
        email: email,
        clientUserId: '1000',
        returnUrl: return_url,
        authenticationMethod: 'None',
      }),
    }
  ).then((res) => res.json());
