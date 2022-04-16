import styles from "./FollowNotification.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NotificationInterface } from "../../../../../types";
const { profileImage, listItem, userInfo } = styles;

const userImage = require("./../../../../../assets/userImage.jpg");
const FollowNotification = ({ id }: NotificationInterface) => {
  return (
    <li key={id} className={listItem}>
      <Image
        className={profileImage}
        height="50"
        width="50"
        objectFit="cover"
        src={userImage}
        alt="profile image"
      />
      <div className={userInfo}>
        <span>
          <span>FlashCodx</span> Started Following You !
        </span>
      </div>
      <p></p>
    </li>
  );
};

export default FollowNotification;
