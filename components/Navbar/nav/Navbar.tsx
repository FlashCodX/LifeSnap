import type { NextPage } from "next";
import userImage from "../../../assets/userImage.jpg";
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
import UserSearch from "../userSearchComponent/UserSearch";
import Notifications from "../notifications/Notifications";
import { HeaderStates } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../redux";
import { bindActionCreators } from "redux";
const Navbar: NextPage = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const [currentState, setHeaderState] = useState<HeaderStates>(
  //   HeaderStates.notifications
  // );

  const { navState }: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const { setNavState } = bindActionCreators(actionCreators, dispatch);
  const delay: any = async () => {
    setTimeout(() => {
      setSearchActive(false);
    }, 150);
  };
  console.log(navState);
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

            {searchActive && <UserSearch />}
          </div>
        </div>

        <div className={navItems}>
          <Link href={"/"} passHref>
            <a>
              {navState === HeaderStates.home ? (
                <AiFillHome />
              ) : (
                <AiOutlineHome onClick={() => setNavState(HeaderStates.home)} />
              )}
            </a>
          </Link>

          <Link href={"/"} passHref>
            <a>
              {navState === HeaderStates.messages ? (
                <IoPaperPlaneSharp />
              ) : (
                <IoPaperPlaneOutline
                  onClick={() => setNavState(HeaderStates.messages)}
                />
              )}
            </a>
          </Link>

          {navState === HeaderStates.upload ? (
            <AiFillPlusCircle />
          ) : (
            <AiOutlinePlusCircle
              onClick={() => setNavState(HeaderStates.upload)}
            />
          )}

          <Link href={"/"} passHref>
            <a>
              {navState === HeaderStates.explore ? (
                <AiFillCompass />
              ) : (
                <AiOutlineCompass
                  onClick={() => setNavState(HeaderStates.explore)}
                />
              )}
            </a>
          </Link>

          <div className={NotificationsContainer}>
            {navState === HeaderStates.notifications ? (
              <>
                <AiFillHeart />
                <Notifications />
              </>
            ) : (
              <AiOutlineHeart
                onClick={() => setNavState(HeaderStates.notifications)}
              />
            )}
          </div>

          <Image
            onClick={() => setNavState(HeaderStates.profile)}
            className={profileImage}
            style={
              navState === HeaderStates.profile
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
