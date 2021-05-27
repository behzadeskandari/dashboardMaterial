import React, { useState } from "react";
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
import { DatePicker } from "@material-ui/pickers";
import { Label } from "@material-ui/icons";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const CalenderFarsi = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      locale="fa" // add this
    />
  );
};
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
        <CalenderFarsi />
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
