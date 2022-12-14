import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as DataCoreApi from '../apis/DataCoreApi.js';
import * as DocuSignApi from '../apis/DocuSignApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';

export default function CheckToken(props) {
  const Constants = GlobalVariables.useValues();
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { navigation } = props.props;

  // trigger the handler method as soon as the function component
  // SelectImage is mounted
  useEffect(() => {
    async function checkToken() {
      if (
        Constants['AUTHORIZATION_HEADER'] != '' &&
        Constants['AUTHORIZATION_HEADER'] != undefined
      ) {
        const authResponse = await DataCoreApi.authRefreshTokenPOST(Constants, {
          refresh_token: Constants['AUTHORIZATION_REFRESH'],
        });
        const authToken = authResponse.authToken;
        const userId = authResponse.userId;
        if (!authToken) {
          navigation.navigate('LoginScreen');
        } else {
          setGlobalVariableValue({
            key: 'AUTHORIZATION_HEADER',
            value: 'Bearer ' + authToken,
          });
          setGlobalVariableValue({
            key: 'USER_ID',
            value: userId,
          });
        }
      }

      if (
        Constants['DOCU_REFRESH_TOKEN'] != '' &&
        Constants['DOCU_REFRESH_TOKEN'] != undefined
      ) {
        const authCodeResult = await DocuSignApi.oAuthToken$refreshToken$POST(
          Constants,
          { refresh_token: Constants['DOCU_REFRESH_TOKEN'] }
        );
        const authCodeResultJson = authCodeResult;
        const access_token = authCodeResultJson.access_token;
        const refresh_token = authCodeResultJson.refresh_token;
        setGlobalVariableValue({
          key: 'DOCU_ACCESS_TOKEN',
          value: 'Bearer ' + access_token,
        });
        setGlobalVariableValue({
          key: 'DOCU_REFRESH_TOKEN',
          value: refresh_token,
        });
      }
    }
    checkToken();
  }, []);
  return <View></View>;
}
