import React from 'react';
import { App } from './App';
import { render, screen } from '@testing-library/react';
import { NotificationProvider } from './app/NotificationProvider';
import { NotificationContainer } from './app/NotificationContainer';

describe('App', () => {
  const renderApp = () => render(
    <NotificationProvider>
      <App />
      <NotificationContainer />
    </NotificationProvider>
  )

  it('renders MyFirstComponent', async (): Promise<void> => {
    renderApp();
    const headline = screen.getByText(/MyFirstComponent/i);
    expect(headline).toBeInTheDocument();
  });
  
  it('sets otherState on click of button.', async (): Promise<void> => {
    renderApp();
    const otherStateButton = screen.getByText(/Set other State/i);

    expect(screen.getByText('State: InitialState')).toBeInTheDocument();
    otherStateButton.click();
    
    expect(await screen.findByText('State: Other State')).toBeInTheDocument();
  });
  
  it('renderes a notification on click..', async (): Promise<void> => {
    renderApp();
    
  });
});
