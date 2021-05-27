import React from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
export default function UserDetails(params) {
  return (
    <>
      <PersonIcon />
      <span style={{ paddingLeft: "5px", marginLeft: "5px", fontSize: "12px" }}>
        Taylor Travis
      </span>
      <div style={{ width: "5%" }}>
        <div
          style={{
            display: "inline-block",
            borderRadius: "100px",
            width: "6px",
            height: "6px",
            marginBottom: "9px",

            backgroundColor: "lightgreen",
          }}
        ></div>
        <ExpandMoreIcon />
      </div>
    </>
  );
}
