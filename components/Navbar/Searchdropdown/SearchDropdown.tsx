import styles from "./SearchDropdown.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const {
  container,
  searchHeader,
  searchTitle,
  searchClear,
  recentList,
  listItem,
  profileImage,
  userDetails,
  userInfo,
  closeBtn,
} = styles;

const listItems = Array.from(Array(19).keys());
const userImage = require("../../../assets/userImage.jpg");
const SearchDropdown: NextPage = () => {
  return (
    <div className={container}>
      <header className={searchHeader}>
        <h1 className={searchTitle}>Recent</h1>
        <button className={searchClear}>Clear All</button>
      </header>

      <ul className={recentList}>
        {listItems.map((item, i) => {
          console.log(i);
          return (
            <li key={i} className={listItem}>
              <Image
                className={profileImage}
                height="50"
                width="50"
                objectFit="cover"
                src={userImage}
                alt="profile image"
              />
              <div className={userInfo}>
                <h1>FlashCodx</h1>
                <div className={userDetails}>
                  <span>Flash</span>
                  <p>Following</p>
                </div>
              </div>
              <AiOutlineClose className={closeBtn} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchDropdown;
