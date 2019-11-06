import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducerApp";

import TForm from "./TForm";
import CardMap from "./CardMap";

const TFormList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TForm dispatch={dispatch} />
      <div className="container">
        {state.map(bMap => (
          <CardMap key={bMap.id} bMap={bMap} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
export default TFormList;
