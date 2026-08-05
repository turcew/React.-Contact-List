import { put } from "redux-saga/effects";

import api from "../api/contact-service";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
} from "../store/actions/contactActions";

export function* getContactsSaga() {
  yield put(getContactsRequest());
  try {
    const contacts = yield api.get("/contacts").then(({ data }) => data);
    yield put(getContactsSuccess(contacts));
  } catch (error) {
    yield put(getContactsError(error));
  }
}

export function* createContactSaga({ payload }) {
  yield put(addContactRequest());
  try {
    const newContact = yield api
      .post("/contacts", payload)
      .then(({ data }) => data);
    yield yield put(addContactSuccess(newContact));
  } catch (error) {
    yield put(addContactError(error));
  }
}

export function* updateContactSaga({ payload }) {
  yield put(editContactRequest());
  try {
    const updateContact = yield api
      .put(`/contacts/${payload.id}`, payload)
      .then(({ data }) => data);
    yield put(editContactSuccess(updateContact));
  } catch (error) {
    yield put(editContactError(error));
  }
}

export function* deleteContactSaga({ payload }) {
  yield put(delContactRequest());
  try {
    yield api.delete(`/contacts/${payload}`);
    yield put(delContactSuccess(payload));
  } catch (error) {
    yield put(delContactError(error));
  }
}
