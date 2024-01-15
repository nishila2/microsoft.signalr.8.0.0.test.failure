import { EventManagerProvider } from "./EventContext";

export const Footer = () => {
  return (
    <EventManagerProvider>
      <h5>Footer</h5>
    </EventManagerProvider>
  );
};
