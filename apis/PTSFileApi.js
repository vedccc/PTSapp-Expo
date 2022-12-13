export const documentsCreatePOST = (Constants, formData) =>
  fetch(`https://${Constants['API_BASE_URL']}/api:pts-api/documents`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  }).then((res) => res.json());

export const profileImageUploadPOST = (Constants) => {
  if (Constants['FILE'] != '' && Constants['FILE'] != undefined) {
    let localUri = Constants['FILE'];
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    const formData = new FormData();
    formData.append('content', { uri: localUri, name: filename, type });

    return fetch(
      'https://' +
        Constants['API_BASE_URL'] +
        '/api:pts-api/users/' +
        Constants['USER_ID'] +
        '/profile_image',
      {
        method: 'POST',
        headers: {
          Authorization: Constants['AUTHORIZATION_HEADER'],
        },
        body: formData,
      }
    ).then((response) => response.json());
  }

  return Promise.resolve();
};
