import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";
import { Label } from "@material-ui/icons";

function FromLayout() {
  return (
    <>
      <span
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          marginTop: "18px",
          position: "relative",
          right: "14%",
          top: "1%",
          color: "gray",
          lineHeight: "2",
        }}
      >
        Currency
        <ArrowForwardIosIcon style={{ color: "orange" }} />
      </span>

      <div
        style={{
          width: "50%",
          display: "flex",
          flexFlow: "column",
          justifyContent: "flex-end",
          alignContent: "center",
          alignSelf: "center",
          alignItems: "center",
          marginLeft: "6em",
        }}
      >
        <InputLabel htmlFor="CurrencyTypeCode" />
        <TextField
          required
          id="CurrencyTypeCode"
          defaultValue="Currency Type Code"
          variant="filled"
          style={{ width: "50%", margin: "10px", background: "grey" }}
        />
        <TextField
          id="CurrencyTypeName"
          defaultValue="Currency Type Name"
          variant="filled"
          style={{ width: "50%", margin: "10px", background: "grey" }}
        />

        <TextField
          id="From"
          defaultValue="From"
          variant="filled"
          style={{ width: "50%", margin: "10px", background: "grey" }}
        />
        <TextField
          id="To"
          defaultValue="To"
          variant="filled"
          style={{ width: "50%", margin: "10px", background: "grey" }}
        />

        <TextField
          defaultValue="Modifier"
          id="Modifier"
          variant="filled"
          style={{ width: "50%", margin: "10px", background: "grey" }}
        />
        <TextField
          defaultValue="Modifier date Time"
          id="Modifier"
          variant="filled"
          style={{ width: "50%", margin: "10px", background: "grey" }}
        />
        <Button
          style={{
            backgroundColor: "orange",
            width: "30%",
            height: "40px",
            borderRadius: "9px",
            marginLeft: "10em",
          }}
        >
          Submit
        </Button>
        <Button
          style={{
            backgroundColor: "transparent",
            marginRight: "5em",
            color: "white",
          }}
        >
          AddNew <AddBoxIcon style={{ color: "orange" }} />
        </Button>
      </div>
    </>
  );
}
export default FromLayout;
