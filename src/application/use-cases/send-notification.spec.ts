import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notification-repository';

import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to create a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
