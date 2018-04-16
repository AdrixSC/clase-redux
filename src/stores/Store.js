import React from "react";
import reducer from "../reducers/Reducer";
import {createStore} from "redux";


export default createStore(reducer)