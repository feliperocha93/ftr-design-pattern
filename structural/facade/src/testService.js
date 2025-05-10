const NotificationFacade = require('./NotificationFacade.js');

const notifier = new NotificationFacade();

notifier.sendNotification('email', 'example@email.com', 'Hello Email!');
notifier.sendNotification('sms', '1234567890', 'Hello SMS!');
notifier.sendNotification('push', 'userDeviceId', 'Hello Push Notification!');
