import * as React from "react";
import * as SignalR from "@microsoft/signalr";

const notificationHubConnection = new SignalR.HubConnectionBuilder()
  .configureLogging(SignalR.LogLevel.Warning)
  .withUrl("/chat")
  .withAutomaticReconnect()
  .build();

export const EventManagerContext =
  React.createContext<SignalR.HubConnection | null>(null);

export const EventManagerProvider: React.FC = ({ children }) => {
  return (
    <EventManagerContext.Provider value={notificationHubConnection}>
      {children}
    </EventManagerContext.Provider>
  );
};
