import React from "react";
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
import LanguageSwitcher from "../../languages/Translation";
import PersonIcon from "@material-ui/icons/Person";
import translations from "../../languages/Translation";
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

export function PermanentDrawerLeft() {
  const classes = useStyles();
  const enMenu = translations;
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
        {/* make it stylish dropdown */}
        <LanguageSwitcher />
        <div className={classes.toolbar} />
        <Logo />
        <Divider />
        <List>
          {[
            "Currency",
            "Exchange Rate",
            "products",
            "person",
            "costom And Port",
            "Language",
            "REGION",
            "SERVICES",
            "UM",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {IconReducer(index)}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
