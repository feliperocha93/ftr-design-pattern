const EmailService = require('./EmailService.js');
const SMSService = require('./SMSService.js');
const PushNotificationService = require('./PushNotificationService.js');

class NotificationFacade {
    constructor() {
        this.emailService = new EmailService();
        this.smsService = new SMSService();
        this.pushNotificationService = new PushNotificationService();
    }

    sendNotification(type, to, message) {
        switch (type) {
            case 'email':
                this.emailService.sendEmail(to, message);
                break;
            case 'sms':
                this.smsService.sendSMS(to, message);
                break;
            case 'push':
                this.pushNotificationService.sendNotification(to, message);
                break;
            default:
                console.log('Invalid notification type');
        }
    }
}

module.exports = NotificationFacade;
