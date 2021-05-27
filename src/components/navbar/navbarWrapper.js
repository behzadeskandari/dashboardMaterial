import React from "react";
import CustomizedMenus from "../navbar/dropdownMenu";
import SearchAppBar from "../navbar/SearchField";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import Brightness2RoundedIcon from "@material-ui/icons/Brightness2Rounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import UserDetails from "./UserDetails";

function NavWrapper(params) {
  return (
    <>
      <CustomizedMenus></CustomizedMenus>
      <SearchAppBar />
      <Brightness2RoundedIcon
        style={{
          paddingRight: "10px",
          position: "absolute",
          right: "11em",
        }}
      />
      <NotificationsActiveRoundedIcon
        style={{
          paddingRight: "10px",
          position: "absolute",
          right: "10em",
        }}
      />
      <UserDetails />
      <PowerSettingsNewRoundedIcon
        style={{
          color: "orange",
        }}
      />
    </>
  );
}

export default NavWrapper;
