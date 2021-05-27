import React from "react";
import { combineReducers, createStore } from "redux";

import EnglishReducer, {
  PersianReducer,
  ArabicReducer,
} from "./TranslationReducer";

const rootReducer = combineReducers({
  EnglishReducer,
  PersianReducer,
  ArabicReducer,
});
