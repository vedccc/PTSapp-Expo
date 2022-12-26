import React from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Ionicons } from '@expo/vector-icons';

export default function CustomAlert(props) {
  const { theme } = props.props;
  const { type, visible, message, onPress } = props;

  if (type == 'success') {
    return (
      <FancyAlert
        style={{ backgroundColor: '#EEEEEE' }}
        icon={
          <View
            style={[
              styles.icon,
              { borderRadius: 32, backgroundColor: theme.colors.success },
            ]}
          >
            <Ionicons
              name={Platform.select({
                ios: 'ios-checkmark',
                android: 'md-checkmark',
                web: 'md-checkmark',
              })}
              size={36}
              color="#FFFFFF"
              backgroundColor="#FFFFFF"
            />
          </View>
        }
        visible={visible}
      >
        <View style={styles.content}>
          <Text style={styles.contentText}>{message ? message : ''}</Text>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: theme.colors.success }]}
            onPress={onPress}
          >
            <Text style={styles.btnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </FancyAlert>
    );
  } else if (type == 'error') {
    return (
      <FancyAlert
        style={{ backgroundColor: '#EEEEEE' }}
        icon={
          <View
            style={[
              styles.icon,
              { borderRadius: 32, backgroundColor: theme.colors.error },
            ]}
          >
            <Ionicons
              name={Platform.select({ ios: 'ios-close', android: 'md-close' })}
              size={36}
              color="#FFFFFF"
            />
          </View>
        }
        visible={visible}
      >
        <View style={styles.content}>
          <Text style={styles.contentText}>{message ? message : ''}</Text>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: theme.colors.success }]}
            onPress={onPress}
          >
            <Text style={styles.btnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </FancyAlert>
    );
  } else {
    return (
      <FancyAlert
        style={{ backgroundColor: '#EEEEEE' }}
        icon={
          <View
            style={[
              styles.icon,
              { borderRadius: 32, backgroundColor: theme.colors.primary_light },
            ]}
          >
            <Ionicons
              name={Platform.select({
                ios: 'ios-information',
                android: 'md-information',
              })}
              size={36}
              color="#FFFFFF"
            />
          </View>
        }
        visible={visible}
      >
        <View style={styles.content}>
          <Text style={styles.contentText}>{message ? message : ''}</Text>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: theme.colors.success }]}
            onPress={onPress}
          >
            <Text style={styles.btnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </FancyAlert>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16,
    marginBottom: 16,
  },
  contentText: {
    textAlign: 'center',
  },
  btn: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    alignSelf: 'stretch',
    marginTop: 16,
    minWidth: '50%',
    paddingHorizontal: 16,
  },
  btnText: {
    color: '#FFFFFF',
  },
});
