import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red"


export default theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: red["A400"],
    },
  },
});