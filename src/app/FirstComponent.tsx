import { Fragment, FunctionComponent, ReactElement, useState } from 'react';
import { useNotifications } from './NotificationProvider';

interface FirstComponentProps {
  title: string;
}
const FirstComponent: FunctionComponent<FirstComponentProps> = ({ title }): ReactElement => {
  const { showNotification } = useNotifications();
  const [currentState, setCurrentState ] = useState('InitialState');
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>State: {currentState}</p>
      <button onClick={() => setCurrentState('Other State')}>Set other State</button>
      <button onClick={
        () => {
          showNotification({
            title: 'New Notification',
            message: 'What a message'
          })
        }
      }>Send Notification</button>

    </Fragment>
  );
};

export {
  FirstComponent
}
