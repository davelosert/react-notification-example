import React from 'react';
import './App.css';
import { NotificationProvider } from './app/NotificationProvider';
import { FirstComponent } from './app/FirstComponent';
import { NotificationContainer } from './app/NotificationContainer';

function App() {
  return (
        <NotificationProvider>
            <FirstComponent title='MyFirstComponent' />
            <NotificationContainer />
        </NotificationProvider>
  );
}

export {
  App
};
