import React, { Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchAppBarTable from "./TableSearch";
import DeleteIcon from "@material-ui/icons/Delete";
import { TablePagination } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const styles = (theme) => ({
  icon: {
    fontSize: 32,
  },
});
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function CustomizedTables() {
  const classes = useStyles();
  const deletestyle = styles();
  // .MuiTableContainer-root {
  //     width: 53%;
  //     overflow-x: auto;
  //     position: fixed;
  //     right: 1%;
  //     left: 46%;
  // }

  return (
    <Fragment>
      <TableContainer
        component={Paper}
        style={{
          width: "53%",
          overflowX: "auto",
          position: "fixed",
          right: "1%",
          left: "46%",
        }}
      >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow style={{ width: "100%" }}>
              <StyledTableCell style={{ color: "orange", fontSize: "10px" }}>
                Currency Type code
              </StyledTableCell>

              <StyledTableCell
                align="right"
                style={{ color: "orange", fontSize: "10px" }}
              >
                Currency Type name
              </StyledTableCell>

              <StyledTableCell
                align="right"
                style={{ color: "orange", fontSize: "10px" }}
              >
                Date
              </StyledTableCell>

              <StyledTableCell
                align="right"
                style={{ color: "orange", fontSize: "10px" }}
              >
                Modifier
              </StyledTableCell>

              <StyledTableCell
                align="right"
                style={{ color: "orange", fontSize: "10px" }}
              >
                Modifier date time:
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "orange", fontSize: "10px", textAlign: "left" }}
                align="right"
              >
                Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon style={{ fill: "orange" }} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TablePagination count={2} variant="outlined" color="primary" />
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default CustomizedTables;
