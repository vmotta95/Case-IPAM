import React from "react";
import { Provider } from "react-redux";
import {store} from './store';

import {UfList} from "./components/UfList"

export function App() {
  return (
  <Provider store={store}>
    <div>IPAM</div>
  <UfList></UfList>
  </Provider>
  );
}


