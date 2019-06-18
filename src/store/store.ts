import { compose, createStore, combineReducers, applyMiddleware } from "redux";

export const store = () => {
  const composeEnhancers =  compose;

  return createStore(
    combineReducers<{}>({}),
    {},
    // composeEnhancers(
    //   applyMiddleware
    // )
  )
}