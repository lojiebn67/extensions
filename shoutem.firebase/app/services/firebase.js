import _ from 'lodash';
import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotifications from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

function requestPermissions() {
  PushNotifications.requestPermissions();
}

function subscribeToTopic(topic) {
  messaging().subscribeToTopic(topic);
}

function unsubscribeFromTopic(topic) {
  messaging().unsubscribeFromTopic(topic);
}

function clearBadge() {
  if (Platform.OS === 'android') {
    return null;
  }

  return PushNotificationIOS.setApplicationIconBadgeNumber(0);
}

function selectGroups(groups) {
  const { added = [], removed = [] } = groups;

  _.forEach(added, group => subscribeToTopic(group));
  _.forEach(removed, group => unsubscribeFromTopic(group));
}

function presentLocalNotification(config) {
  PushNotificationIOS.presentLocalNotification(config);
}

export default {
  requestPermissions,
  subscribeToTopic,
  unsubscribeFromTopic,
  selectGroups,
  presentLocalNotification,
  clearBadge,
};
