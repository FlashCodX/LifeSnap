import styles from "./Notification.module.css";
import type { NextPage } from "next";
import { NotificationInterface, NotificationTypes } from "../../../../types";
import FollowNotification from "./follow/FollowNotification";

const Notification = ({ type }: NotificationInterface) => {
  switch (type) {
    case NotificationTypes.follow:
      return <FollowNotification id={""} type={type} />;

    default:
      return <FollowNotification id={""} type={type} />;
  }
};

export default Notification;
