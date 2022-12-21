import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Circle, Icon, Spacer } from '@draftbit/ui';
import * as ImagePicker from 'expo-image-picker';
import * as GlobalVariables from '../config/GlobalVariableContext';

export default function SelectImage(props) {
  const Constants = GlobalVariables.useValues();
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [imageURI, setImageURI] = useState('');
  const { theme } = props.props;

  // trigger the handler method as soon as the function component
  // SelectImage is mounted
  useEffect(() => {
    onHandlePermission();
  }, []);

  // promot a dialog box by asking for a user's permission
  // to allow the app to open the phone's library
  // and select the image
  const onHandlePermission = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    // if permissions are not granted, display an alert box
    if (permissionResult.granted === false) {
      alert('Permission to access Photos is required!');
      return;
    }
  };

  // hanlder function to select the image
  // from the media library
  const onSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // if the process of selecting the image is cancelled or interrupted by the app user in between
    if (!result.cancelled) {
      setImageURI(result.uri);

      setGlobalVariableValue({
        key: 'FILE',
        value: result.uri,
      });
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={onSelectImage}>
        <View pointerEvents="auto">
          <Circle size={200} bgColor={theme.colors.divider}>
            <Image
              style={styles.ImageRh}
              resizeMode="center"
              source={{
                uri:
                  imageURI == '' ? Constants['USER_PROFILE_IMAGE'] : imageURI,
              }}
            />
          </Circle>
          <Icon
            style={styles.IconYd}
            name="MaterialIcons/add-a-photo"
            color={theme.colors.light}
            size={58}
          />
        </View>
        <Spacer top={8} right={8} bottom={8} left={8} />
        <Text style={[styles.Texti7, { color: theme.colors.light }]}>
          {'Replace Profile Image'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageRh: {
    width: 200,
    height: 200,
  },
  IconYd: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  Texti7: {
    fontFamily: 'MontserratMedium',
    textAlign: 'center',
  },
});
