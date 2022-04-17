import styles from "./Notifications.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { GoMention } from "react-icons/go";
import { FaComment, FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import { NotificationTypes } from "../../../types";
import Notification from "./notification/Notification";
import { AiFillLike } from "react-icons/ai";
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

const MenuItem = ({
  setPickedType,
  text,
  pickedType,
  description,
  icon,
}: any) => (
  <div className={requestsContainer} onClick={() => console.log("ss")}>
    {icon}
    {/* <Image
      className={profileImage}
      height="45"
      width="45"
      objectFit="cover"
      src={userImage}
      alt="profile image"
    /> */}
    <div className={requests}>
      <h1>{text}</h1>
      <p>{description}</p>
    </div>
    <MdNavigateNext className={nextIcon} />
  </div>
);

const listItems = Array.from(Array(19).keys());
const userImage = require("../../../assets/userImage.jpg");
const Notifications: NextPage = () => {
  const [pickedType, setPickedType] = useState<NotificationTypes>(
    NotificationTypes.none
  );
  console.log(pickedType);
  return (
    <div className={container}>
      {!pickedType.none ? (
        <>
          <MenuItem
            icon={<FaUserPlus />}
            text={"New Followers"}
            description={"João + 11 others"}
            setPickedType={() => setPickedType(NotificationTypes.follow)}
          />
          <MenuItem
            icon={<RiUserFollowFill />}
            text={"Follow Requests"}
            description={"João + 11 others"}
            // hook={setPickedType(NotificationTypes.follow)}
            // type={setPickedType(NotificationTypes.followRequest)}
          />
          <MenuItem
            icon={<AiFillLike />}
            text={"Media Likes"}
            description={"+2 new likes"}
            // hook={setShowList}
            // type={setPickedType(NotificationTypes.like)}
          />
          <MenuItem
            icon={<FaComment />}
            text={"Media Comments"}
            description={"14 new comments"}
            // hook={setShowList}
            // type={NotificationTypes.comment}
          />
          <MenuItem
            icon={<GoMention />}
            text={"Mentions"}
            description={"14 new Mentions"}
            // hook={setShowList}
            // type={NotificationTypes.mention}
          />
        </>
      ) : (
        <div className={requestsList}>
          <header className={goBack}>
            <MdNavigateBefore
              onClick={() => setPickedType(NotificationTypes.none)}
            />
            <button>Clear All</button>
          </header>
          <ul className={recentList}>
            {listItems.map((_, i) => (
              <Notification id={""} type={pickedType} key={i} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
