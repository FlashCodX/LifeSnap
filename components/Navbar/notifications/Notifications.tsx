import styles from "./Notifications.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const {
  container,
  requestsContainer,
  profileImage,
  requests,
  nextIcon,
  requestsList,
  goBack,
} = styles;

const listItems = Array.from(Array(19).keys());
const userImage = require("../../../assets/userImage.jpg");
const Notifications: NextPage = () => {
  return (
    <div className={container}>
      <header className={requestsContainer}>
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

      <div className={requestsList}>
        <header className={goBack}>
          <MdNavigateBefore />
        </header>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
