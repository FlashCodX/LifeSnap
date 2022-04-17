import styles from "./LikeNotification.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useState } from "react";
const { container } = styles;

const listItems = Array.from(Array(19).keys());
const LikeNotification: NextPage = () => {
  const [showList, setShowList] = useState(false);
  return <div className={container}>dsad</div>;
};

export default LikeNotification;
