import { CountRecipientsNotification } from './count-recipient-notifications';

import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient Notifications', () => {
  it('should be able to count a notifications by Recipient', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientsNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId2' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipientId',
    });

    expect(count).toEqual(2);
  });
});
