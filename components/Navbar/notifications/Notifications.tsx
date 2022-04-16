import styles from "./Notifications.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";
import { NotificationTypes } from "../../../types";
import Notification from "./notification/Notification";
const {
  container,
  requestsContainer,
  profileImage,
  requests,
  nextIcon,
  requestsList,
  goBack,
  recentList,
} = styles;

const listItems = Array.from(Array(19).keys());
const userImage = require("../../../assets/userImage.jpg");
const Notifications: NextPage = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className={container}>
      {!showList ? (
        <header className={requestsContainer} onClick={() => setShowList(true)}>
          <Image
            className={profileImage}
            height="45"
            width="45"
            objectFit="cover"
            src={userImage}
            alt="profile image"
          />
          <div className={requests}>
            <h1>Follow Requests</h1>
            <p>João + 11 others</p>
          </div>
          <MdNavigateNext className={nextIcon} />
        </header>
      ) : (
        <div className={requestsList}>
          <header className={goBack} onClick={() => setShowList(false)}>
            <MdNavigateBefore />
            {/* <button>Clear Noti</button> */}
          </header>
          <ul className={recentList}>
            {listItems.map((_, i) => (
              <Notification id={""} type={NotificationTypes.follow} key={i} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
