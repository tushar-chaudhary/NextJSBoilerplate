import { all } from "redux-saga/effects";
import authSagas from "./authentication/sagas";

export default function* rootSaga(getState) {
  yield all([authSagas()]);
}
