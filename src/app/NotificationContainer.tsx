import { Fragment, FunctionComponent, ReactElement } from 'react';
import { useNotifications } from './NotificationProvider';

const NotificationContainer: FunctionComponent = (): ReactElement => {
  const { notifications, removeNotification } = useNotifications();
  
  const notificationLi = notifications.map((notification, index) => {
    return (
      <li key={`notification-${index}`}>
        {notification.title} - {notification.message} 
        <button onClick={() => removeNotification(notification)}>x</button>
      </li>
    )
  });

  return (
    <Fragment>
      <h1>NotificationContainer</h1>
      <ul>
        {notificationLi}
      </ul>
  </Fragment>
  );
};

export {
  NotificationContainer
}
