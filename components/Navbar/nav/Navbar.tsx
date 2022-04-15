import type { NextPage } from "next";
const userImage = require("../../../assets/userImage.jpg");

import Image from "next/image";
import styles from "./Navbar.module.css";
const {
  nav,
  logo,
  contentContainer,
  searchContainer,
  searchInput,
  profileImage,
  centerElement,
  logoCenter,
  closeIcon,
  messagesBtn,
  NotificationsContainer,
  navItems,
  mobileUpload,
  searchIcon,
} = styles;
import {
  AiFillHome,
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiOutlineCloseCircle,
  AiFillPlusCircle,
  AiOutlineSearch,
  AiOutlineHome,
  AiFillHeart,
  AiFillCompass,
  AiOutlineCompass,
} from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";
import { IoPaperPlaneOutline, IoPaperPlaneSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import SearchDropdown from "../Searchdropdown/SearchDropdown";
import Notifications from "../notifications/Notifications";

enum HeaderStates {
  home,
  messages,
  upload,
  explore,
  notifications,
  profile,
}

const Navbar: NextPage = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentState, setHeaderState] = useState<HeaderStates>(
    HeaderStates.home
  );

  const delay: any = async () => {
    setTimeout(() => {
      setSearchActive(false);
    }, 150);
  };
  return (
    <div className={nav}>
      <div className={contentContainer}>
        <Link href={"/"}>
          <a>
            <HiOutlineCamera className={mobileUpload} />
            <div className={logo}>LIFESNAP</div>
          </a>
        </Link>
        <div className={centerElement}>
          <div className={logoCenter}>LIFESNAP</div>
          <div className={searchContainer}>
            {!searchActive && <AiOutlineSearch className={searchIcon} />}
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchActive(true)}
              onBlur={() => delay()}
              placeholder="Search"
              style={
                searchActive ? { textIndent: "10px" } : { textIndent: "30px" }
              }
              type="text"
              className={searchInput}
            />

            {searchActive && (
              <AiOutlineCloseCircle
                onClick={() => {
                  setSearchValue("");
                  setSearchActive(false);
                }}
                className={closeIcon}
              />
            )}

            {searchActive && <SearchDropdown />}
          </div>
        </div>

        <div className={navItems}>
          <Link href={"/"} passHref>
            <a>
              {currentState === HeaderStates.home ? (
                <AiFillHome />
              ) : (
                <AiOutlineHome
                  onClick={() => setHeaderState(HeaderStates.home)}
                />
              )}
            </a>
          </Link>

          <Link href={"/direct/inbox"} passHref>
            <a>
              {currentState === HeaderStates.messages ? (
                <IoPaperPlaneSharp />
              ) : (
                <IoPaperPlaneOutline
                  onClick={() => setHeaderState(HeaderStates.messages)}
                />
              )}
            </a>
          </Link>

          {currentState === HeaderStates.upload ? (
            <AiFillPlusCircle />
          ) : (
            <AiOutlinePlusCircle
              onClick={() => setHeaderState(HeaderStates.upload)}
            />
          )}

          <Link href={"/direct/inbox"} passHref>
            <a>
              {currentState === HeaderStates.explore ? (
                <AiFillCompass />
              ) : (
                <AiOutlineCompass
                  onClick={() => setHeaderState(HeaderStates.explore)}
                />
              )}
            </a>
          </Link>

          <div className={NotificationsContainer}>
            {currentState === HeaderStates.notifications ? (
              <>
                <AiFillHeart />
                <Notifications />
              </>
            ) : (
              <AiOutlineHeart
                onClick={() => setHeaderState(HeaderStates.notifications)}
              />
            )}
          </div>

          <Image
            onClick={() => setHeaderState(HeaderStates.profile)}
            className={profileImage}
            style={
              currentState === HeaderStates.profile
                ? { background: "white" }
                : { background: "transparent" }
            }
            height="35"
            width="35"
            objectFit="cover"
            src={userImage}
            alt="profile image"
          />
        </div>
        <div className={messagesBtn}>
          <IoPaperPlaneOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
