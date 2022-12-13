import { useIsFocused } from '@react-navigation/native';
import useFetch from 'react-fetch-hook';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const authorizationPOST = (Constants) =>
  fetch(`https://au-api.utilihub.io/v2/auth`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['MOVINGHUB_BASIC_AUTH'],
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

export const FetchThirdPartiesServicesGET = ({ children, token }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://au-api.utilihub.io/v2/third-parties/services?partner=` +
      Constants['MOVINGHUB_PARTNER_CODE'],
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['MOVINGHUB_BASIC_AUTH'],
        'Content-Type': 'application/json',
        'MHUB-API-KEY': Constants['MOVINGHUB_API_KEY'],
        token: token,
      },
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const FetchServicePlansPOST = ({
  children,
  token,
  serviceId,
  leadType,
  leadOfferType,
  address,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://au-api.utilihub.io/v2/service-plans/` +
      Constants['MOVINGHUB_PARTNER_CODE'] +
      '/' +
      serviceId,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['MOVINGHUB_BASIC_AUTH'],
        'Content-Type': 'application/json',
        'MHUB-API-KEY': Constants['MOVINGHUB_API_KEY'],
        token: token,
      },
      body: JSON.stringify({
        type: leadType,
        offer: leadOfferType,
        showAll: true,
        to_address: {
          street_number: address.street_number,
          street_name: address.street_name,
          suburb: address.suburb,
          state: address.state,
          postcode: address.postcode,
        },
      }),
      depends: [isFocused],
    }
  );
  return children({ loading, data, error });
};

export const thirdPartiesPartialOnlineLeadsPOST = (
  Constants,
  {
    token,
    leadOfferType,
    leadType,
    propertyOwnership,
    title,
    firstName,
    lastName,
    email,
    primaryPhone,
    dateOfBirth,
    moveInDate,
  }
) =>
  fetch(`https://au-api.utilihub.io/v2/third-parties/partial-online-leads`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['MOVINGHUB_BASIC_AUTH'],
      'Content-Type': 'application/json',
      'MHUB-API-KEY': Constants['MOVINGHUB_API_KEY'],
      token: token,
    },
    body: JSON.stringify({
      PartnerCode: Constants['MOVINGHUB_PARTNER_CODE'],
      Lead: {
        Title: title,
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        DateOfBirth: dateOfBirth,
        PrimaryPhone: primaryPhone,
        MoveInDate: moveInDate,
        NewAddress: {
          DPID: 'DPID',
          UnitNumber: 'UnitNumber',
          StreetNumber: 'StreetNumber',
          StreetName: 'StreetName',
          StreetType: 'StreetType',
          Suburb: 'Suburb',
          State: 'State',
          Postcode: 'Postcode',
        },
        PropertyOwnership: propertyOwnership,
      },
      LeadOfferType: leadOfferType,
      LeadType: leadType,
    }),
  }).then((res) => res.json());

export const submitLeadsPOST = (
  Constants,
  {
    token,
    address,
    leadOfferType,
    leadType,
    propertyOwnership,
    title,
    firstName,
    lastName,
    email,
    primaryPhone,
    dateOfBirth,
    moveInDate,
    selectedServices,
  }
) =>
  fetch(
    `https://au-api.utilihub.io/v2/applications/save-new/` +
      Constants['MOVINGHUB_PARTNER_CODE'],
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: Constants['MOVINGHUB_BASIC_AUTH'],
        'Content-Type': 'application/json',
        'MHUB-API-KEY': Constants['MOVINGHUB_API_KEY'],
        token: token,
      },
      body: JSON.stringify({
        partner_code: Constants['MOVINGHUB_PARTNER_CODE'],
        application_status: 1,
        application_status_tag: 1,
        application_type: leadType,
        offer_type: leadOfferType,
        customer: {
          title: title,
          first_name: firstName,
          middle_name: '',
          last_name: lastName,
          email: email,
          primary_phone: primaryPhone,
          secondary_phone: '',
          date_of_birth: dateOfBirth,
        },
        move_in_date: moveInDate,
        meta_comment: '',
        action: 'submit_quick',
        send_customer_sms: true,
        send_customer_email: true,
        address: {
          to_address: {
            street_number: address.street_number,
            street_name: address.street_name,
            suburb: address.suburb,
            state: address.state,
            postcode: address.postcode,
          },
        },
        property: {
          property_ownership: propertyOwnership,
        },
        selected_services: selectedServices,
      }),
    }
  ).then((res) => res.json());
