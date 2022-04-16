import styles from "./Notifications.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const {
  container,
  requestsContainer,
  profileImage,
  requests,
  nextIcon,
  requestsList,
  goBack,
  listItem,
  userInfo,
  userDetails,
  recentList,
  closeBtn,
} = styles;

enum NotificationTypes {
  comment,
  like,
  mention,
  follow,
  acceptfollow,
}

interface NotificationInterface {
  type: NotificationTypes;
  origin: {};
  target: {};
}

const listItems = Array.from(Array(19).keys());
const userImage = require("../../../assets/userImage.jpg");
const Notification: NextPage = () => {
  const [showList, setShowList] = useState(false);
  return <div className={container}></div>;
};

export default Notification;
