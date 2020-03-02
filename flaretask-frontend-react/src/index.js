import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from "redux"
import rootReducer from "./question/reducers/reducers";
import { fetchQuestions } from "./question/actions/Actions";
import { Provider } from 'react-redux'
import React from "react";
import QuestionTable from "./question/components/QuestionTable";
import { render } from 'react-dom'
import QuestionTableContainer from "./question/components/QuestionTableContainer";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(fetchQuestions()).then(console.log(store.getState()));

render(
  <Provider store={store}>
    <QuestionTableContainer />
  </Provider>,
  document.getElementById('root')
)