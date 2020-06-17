/**
 * @namespace PushNotificationActionTypes
 * Redux action types dispatched by Shoutem push notifications and its implementations.
 *

/**
 @typedef SELECT_PUSH_NOTIFICATION_GROUPS
 @type {object}
 @property payload {added: [], removed: []} Data
 */
export const SELECT_PUSH_NOTIFICATION_GROUPS = 'shoutem.push-notifications.SELECT_GROUPS';

/**
 @typedef NOTIFICATION_RECEIVED
 @type {object}
 @property body {action_type: , action_params: } Data
 */
export const NOTIFICATION_RECEIVED = 'shoutem.push-notifications.NOTIFICATION_RECEIVED';

/**
 @typedef USER_NOTIFIED
 @type {object}
 */
export const USER_NOTIFIED = 'shoutem.push-notifications.USER_NOTIFIED';

/**
 @typedef DEVICE_TOKEN_RECEIVED
 @type {object}
 @property type String
 @property token String
 */
export const DEVICE_TOKEN_RECEIVED = 'shoutem.push-notifications.DEVICE_TOKEN_RECEIVED';

/**
 @typedef SHOW_PUSH_NOTIFICATION
 @type {object}
 @property type String
 @property token String
 */
export const SHOW_PUSH_NOTIFICATION = 'shoutem.push-notifications.SHOW_PUSH_NOTIFICATION';
