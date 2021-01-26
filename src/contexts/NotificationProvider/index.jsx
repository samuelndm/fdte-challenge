import React, { createContext, useContext, useState } from "react";
import Notification from "./Notification";

export const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

const TIME_DEFAULT = 5000;
const NOTIFICATION_TYPES = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFOs: "info",
};

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({});

  /**
   * Display a notification on the screen
   * @param {String} type - The type of the notification
   * @param {String} message - The message inside the notification
   * @param {Number} time - optional notification time
   */
  const createNotification = (type, message, time) => {
    setNotification({
      type: type || NOTIFICATION_TYPES.DEFAULT,
      message: message || "",
      time: time || TIME_DEFAULT,
      key: new Date().toLocaleString(), // re-render <Notification />
    });
  };

  return (
    <NotificationContext.Provider
      value={{ createNotification, NOTIFICATION_TYPES }}
    >
      {children}

      <Notification
        type={notification.type}
        message={notification.message}
        time={notification.time}
        key={notification.key}
      />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
