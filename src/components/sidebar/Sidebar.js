import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import counterpart from "counterpart";
import NavWrapper from "../navbar/navbarWrapper";
import { Switch } from "@material-ui/core";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import LanguageIcon from "@material-ui/icons/Language";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Logo from "../../logo";
import { RowMenu } from "../../languages/Translation";
import Translate from "react-translate-component";
import en from "../../languages/en";
import per from "../../languages/per";
import ar from "../../languages/ar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "grey",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "grey",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

counterpart.registerTranslations("en", en);

counterpart.registerTranslations("ar", ar);

counterpart.registerTranslations("per", per);

export function PermanentDrawerLeft() {
  const classes = useStyles();
  const [Language, setLanguage] = useState(en);

  onlanguagechange = (e) => {
    setLanguage({ Language: e.target.value });
    counterpart.setLocale(e.target.value);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <NavWrapper />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <select
          value={Language}
          onChange={onlanguagechange}
          style={{ background: "gray", border: "1px solid #272626" }}
        >
          <option value="en">EN</option>
          <option value="per">per</option>
          <option value="ar">ar</option>
        </select>
        <Logo />

        <Divider />
        <List>
          {/* {["sdad", "dasdsa", "dasdas", "dasdas", "dasdasd"].map(
            (text, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{IconReducer(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )} */}

          <ListItem button style={{ display: "flex", flexFlow: "column" }}>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="Currency" component="li" className="class" />
              <ListItemIcon>{IconReducer(0)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "12px",
              }}
            >
              <Translate
                content="ExchaneRate"
                component="li"
                className="class"
              />
              <ListItemIcon>{IconReducer(0)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate
                content="COSTOMANDPORT"
                component="li"
                className="class"
              />
              <ListItemIcon>{IconReducer(1)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="Products" component="li" className="class" />
              <ListItemIcon>{IconReducer(2)}</ListItemIcon>
            </div>

            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="Person" component="li" className="class" />
              <ListItemIcon>{IconReducer(3)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="Language" component="li" className="class" />
              <ListItemIcon>{IconReducer(4)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="Region" component="li" className="class" />
              <ListItemIcon>{IconReducer(5)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="Services" component="li" className="class" />
              <ListItemIcon>{IconReducer(6)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="UM" component="li" className="class" />
              <ListItemIcon>{IconReducer(7)}</ListItemIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexFlow: "row-reverse",
                lineHeight: 2,
                width: "80%",
                justifyContent: "space-between",
                fontSize: "14px",
              }}
            >
              <Translate content="UM" component="li" className="class" />
              <ListItemIcon>{IconReducer(8)}</ListItemIcon>
            </div>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
      </main>
    </div>
  );
}

function IconReducer(index) {
  console.log(index, "index");
  switch (index) {
    case 0:
      return <LocalAtmIcon />;
    case 1:
      return <PersonIcon />;
    case 2:
      return <TrendingDownIcon />;

    case 3:
      return <PersonPinCircleIcon />;
    case 4:
      return <ArtTrackIcon />;

    case 5:
      return <LanguageIcon />;

    case 6:
      return <RoomServiceIcon />;

    case 7:
      return <NoteAddIcon />;

    case 8:
      return <VerifiedUserIcon />;
  }
}
