import React from "react";
import "./TodoTitle.css";
import { AppBar, Slide } from "@material-ui/core";

export default function TodoTitle() {

  return (
    <div className="todotitle">
      <AppBar position="sticky">
          <Slide direction="right" in={true} timeout={{enter: 1500}}>
              <h1 className="title">Todo</h1>
          </Slide>
      </AppBar>
    </div>
  )
}