import React, { FunctionComponent, useContext, useState } from 'react';

type Notification = {
  title: string,
  message: string
};

type InternalNotification = Notification & {
  id: number
};

type NotificationContextValue = {
  notifications: InternalNotification[];
  showNotification: (notification: Notification) => void;
  removeNotification: (notification: InternalNotification) => void;
} | undefined;

const NotificationContext = React.createContext<NotificationContextValue>(undefined)

let count = 0;
const NotificationProvider: FunctionComponent = ({ children }) => {
  const [notifications, setNotifications ] = useState<InternalNotification[]>([]);
  
  const value: NotificationContextValue = {
    notifications,
    showNotification: (notification) => {
      setNotifications((currentNotifications) => [
        ...currentNotifications,
        { ...notification, id: count++ }
      ]);
    },
    removeNotification: (notification) => {
      setNotifications((currentNotifications) => 
        currentNotifications.filter((inner) => inner.id !== notification.id)
      )
    }
  }
  
  return <NotificationContext.Provider value={value}>
    {children}
    </NotificationContext.Provider>
}

const useNotifications = () => {
  const context = useContext(NotificationContext);
  if(context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider.');
  }
  
  return context;
}


export {
  NotificationProvider,
  useNotifications
};
