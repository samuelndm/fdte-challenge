import React, { createContext, useContext, useState } from "react";
import Notification from "./Notification";

export const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const [notificationType, setNotificationType] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationTime, setNotificationTime] = useState(5000);
  const [notificationKey, setNotificationKey] = useState("");
  const TIME_DEFAULT = 5000;

  const createNotification = (notification) => {
    const { type, message, time } = notification;

    if (type) {
      setNotificationType(type);
    }
    if (message) {
      setNotificationMessage(message);
    }

    setNotificationTime(time || TIME_DEFAULT);

    const timeNow = new Date().toLocaleString();
    setNotificationKey(timeNow); // re-render <Notification />
  };

  return (
    <NotificationContext.Provider value={{ createNotification }}>
      {children}
      <Notification
        type={notificationType}
        message={notificationMessage}
        time={notificationTime}
        key={notificationKey}
      />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
