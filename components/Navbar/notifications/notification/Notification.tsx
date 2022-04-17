import styles from "./Notification.module.css";
import { NotificationInterface, NotificationTypes } from "../../../../types";
import FollowNotification from "./follow/FollowNotification";
import LikeNotification from "./like/LikeNotification";

const Notification = ({ type }: NotificationInterface) => {
  console.log(type);
  switch (type) {
    case NotificationTypes.follow:
      return <FollowNotification id={""} type={type} />;
    case NotificationTypes.like:
      return <LikeNotification />;
    default:
      return <FollowNotification id={""} type={type} />;
  }
};

export default Notification;
