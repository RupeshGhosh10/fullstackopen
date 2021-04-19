import React from 'react';

const Notification = ({ message }) => {
  if (message[0].length === 0) return null;

  return <div className={message[1]}>{message[0]}</div>;
};

export default Notification;
